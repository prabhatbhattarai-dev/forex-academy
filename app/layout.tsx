import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forex Academy Nepal | Learn. Practise. Discuss.',
  description: 'The premier educational platform for the Nepalese trading community. Learn the markets without risking your capital.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="nav-container">
            <a href="/" className="logo">
              <span className="logo-icon">📈</span> Forex Academy <span className="nepal-text">Nepal</span>
            </a>
            <div className="nav-links">
              <a href="#learn">Learn</a>
              <a href="#practice">Practise</a>
              <a href="#community">Community</a>
              <a href="#nepal-safety" className="safety-link">Nepal & Safety</a>
              <a href="#login" className="btn-nav">Log in</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <div className="footer-content">
            <p><strong>Forex Academy Nepal</strong> — Understand the market. Understand the risks.</p>
            <p className="disclaimer">Disclaimer: This platform does not execute real-money trades or accept deposits. All trading is simulated for educational purposes.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
