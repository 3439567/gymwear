import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../App";

import accessoriesData from "../data/accessoriesData";
import collectionData from "../data/collectionData";
import productGridData from "../data/productGridData";
import womenLeggingsData from "../data/WomenLeggingsData";
import womenTopsData from "../data/womenTopsData";
import summerJacketsData from "../data/summerJacketsData";
import mensTeesData from "../data/mensTeesData";


function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

const allProducts = [
  ...accessoriesData,
  ...womenLeggingsData,
  ...womenTopsData,
  ...summerJacketsData,
  ...mensTeesData,
  ...collectionData,
  ...productGridData
];

  const product = allProducts.find(
    (item) => item.id === Number(id)
  );

  // Prevent crash if product not found
  if (!product) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>Product Not Found</h2>
        <p>Please check the product ID or data file.</p>
      </div>
    );
  }

  return (
    <div className="product-details">

      <div className="product-image">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="product-info">

        <h1 className="product-title">
          {product.title}
        </h1>

        <div className="product-price">
          ₹{product.price}
        </div>

        <p className="product-description">
          {product.description}
        </p>

        <button
          className="add-cart-btn"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>

        <ul className="product-features">
          <li>✓ Premium Quality Material</li>
          <li>✓ Fast Delivery Across India</li>
          <li>✓ Easy Returns & Exchange</li>
          <li>✓ Trusted Fitness Brand</li>
        </ul>

      </div>

    </div>
  );
}

export default ProductDetails;