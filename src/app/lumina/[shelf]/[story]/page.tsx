'use client'

import { useCallback } from 'react'

export default function StoryPage() {
  const handleIframeLoad = useCallback((e: React.SyntheticEvent<HTMLIFrameElement>) => {
    const iframe = e.currentTarget
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
      if (iframeDoc) {
        // Create and inject custom styles for Twine/Harlowe stories
        const style = iframeDoc.createElement('style')
        style.textContent = `
          /* Reset and full viewport */
          html {
            width: 100% !important;
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          body {
            width: 100% !important;
            height: 100% !important;
            min-height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow-x: hidden !important;
            overflow-y: auto !important;
          }
          
          /* Twine/Harlowe specific elements */
          tw-story {
            display: block !important;
            width: 100% !important;
            min-height: 100% !important;
            height: auto !important;
            padding: 2rem !important;
            box-sizing: border-box !important;
            font-size: 20px !important;
            line-height: 1.8 !important;
          }
          
          tw-passage {
            display: block !important;
            width: 100% !important;
            max-width: 800px !important;
            margin: 0 auto !important;
            padding: 1rem !important;
            box-sizing: border-box !important;
          }
          
          /* Typography for tablet viewing */
          tw-story, tw-passage, p, div {
            font-size: 20px !important;
            line-height: 1.8 !important;
          }
          
          /* Links styling for touch */
          tw-link, a {
            font-size: inherit !important;
            padding: 0.5rem 0 !important;
            display: inline-block !important;
            min-height: 44px !important;
            line-height: 44px !important;
          }
          
          /* Responsive adjustments */
          @media (min-width: 768px) {
            tw-story {
              padding: 3rem !important;
              font-size: 22px !important;
            }
            
            tw-story, tw-passage, p, div {
              font-size: 22px !important;
            }
          }
          
          @media (min-width: 1024px) {
            tw-story {
              padding: 4rem !important;
              font-size: 24px !important;
            }
            
            tw-passage {
              max-width: 900px !important;
            }
            
            tw-story, tw-passage, p, div {
              font-size: 24px !important;
            }
          }
        `
        iframeDoc.head.appendChild(style)
      }
    } catch (error) {
      console.log('Could not inject styles into iframe:', error)
    }
  }, [])

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh', 
      width: '100vw',
      backgroundColor: '#1a1a2e',
      overflow: 'hidden'
    }}>
      {/* Back button header */}
      <div style={{ 
        padding: '1rem', 
        flexShrink: 0 
      }}>
        <button 
          onClick={() => window.history.back()}
          style={{
            padding: '0.5rem 1.5rem',
            backgroundColor: '#9D4EDD',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          ← Back to Shelf
        </button>
      </div>
      
      {/* Iframe container - takes remaining height */}
      <div style={{ 
        flex: 1, 
        padding: '0 1rem 1rem 1rem',
        minHeight: 0 
      }}>
        <iframe 
          src="/shell-beach.html"
          style={{
            width: '100%',
            height: '100%',
            border: '2px solid rgba(157, 78, 221, 0.3)',
            borderRadius: '12px',
            backgroundColor: 'white'
          }}
          title="Story"
          onLoad={handleIframeLoad}
        />
      </div>
    </div>
  )
}