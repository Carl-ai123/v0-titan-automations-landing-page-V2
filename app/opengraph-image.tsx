import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Titan Automations — AI Automation Agency'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0A0A0A',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)',
          }}
        />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: '#FAFAF9', fontSize: '22px', fontWeight: 600, letterSpacing: '-0.02em' }}>
            Titan
          </span>
          <span style={{ color: '#888888', fontSize: '22px', letterSpacing: '-0.02em' }}>
            Automations
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 500,
              color: '#2563EB',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            AI Automation Agency · Kent &amp; South East
          </div>
          <div
            style={{
              fontSize: '68px',
              fontWeight: 700,
              color: '#FAFAF9',
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              maxWidth: '800px',
            }}
          >
            AI systems that work while you don&apos;t.
          </div>
          <div
            style={{
              fontSize: '22px',
              color: '#888888',
              lineHeight: 1.5,
              maxWidth: '640px',
            }}
          >
            Websites, automations, chatbots, and CRM pipelines — built and owned by you.
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '32px' }}>
            {['14-day delivery', 'No lock-in', 'Fixed quote'].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E' }} />
                <span style={{ color: '#888888', fontSize: '15px' }}>{item}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              padding: '10px 24px',
              background: '#2563EB',
              borderRadius: '100px',
              color: '#FFFFFF',
              fontSize: '15px',
              fontWeight: 600,
            }}
          >
            titan-automations.com
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
