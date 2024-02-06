import React from 'react';

const ShopContent = () => {
  return (
    <div className='Service-list'>
      <div>
        <h2>Services</h2>
        <ul className='list'>
          <li>Maintenance</li>
          <li>Cycle Repairs</li>
          <li>Tune-Ups</li>
          <li>Customization</li>
          <li>Wheel Truing</li>
          <li>Frame Repairs</li>
        </ul>
      </div>
      
      <div className='Price-list'> 
        <h2>Prices</h2>
        <ul>
          <li>Puncture Repair: ₹100-₹200</li>
          <li>Chain Replacement: ₹200-₹300</li>
          <li>Brake Repair: ₹300-₹500</li>
          <li>Gear Adjustment: ₹100-₹200</li>
          <li>Gear Adjustment: ₹100-₹200</li>
        </ul>
      </div>
<div className='ShopImage'>
<div className='Cycle-image'>
        <img src="/images/Cycle.jpg" alt=""/>
      </div>

      <div className='Cycle2-image'>
        <img src="/images/Cycle2.webp" alt=""/>
      </div>
      <div className='Cycle3-image'>
        <img src="/images/Cycle3.webp" alt=""/>
      </div>
</div>
     
    </div>
  );
};

export default ShopContent;



