import "./WomenTops.css";
import { Link } from "react-router-dom";
import womenTopsData from "../../data/womenTopsData";

function WomenTops() {
  return (
    <section className="women-page">

      <div className="filter-bar">

        <div className="left-filters">
          <span>Availability ▼</span>
          <span>Price ▼</span>
        </div>

        <div className="right-filter">
          <span>Sort By: Featured ▼</span>
        </div>

      </div>

      <div className="women-grid">

        {womenTopsData.map((product) => (

          <div className="women-card" key={product.id}>

            <div className="image-wrapper">

              <span className="sale-badge">
                Sale
              </span>

              <Link to={`/product/${product.id}`}>

                <img
                  src={product.image}
                  alt={product.title}
                />

              </Link>

            </div>

            <h4>{product.title}</h4>

            <div className="price-box">

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

export default WomenTops;