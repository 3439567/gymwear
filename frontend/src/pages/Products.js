import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../App';
import ShopifyBuyButton from '../components/ShopifyBuyButton/ShopifyBuyButton';
function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Our Gym Wear Collection</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {products.map(product => (
          <div key={product._id} style={{ 
            border: '1px solid #ddd', 
            borderRadius: '12px', 
            padding: '15px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            <img 
              src={product.image} 
              alt={product.name}
              style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h3>{product.name}</h3>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>₹{product.price}</p>
            <button 
              onClick={() => addToCart(product)}
              style={{ 
                padding: '12px 25px', 
                background: '#ef4444', 
                color: 'white', 
                border: 'none', 
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;