import "./WomenLeggings.css";
import { Link } from "react-router-dom";


function WomenLeggings() {

  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1506629905607-d405b7a6e6d4?w=800",
      title: "Black Camo Leggings",
      oldPrice: 1199,
      price: 749
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
      title: "Teal Blue Leggings",
      oldPrice: 999,
      price: 699
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
      title: "Grey Flex Leggings",
      oldPrice: 1199,
      price: 749
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
      title: "Olive Green Leggings",
      oldPrice: 1199,
      price: 749
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
      title: "Mystery Blue Leggings",
      oldPrice: 999,
      price: 699
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
      title: "Ice Blue Leggings",
      oldPrice: 999,
      price: 699
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800",
      title: "Ocean Print Leggings",
      oldPrice: 999,
      price: 699
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800",
      title: "Squat Proof Leggings",
      oldPrice: 999,
      price: 699
    }
  ];

  return (
    <section className="leggings-page">

      <div className="filter-bar">

        <div className="left-filters">
          <span>Availability ▼</span>
          <span>Price ▼</span>
        </div>

        <div className="right-filter">
          Sort By: Featured ▼
        </div>

      </div>

      <div className="leggings-grid">

        {products.map((product) => (

          <div className="leggings-card" key={product.id}>

        <Link
  to={`/product/${product.id}`}
  className="image-wrapper"
  style={{
    textDecoration: "none",
    color: "inherit"
  }}
>

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

            <div className="sizes">
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default WomenLeggings;