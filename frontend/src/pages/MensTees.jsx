import "./MensTees.css";
import { Link } from "react-router-dom";
import mensTeesData from "../data/mensTeesData";
function MensTees() {

  return (
    <section className="mens-page">

      <div className="filter-bar">

        <div className="left-filters">
          <span>Availability ▼</span>
          <span>Price ▼</span>
        </div>

        <div className="right-filter">
          <span>Sort By: Featured ▼</span>
        </div>

      </div>

      <div className="mens-grid">

{mensTeesData.map((product) => (
          <div className="mens-card" key={product.id}>

        <div className="image-wrapper">

  <Link to={`/product/${product.id}`}>

    <img
      src={product.image}
      alt={product.title}
    />

  </Link>

</div>

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

export default MensTees;