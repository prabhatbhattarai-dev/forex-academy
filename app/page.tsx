import { useState } from 'react';

export default function TradingSimulator() {
  const [balance, setBalance] = useState(10000); // Start with $10,000 virtual money
  const [eurusdPrice, setEurusdPrice] = useState(1.0850); // Current mock price

  // Function to simulate a trade
  const handleTrade = (type: 'buy' | 'sell') => {
    const tradeAmount = 100; // Simple example: trading $100 worth
    
    // Mocking a price change (up or down)
    const priceChange = (Math.random() - 0.5) * 0.002; 
    
    if (type === 'buy') {
      setBalance(balance - tradeAmount); // Deduct for margin
      setEurusdPrice(prev => prev + priceChange);
    } else {
      setBalance(balance + tradeAmount);
      setEurusdPrice(prev => prev - priceChange);
    }
  };

  return (
    <div className="p-10 font-sans">
      <h1 className="text-3xl font-bold mb-4">Demo Trading Dashboard</h1>
      
      {/* Account Balance */}
      <div className="bg-green-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl">Virtual Balance: <strong>${balance.toFixed(2)}</strong></h2>
      </div>

      {/* Market Data */}
      <div className="border p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">EUR / USD</h2>
        <p className="text-2xl font-mono">{eurusdPrice.toFixed(4)}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button 
          onClick={() => handleTrade('buy')}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Buy (Long)
        </button>
        <button 
          onClick={() => handleTrade('sell')}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
        >
          Sell (Short)
        </button>
      </div>
    </div>
  );
}
