'use client';

import { useState } from 'react';

export default function TradingSimulator() {
  const [balance, setBalance] = useState(10000);
  const [eurusdPrice, setEurusdPrice] = useState(1.0850);

  const handleTrade = (type: 'buy' | 'sell') => {
    const tradeAmount = 100; 
    // Mocking a price change
    const priceChange = (Math.random() - 0.5) * 0.002; 
    
    if (type === 'buy') {
      setBalance(balance - tradeAmount);
      setEurusdPrice(prev => prev + priceChange);
    } else {
      setBalance(balance + tradeAmount);
      setEurusdPrice(prev => prev - priceChange);
    }
  };

  return (
    <div className="container">
      <h1>Forex Academy Dashboard 📈</h1>
      
      <div className="dashboard-card">
        <div className="balance-box">
          Virtual Balance: <strong>${balance.toFixed(2)}</strong>
        </div>

        <div className="price-box">
          <h2>EUR / USD</h2>
          <div className="price-value">{eurusdPrice.toFixed(4)}</div>
        </div>

        <div className="button-group">
          <button className="btn btn-buy" onClick={() => handleTrade('buy')}>
            Buy (Long)
          </button>
          <button className="btn btn-sell" onClick={() => handleTrade('sell')}>
            Sell (Short)
          </button>
        </div>
      </div>
    </div>
  );
}
