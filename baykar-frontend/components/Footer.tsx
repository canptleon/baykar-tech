import React from 'react'
import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { GrLanguage } from "react-icons/gr";

function Footer() {

  return (
    <footer>
        <div className="footer-body mx-auto">
          <div className="row w-100 mx-auto">
            <div className="footer-main-links col-lg-3 col-md-6 col-sm-12 px-0">
              <ul>
                <li><h6>Product</h6></li>
                <li><Link href={"#"}>Pricing</Link></li>
                <li><Link href={"#"}>Overview</Link></li>
                <li><Link href={"#"}>Browse</Link></li>
                <li><Link href={"#"}>Accessibility</Link></li>
                <li><Link href={"#"}>Five</Link></li>
              </ul>
            </div>
            <div className="footer-main-links col-lg-3 col-md-6 col-sm-12 px-0">
              <ul>
                <li><h6>Solutions</h6></li>
                <li><Link href={"#"}>Brainstorming</Link></li>
                <li><Link href={"#"}>Ideation</Link></li>
                <li><Link href={"#"}>Wireframing</Link></li>
                <li><Link href={"#"}>Research</Link></li>
                <li><Link href={"#"}>Design</Link></li>
              </ul>
            </div>
            <div className="footer-main-links col-lg-3 col-md-6 col-sm-12 px-0">
              <ul>
                <li><h6>Support</h6></li>
                <li><Link href={"#"}>Contact Us</Link></li>
                <li><Link href={"#"}>Developers</Link></li>
                <li><Link href={"#"}>Documentation</Link></li>
                <li><Link href={"#"}>Integrations</Link></li>
                <li><Link href={"#"}>Reports</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 px-0">
              <ul className="footer-app-links">
                <li><h6>Get the App</h6></li>
                <li><Link href={"#"} className="appstore"><img src="/images/appstore.png" alt="Appstore" /> </Link></li>
                <li><Link href={"#"} className="googleplay"><img src="/images/google-play.png" alt="Google Play Store" /></Link></li>
              </ul>
              <div className="follow-us">
                <h6>Follow Us</h6>
                <div className="d-flex flex-row align-items-center">
                  <Link href={"#"}><FaYoutube /></Link>
                  <Link href={"#"}><FaFacebook /></Link>
                  <Link href={"#"}><FaTwitter /></Link>
                  <Link href={"#"}><FaInstagram /></Link>
                  <Link href={"#"}><FaLinkedin /></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="d-flex align-items-center justify-content-between">
              <p>Collers @ 2023. All rights reserved. Arda Keyişoğlu</p>
              <ul>
                <li><Link href={"#"}>Terms</Link></li>
                <li><Link href={"#"}>Privacy</Link></li>
                <li><Link href={"#"}>Contact</Link></li>
                <li><button><GrLanguage /> EN</button></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer;