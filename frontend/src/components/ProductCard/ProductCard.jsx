import './ProductCard.css';

function ProductCard({ image, title, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />

      <div className="product-info">
        <h3>{title}</h3>

        <p className="price">
          ₹ {price}
        </p>

        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;