import React from 'react';
import { Link } from 'react-router-dom';

function DealsPage() {
  const deals = [
    {
      id: 1,
      title: 'Samsung 55-inch 4K Crystal UHD Smart TV',
      discount: '48% OFF',
      dealPrice: 'Rs. 42,990',
      mrp: 'Rs. 82,900',
      endsIn: '03h 42m',
      category: 'Television'
    },
    {
      id: 2,
      title: 'ASUS TUF Gaming F15 (16GB/512GB RTX 3050)',
      discount: '32% OFF',
      dealPrice: 'Rs. 56,990',
      mrp: 'Rs. 83,990',
      endsIn: '01h 15m',
      category: 'Gaming Laptop'
    },
    {
      id: 3,
      title: 'Noise ColorFit Pro 5 Smartwatch with AMOLED',
      discount: '65% OFF',
      dealPrice: 'Rs. 2,799',
      mrp: 'Rs. 7,999',
      endsIn: '06h 20m',
      category: 'Wearables'
    },
    {
      id: 4,
      title: 'JBL Cinema SB271 220W Dolby Soundbar',
      discount: '45% OFF',
      dealPrice: 'Rs. 8,999',
      mrp: 'Rs. 16,999',
      endsIn: '04h 50m',
      category: 'Audio'
    }
  ];

  return (
    <div className="page-container">
      <div className="deals-header">
        <div className="deals-header-badge">Daily Offers</div>
        <h2>Lightning Deals</h2>
        <p>Prices subject to available stock.</p>
      </div>

      <div className="deals-grid">
        {deals.map((deal) => (
          <div key={deal.id} className="deal-card">
            <div className="deal-discount-ribbon">{deal.discount}</div>
            <div className="deal-category-pill">{deal.category}</div>
            <h4 className="deal-title">{deal.title}</h4>
            <div className="deal-timer">Ends in {deal.endsIn}</div>
            <div className="deal-price-row">
              <span className="deal-price">{deal.dealPrice}</span>
              <span className="deal-mrp">{deal.mrp}</span>
            </div>
            <Link to="/cart" className="claim-deal-btn">
              Claim Deal and Go to Cart
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DealsPage;
