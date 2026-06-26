import "./Footer.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-column">
          <h3>ABOUT OUR STORE</h3>

          <p>
            GymX was born out of a dream to bring you
            high-performance activewear that combines
            comfort, style and performance.
          </p>

          <p>
            Our products are proudly 100% MADE IN INDIA.
          </p>
        </div>

        {/* Menu */}
        <div className="footer-column">
          <h3>FOOTER MENU</h3>

          <ul>
            <li>Size Chart</li>
            <li>Shipping</li>
            <li>Exchanges & Returns</li>
            <li>Search</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Collection */}
        <div className="footer-column">
          <h3>FOOTER COLLECTION</h3>

          <ul>
            <li>Women</li>
            <li>T-Shirts</li>
            <li>Track Pants</li>
            <li>Shorts</li>
            <li>Jackets</li>
            <li>Accessories</li>
            <li>Offers</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-column">
          <h3>NEWSLETTER</h3>

          <p>
            Get 10% Off by signing up for our newsletter
          </p>

          <div className="newsletter-box">
            <input
              type="email"
              placeholder="Your e-mail"
            />

            <button>→</button>
          </div>
        </div>

        {/* Social */}
        <div className="footer-column">
          <h3>FOLLOW US</h3>

          <p>
            Keep up with new launches and fitness content
            on Instagram!
          </p>

          <div className="social-icon">
            <FaInstagram />
          </div>
        </div>

      </div>

      <div className="footer-bottom">

        <div>India (INR ₹)</div>

        <div>
          © 2026 GymX | Powered by React
        </div>

      </div>

      {/* Floating Whatsapp */}
      <a
        href="https://wa.me/919999999999"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>

    </footer>
  );
}

export default Footer;