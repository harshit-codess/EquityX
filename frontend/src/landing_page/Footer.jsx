import React from "react";
import logo from "../assets/media/logo.svg";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#fafafa" }}>
      <div className="container mt-5 border-top">
        <div className="row mt-5">
          <div className="col">
            <img src={logo} alt="EquityX Logo" style={{ width: "50%" }} />

            <p className="mt-3">
              &copy; 2026, EquityX. <br />
              All rights reserved.
            </p>

            <p>
              <i className="fa-brands fa-x-twitter fs-4 pe-5 text-muted"></i>
              <i className="fa-brands fa-square-facebook fs-4 pe-5 text-muted"></i>
              <i className="fa-brands fa-instagram fs-4 pe-5 text-muted"></i>
              <i className="fa-brands fa-linkedin-in fs-4 pe-5 text-muted"></i>
            </p>

            <p className="border-top pt-3">
              <i className="fa-brands fa-youtube fs-4 pe-5 text-muted"></i>
              <i className="fa-brands fa-whatsapp fs-4 pe-5 text-muted"></i>
              <i className="fa-brands fa-telegram fs-4 pe-5 text-muted"></i>
            </p>
          </div>

          <div className="col">
            <p>Company</p>

            <a href="" className="footdetail">
              About
            </a>
            <br />

            <a href="" className="footdetail">
              Products
            </a>
            <br />

            <a href="" className="footdetail">
              Careers
            </a>
            <br />

            <a href="" className="footdetail">
              Referral Program
            </a>
            <br />

            <a href="" className="footdetail">
              Pricing
            </a>
            <br />

            <a href="" className="footdetail">
              EquityX Blog
            </a>
            <br />

            <a href="" className="footdetail">
              Press & Media
            </a>
            <br />

            <a href="" className="footdetail">
              Community
            </a>
          </div>

          <div className="col">
            <p>Support</p>

            <a href="" className="footdetail">
              Contact Us
            </a>
            <br />

            <a href="" className="footdetail">
              Support Portal
            </a>
            <br />

            <a href="" className="footdetail">
              EquityX Blog
            </a>
            <br />

            <a href="" className="footdetail">
              List of Charges
            </a>
            <br />

            <a href="" className="footdetail">
              Downloads & Resources
            </a>
          </div>

          <div className="col">
            <p>Account</p>

            <a href="" className="footdetail">
              Open an Account
            </a>
            <br />

            <a href="" className="footdetail">
              Fund Transfer
            </a>
            <br />

            <a href="" className="footdetail">
              Dashboard Login
            </a>
            <br />
          </div>
        </div>

        <div className="pt-5 text-muted" style={{ fontSize: "12px" }}>
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

          <p>
            © 2026 EquityX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;