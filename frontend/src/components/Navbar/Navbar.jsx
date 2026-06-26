import './Navbar.css';
import Ticker from '../Ticker/Ticker';
import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <>
      <Ticker />

      <div className="announcement-bar">
        Code WIN120 | Upto 40% OFF for orders above ₹1600 | Pay Online
      </div>

      <nav className="navbar">

        <div className="logo">
          GYMWEAR
        </div>

        <ul className="nav-links">

          <li>
            <Link to="/">Home</Link>
          </li>

          {/* Women Dropdown */}
          <li className="dropdown">
            <span>Women ▾</span>

            <div className="dropdown-menu">
              <Link to="/women-tops">Womens Tops</Link>
              <Link to="/women-leggings">Womens Leggings</Link>
            </div>
          </li>

          {/* Men Dropdown */}
          <li className="dropdown">
            <span>Men ▾</span>

            <div className="dropdown-menu">
              <Link to="/summer-jackets">Summer Jacket / Hoodie</Link>
              <Link to="/mens-tees">Mens Tee</Link>
            </div>
          </li>

          <li>
            <Link to="/accessories">Accessories</Link>
          </li>

        </ul>

        <div className="nav-icons">

          <FaSearch />

          <FiUser />

          <Link to="/cart" className="cart-icon">
            <HiOutlineShoppingBag />

            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}
          </Link>

        </div>

      </nav>
    </>
  );
}

export default Navbar;