import { useState } from 'react'

export function useCopy() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
      return true
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand('copy')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        return true
      } catch (fallbackErr) {
        console.error('Failed to copy text: ', fallbackErr)
        return false
      } finally {
        document.body.removeChild(textArea)
      }
    }
  }

  return { copied, copyToClipboard }
}
