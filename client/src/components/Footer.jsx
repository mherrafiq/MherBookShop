import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="site-footer">
      {/* Newsletter Banner */}
      <div className="footer-newsletter">
        <div className="footer-newsletter-inner">
          <h2 className="footer-newsletter-title">Exclusive offers in your inbox</h2>
          <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              className="footer-newsletter-input"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address for newsletter"
            />
            <button type="submit" className="footer-newsletter-btn" id="footer-subscribe-btn">
              {subscribed ? "✓ Subscribed!" : "SUBSCRIBE"}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="footer-body">
        <div className="footer-body-inner">

          {/* About Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">ABOUT</h4>
            <ul className="footer-links">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">CUSTOMER SERVICE</h4>
            <ul className="footer-links">
              <li><Link to="/faqs" className="footer-link">FAQs</Link></li>
              <li><Link to="/faqs#paymentsdelivery-10" className="footer-link footer-link--accent">International Shipping</Link></li>
              <li><Link to="/exchange-refund" className="footer-link">Exchange &amp; Refund Policy</Link></li>
              <li><Link to="/faqs#payments-delivery" className="footer-link footer-link--accent">Shipping &amp; Returns</Link></li>
              <li><Link to="/faqs#paymentsdelivery-01" className="footer-link">Payment Methods</Link></li>
              <li><Link to="/privacy-policy" className="footer-link">Terms &amp; Privacy</Link></li>
            </ul>
          </div>

          {/* Popular Categories Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">POPULAR CATEGORIES</h4>
            <ul className="footer-links">
              <li><Link to="/?category=fiction" className="footer-link">Books</Link></li>
              <li><Link to="/?category=past-papers" className="footer-link">Academic Books</Link></li>
              <li><Link to="/?category=textbooks" className="footer-link">School Textbooks</Link></li>
              <li><Link to="/?category=writing-tools" className="footer-link footer-link--accent">Stationery &amp; Supplies</Link></li>
            </ul>
          </div>

          {/* Reach Us Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">REACH US</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <span className="footer-contact-icon">📞</span>
                <span>03222848222</span>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon">💬</span>
                <span>03222848222</span>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon">✉️</span>
                <a href="mailto:support@mherbookshop.com" className="footer-link">support@mherbookshop.com</a>
              </li>
            </ul>
            <p className="footer-hours">Monday – Friday (11:00 AM to 6:00 PM)</p>
            <div className="footer-socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <p className="footer-copyright">© 2026 MherBookShop. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
