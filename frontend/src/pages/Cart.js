import React, { useContext } from 'react';
import { CartContext } from '../App';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handlePayment = () => {
    const options = {
      key: 'rzp_test_T5OUIXQzM4eeiW', // Replace with your Razorpay Key ID
      amount: total * 100, // Amount in paise
      currency: 'INR',
      name: 'GYMWEAR',
      description: 'Gym Wear Purchase',

      handler: function (response) {
        alert(
          `Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`
        );
      },

      prefill: {
        name: 'Customer',
        email: 'customer@example.com',
        contact: '9999999999',
      },

      theme: {
        color: '#ff6600',
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div
      style={{
        padding: '30px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <h1>Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>

          <Link
            to="/products"
            style={{
              display: 'inline-block',
              marginTop: '10px',
              padding: '12px 24px',
              background: '#ef4444',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '6px',
            }}
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'center',
                  padding: '15px',
                  borderBottom: '1px solid #ddd',
                  marginBottom: '15px',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '120px',
                    height: '120px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />

                <div style={{ flex: 1 }}>
                  <h3>{item.title}</h3>

                  <p>
                    Price: <strong>₹{item.price}</strong>
                  </p>

                  <p>
                    Quantity: <strong>{item.quantity || 1}</strong>
                  </p>

                  <p>
                    Subtotal:{' '}
                    <strong>
                      ₹{item.price * (item.quantity || 1)}
                    </strong>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '30px',
              textAlign: 'right',
            }}
          >
            <h2>Total: ₹{total}</h2>

            <button
              style={{
                padding: '15px 40px',
                background: '#22c55e',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '18px',
                cursor: 'pointer',
              }}
              onClick={handlePayment}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;