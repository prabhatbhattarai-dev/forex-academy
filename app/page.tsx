export default function Home() {
  return (
    <div className="homepage">
      {/* HERO SECTION */}
      <header className="hero">
        <div className="hero-content">
          <span className="badge">Beginner Friendly</span>
          <h1>Understand Forex Before You Risk Money.</h1>
          <p>Learn the market. Understand the risks. Practise without real money. The premier educational platform for the Nepalese trading community.</p>
          <div className="hero-buttons">
            <a href="#learn" className="btn-primary">Start Learning Free</a>
            <a href="#practice" className="btn-secondary">Try Demo Simulator</a>
          </div>
        </div>
      </header>

      {/* ROADMAP SECTION */}
      <section id="learn" className="section container">
        <h2 className="section-title">Your Learning Roadmap</h2>
        <div className="roadmap-grid">
          <div className="roadmap-card">
            <div className="step-num">01</div>
            <h3>Market Basics</h3>
            <p>Currency pairs, pips, spreads, and how the market actually works.</p>
          </div>
          <div className="roadmap-card">
            <div className="step-num">02</div>
            <h3>Chart Analysis</h3>
            <p>Candlesticks, trends, support and resistance, and market structure.</p>
          </div>
          <div className="roadmap-card">
            <div className="step-num">03</div>
            <h3>Risk Management</h3>
            <p>Leverage, margin, drawdown, and protecting your capital.</p>
          </div>
          <div className="roadmap-card">
            <div className="step-num">04</div>
            <h3>Practice & Psychology</h3>
            <p>Journaling, emotional discipline, and simulated trading.</p>
          </div>
        </div>
      </section>

      {/* COMMUNITY & PRACTICE PREVIEW */}
      <section id="practice" className="section bg-panel container">
        <div className="split-layout">
          <div>
            <h2>Practise Without Risk</h2>
            <p className="text-muted">Our simulator uses entirely virtual funds. Test your strategies, make mistakes, and learn how leverage works without losing real money.</p>
            <ul className="feature-list">
              <li>✅ $10,000 Virtual Balance</li>
              <li>✅ Live Market Data Simulation</li>
              <li>✅ Trade Journaling</li>
            </ul>
            <button className="btn-primary">Launch Demo (Coming Soon)</button>
          </div>
          <div className="mock-dashboard">
            <div className="mock-header">EUR / USD</div>
            <div className="mock-price">1.0850</div>
            <div className="mock-buttons">
              <div className="mock-btn buy">BUY</div>
              <div className="mock-btn sell">SELL</div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY GUIDELINES */}
      <section id="community" className="section container">
        <h2 className="section-title">Community Guidelines</h2>
        <p className="section-subtitle">To keep our community safe and helpful, all members must follow these rules:</p>
        <div className="guidelines-box">
          <ul>
            <li><strong>No Financial Advice:</strong> Share analysis, not financial advice. Do not tell others what to buy or sell.</li>
            <li><strong>No Signal Sellers:</strong> We have a zero-tolerance policy for paid signal groups, Telegram scams, or "guaranteed profit" schemes.</li>
            <li><strong>Respect Everyone:</strong> Treat beginners with patience. We were all beginners once.</li>
            <li><strong>Beware of Scams:</strong> Never send money to strangers claiming to be brokers or mentors.</li>
          </ul>
        </div>
      </section>

      {/* NEPAL SAFETY PANEL */}
      <section id="nepal-safety" className="section safety-section">
        <div className="container">
          <h2>🇳🇵 Important for Nepal Residents</h2>
          <p>Forex trading involves significant risk and is subject to strict regulations by <strong>Nepal Rastra Bank (NRB)</strong>. Before engaging in any foreign exchange activity, you must verify the current legal rules. This platform is for educational purposes only and does not facilitate real-money trading.</p>
          <a href="https://www.nrb.org.np/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Read NRB Guidelines</a>
        </div>
      </section>
    </div>
  );
}
