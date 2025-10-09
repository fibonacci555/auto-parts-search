import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Suspense } from "react"
import Clarity from '@microsoft/clarity';
import Script from "next/script"


const inter = Inter({ subsets: ["latin"] })
//const projectId = "tn7mpehk4g"
//Clarity.init(projectId);

export const metadata: Metadata = {
  title: "Ecom Insider – Find The Best Ecom Tools In Seconds",
  description: "Insider access to the best Ecom tools at pricing you won't find anywhere else.",
  openGraph: {
    title: "Ecom Insider – Find The Best Ecom Tools In Seconds",
    description: "Insider access to the best Ecom tools at pricing you won't find anywhere else.",
    images: [
      {
        url: "/banner.jpeg",
        width: 1024,
        height: 1024,
        alt: "Ecom Insider hero graphic",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecom Insider – Find The Best Ecom Tools In Seconds",
    description: "Insider access to the best Ecom tools at pricing you won't find anywhere else.",
    images: ["/banner.jpeg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "tn7mpehk4g");
        `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Suspense
          fallback={
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-white/20 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
                <h2 className="text-xl font-semibold mb-2">Loading Ecom Insider</h2>
                <p className="text-white/60">Preparing your vip experience...</p>
              </div>
            </div>
          }
        >
          {children}
        </Suspense>
      </body>
    </html>
  )
}
