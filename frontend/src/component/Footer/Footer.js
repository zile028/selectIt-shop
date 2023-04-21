import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImGooglePlus3 } from "react-icons/im";
import { Link } from "react-router-dom";

import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="container">
        {/* TOP SECTION OF FOOTER */}
        <div className="footer-header">
          FURN<span className="span-home">HOME</span>
        </div>

        {/* SOCIAL NETWORKS */}
        <div className="footer-social">
          <div className="icon-container social-icon facebook">
            {" "}
            <Link className="icon" to="https://www.facebook.com">
              <FaFacebook />
            </Link>
          </div>
          <div className="icon-container social-icon twitter">
            {" "}
            <Link className="icon" to="https://www.twitter.com">
              <FaTwitter />
            </Link>
          </div>
          <div className="icon-container social-icon linkedIn">
            {" "}
            <Link className="icon" to="mailto:example@gmail.com">
              <ImGooglePlus3 />
            </Link>
          </div>
          <div className="icon-container social-icon gmail">
            <Link className="icon" to="https://www.linkedin.com">
              <FaLinkedin />
            </Link>
          </div>
        </div>

        {/* ==================== BOTTOM SECTION  */}

        {/* ASIDE 1 */}
        <div className="aside-wrapper">
          <aside className="aside about-aside">
            <h3 className="about-section-heading">ABOUT THE STORE</h3>
            <p>
              Songs that made the hit parade. Guys like us Those were the days.
              Wouldn't you it made. Those were the days. Wouldn't you like to
              get.
            </p>
            <p>
              <BsTelephone className="icon-bottom" />
              Call Us 08 523 456 78
            </p>
            <p>
              <AiOutlineMail className="icon-bottom" /> Info@ourdomain.Com
            </p>
            <p>
              <IoLocationOutline className="icon-bottom" />
              59 Downtown St, Melbourne, Australia.
            </p>
          </aside>

          {/* ASIDE 2 */}
          <aside className="aside usefull-links-aside">
            <h3>USEFUL LINKS</h3>
            <ul>
              <li>About Us</li>
              <li>Our Products</li>
              <li>Customer Support</li>
              <li>Our Sitemap</li>
              <li>Contact Us</li>
            </ul>
          </aside>

          {/* ASIDE 3 */}
          <aside className="aside contact-us-aside">
            <h3>CONTACT US</h3>
            <ul>
              <li>Product Recall</li>
              <li>Gift Vouchers</li>
              <li>Returns & Exchange</li>
              <li>Shipping Options</li>
              <li>Help & FAQs</li>
            </ul>
          </aside>

          {/* ASIDE 4 */}
          <aside className="aside contact-us-aside2">
            <h3>CONTACT US</h3>
            <ul>
              <li>
                <Link to={"/"}></Link>
              </li>
              <li>
                <Link to={"/"}></Link>
              </li>
              <li>
                <Link to={"/"}></Link>
              </li>
              <li>
                <Link to={"/"}></Link>
              </li>
              <li>
                <Link to={"/"}></Link>
              </li>
            </ul>
          </aside>
        </div>

        <div className="footer-bottom">
          <div className="footer-content">
            <div className="footer-copyright">© 2016 ALL RIGHTS RESERVED</div>
            <div className="footer-nav">
              <ul>
                <li>HOME</li>
                <li>SERVICES</li>
                <li>TERMS & CONDITION</li>
                <li>PRIVACY POLICY</li>
                <li>CONTACT US</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
