import React from 'react';

// Task 2: OrderStatus component receiving boolean isDelivered and using ternary operator
function OrderStatus({ isDelivered, orderId = 'OD-892401' }) {
  return (
    <div className="card-box order-status-box">
      <div className="box-header">
        <span className="pill">Task 2</span>
        <h3>Order Status Tracker</h3>
      </div>
      <p className="box-desc">Conditionally renders status using a ternary operator</p>

      <div className="order-card">
        <div className="order-top">
          <span className="order-id">Order ID: {orderId}</span>
          <span className={`status-pill ${isDelivered ? 'status-delivered' : 'status-transit'}`}>
            {isDelivered ? 'Completed' : 'In Progress'}
          </span>
        </div>

        {/* Task 2: Ternary operator for conditional rendering */}
        <div className="status-display">
          <h4 className={isDelivered ? 'delivered-text' : 'transit-text'}>
            {isDelivered ? 'Order Delivered 🎉' : 'Order on the way 🚚'}
          </h4>
          <p className="status-sub">
            {isDelivered
              ? 'Package was handed to customer. Thank you for ordering!'
              : 'Delivery partner has picked up your parcel and is en route.'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderStatus;
