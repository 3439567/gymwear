import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import productGridData from "../../data/productGridData";

function ProductGrid() {
  return (
    <section className="product-section">

      <h2>New Arrivals</h2>

      <div className="product-grid">

        {productGridData.map((product) => (

          <Link
            key={product.id}
            to={`/product/${product.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "block"
            }}
          >
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
            />
          </Link>

        ))}

      </div>

      <div className="view-all-container">
        <Link to="/products">
          <button className="view-all-btn">
            View All
          </button>
        </Link>
      </div>

    </section>
  );
}

export default ProductGrid;