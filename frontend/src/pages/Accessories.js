import "./Accessories.css";
import { Link } from "react-router-dom";
import accessoriesData from "../data/accessoriesData";

function Accessories() {

  return (
    <section className="accessories-page">

      <div className="filter-bar">
        <div className="left-filters">
          <span>Availability ▼</span>
          <span>Price ▼</span>
        </div>

        <div className="right-filter">
          <span>Sort By: Featured ▼</span>
        </div>
      </div>

      <div className="accessories-grid">

        {accessoriesData.map((product) => (

          <div className="accessories-card" key={product.id}>

            <Link to={`/product/${product.id}`} className="image-wrapper">

              <span className="sale-badge">
                Sale
              </span>

              <img
                src={product.image}
                alt={product.title}
              />

            </Link>

            <h4>{product.title}</h4>

            <div className="price-box">

              <span className="old-price">
                ₹{product.oldPrice}
              </span>

              <span className="new-price">
                ₹{product.price}
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Accessories;