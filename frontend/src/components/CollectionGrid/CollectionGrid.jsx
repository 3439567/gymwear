import "./CollectionGrid.css";
import { Link } from "react-router-dom";
import collectionData from "../../data/collectionData";

function CollectionGrid() {
  return (
    <section className="collection-section">

      <h2>Collections</h2>

      <div className="collection-grid">

        {collectionData.map((item) => (

          <Link
            to={`/product/${item.id}`}
            className="collection-card"
            key={item.id}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="collection-title">
              {item.title} →
            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}

export default CollectionGrid;