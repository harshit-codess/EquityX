import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/media/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          <div className="footer-brand">
            <img src={logo} alt="EquityX Logo" className="footer-logo" />

            <p>
              &copy; 2026, EquityX. <br />
              All rights reserved.
            </p>

            <div className="footer-icons">
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>

            <div className="footer-icons footer-icons-bottom">
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>

          <div>
            <h3>Company</h3>

            <Link className="footdetail" to="/about">About</Link>
            <Link className="footdetail" to="/products">Products</Link>
            <Link className="footdetail" to="/">Careers</Link>
            <Link className="footdetail" to="/">Referral Program</Link>
            <Link className="footdetail" to="/pricing">Pricing</Link>
            <Link className="footdetail" to="/">EquityX Blog</Link>
            <Link className="footdetail" to="/">Press & Media</Link>
            <Link className="footdetail" to="/">Community</Link>
          </div>

          <div>
            <h3>Support</h3>

            <Link className="footdetail" to="/support">Contact Us</Link>
            <Link className="footdetail" to="/support">Support Portal</Link>
            <Link className="footdetail" to="/">EquityX Blog</Link>
            <Link className="footdetail" to="/">List of Charges</Link>
            <Link className="footdetail" to="/">Downloads & Resources</Link>
          </div>

          <div>
            <h3>Account</h3>

            <Link className="footdetail" to="/signup">Open an Account</Link>
            <Link className="footdetail" to="/">Fund Transfer</Link>
            <Link className="footdetail" to="/login">Dashboard Login</Link>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            EquityX is a modern stock trading platform designed for investors
            and traders. The information available on this website is provided
            for educational and informational purposes only and should not be
            considered financial or investment advice.
          </p>

          <p>
            Investments in securities are subject to market risks. Please read
            all related documents carefully before investing. Past performance
            is not indicative of future results.
          </p>

          <p>
            Please keep your account credentials secure and never share your
            password or OTP with anyone. EquityX will never ask for your
            confidential information through unsolicited calls, emails, or
            messages.
          </p>

          <p>
            If you receive suspicious communications claiming to represent
            EquityX, please contact our official support team immediately.
          </p>

          <p>
            EquityX does not provide guaranteed returns, stock tips, or
            portfolio management services. Investors are advised to perform
            their own research or consult a qualified financial advisor before
            making investment decisions.
          </p>

          <p>© 2026 EquityX. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;