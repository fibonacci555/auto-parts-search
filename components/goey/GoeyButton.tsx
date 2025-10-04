import React, { useEffect, useRef } from 'react';
import './GooeyButton.css';

type ColorIndex = 1 | 2 | 3 | 4;

export interface GooeyButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;                  // se passar href, renderiza <a>
  as?: 'button' | 'a';
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;

  // Efeitos (mesma “vibe” do GooeyNav)
  animationTime?: number;         // base ms
  particleCount?: number;         // nº de partículas por “burst”
  particleDistances?: [number, number]; // [raio inicial, raio final]
  particleR?: number;             // fator de variação de rotação
  timeVariance?: number;          // jitter de tempo
  colors?: ColorIndex[];          // índices das --color-*
  trigger?: 'click' | 'hover';    // quando disparamos o efeito
}

const GooeyButton: React.FC<GooeyButtonProps> = ({
  children,
  onClick,
  href,
  as,
  disabled = false,
  className = '',
  style,

  // defaults “irmãos” do teu nav
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  trigger = 'click',
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const clickTargetRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  // ——— Helpers partilhados com o GooeyNav ———
  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (distance: number, pointIndex: number, totalPoints: number): [number, number] => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i: number, t: number, d: [number, number], r: number) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
    };
  };

  const makeParticles = (element: HTMLElement) => {
    const d: [number, number] = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', `${bubbleTime}ms`);

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove('active');

      setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.classList.add('particle');
        particle.style.setProperty('--start-x', `${p.start[0]}px`);
        particle.style.setProperty('--start-y', `${p.start[1]}px`);
        particle.style.setProperty('--end-x', `${p.end[0]}px`);
        particle.style.setProperty('--end-y', `${p.end[1]}px`);
        particle.style.setProperty('--time', `${p.time}ms`);
        particle.style.setProperty('--scale', `${p.scale}`);
        particle.style.setProperty('--color', `var(--color-${p.color}, white)`);
        particle.style.setProperty('--rotate', `${p.rotate}deg`);

        point.classList.add('point');
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add('active');
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {
            // Do nothing
          }
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = (element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };

  // ——— Disparo do efeito ———
  const burst = () => {
    const btn = clickTargetRef.current as HTMLElement | null;
    if (!btn) return;
    updateEffectPosition(btn);

    // reset texto (animação)
    if (textRef.current) {
      textRef.current.classList.remove('active');
      void textRef.current.offsetWidth; // reflow
      textRef.current.classList.add('active');
    }
    if (filterRef.current) {
      // limpar restos
      const particles = filterRef.current.querySelectorAll('.particle');
      particles.forEach(p => p.remove());
      makeParticles(filterRef.current);
    }
  };

  // ——— Eventos ———
  const handleClick = (e: React.MouseEvent<any>) => {
    if (disabled) return;
    burst();
    if (onClick && !href) onClick(e as React.MouseEvent<HTMLButtonElement>);
  };

  const handleKeyDown = (e: React.KeyboardEvent<any>) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      burst();
      if (onClick && !href) onClick(e as unknown as React.MouseEvent<HTMLButtonElement>);
      if (href) {
        // navegação via teclado
        window.location.assign(href);
      }
    }
  };

  const handleHover = () => {
    if (trigger === 'hover' && !disabled) burst();
  };

  // ——— Mount + resize ———
  useEffect(() => {
    const el = clickTargetRef.current as HTMLElement | null;
    const host = containerRef.current;
    if (!el || !host) return;

    updateEffectPosition(el);
    textRef.current?.classList.add('active');

    const ro = new ResizeObserver(() => updateEffectPosition(el));
    ro.observe(host);
    return () => ro.disconnect();
  }, []);

  // Decide o elemento “clicável”
  const isLink = (as === 'a' || (!!href && as !== 'button'));
  const Tag: any = isLink ? 'a' : 'button';

  return (
    <span className={`gooey-btn ${disabled ? 'is-disabled' : ''} ${className}`} style={style} ref={containerRef}>
      <Tag
        ref={clickTargetRef}
        className="gooey-btn__clickable"
        href={isLink ? href : undefined}
        disabled={!isLink ? disabled : undefined}
        aria-disabled={isLink ? (disabled ? 'true' : undefined) : undefined}
        onClick={handleClick}
        onMouseEnter={handleHover}
        onKeyDown={handleKeyDown}
      >
        {children}
      </Tag>

      {/* camada dos efeitos */}
      <span className="effect filter" ref={filterRef} />
      <span className="effect text" ref={textRef} />
    </span>
  );
};

export default GooeyButton;
