import "./styles/index.css";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-top">

                {/* LEFT NEWSLETTER */}
                <div className="footer-left">
                    <div className="nav-left">
                        <img src="images/sv_logo.png" className="logo" alt="logo" />
                        <span className="brand">
                            <span className="sub">SUB</span>
                            <span className="ven">VEN</span>
                        </span>
                    </div>

                    <h3 className="footer-title">Join our newsletter</h3>

                    <div className="newsletter">
                        <input placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>

                    <p className="policy-text">
                        By subscribing you agree to our <a href="/privacy" ><span>Privacy Policy </span></a> and consent to receive
                        updates from our company.
                    </p>
                </div>


                {/* CENTER MENUS */}
                <div className="footer-columns">

                    <div>
                        <h4>Menu</h4>
                        <a href="/oracle-services">Oracle Services</a>
                        <a href="/services/tech-consulting">Tech Consulting</a>
                        <a href="/clients">clients</a>
                        <a href="#">Search Jobs</a>
                        <a href="#">Our Talent Pool</a>
                        {/* <a href="#">Employee Portal</a> */}
                    </div>

                    <div>
                        <h4>Company</h4>
                        <a href="/about">About</a>
                        <a href="#">Careers</a>
                        {/* <a href="#">DEI</a> */}
                        {/* <a href="#">Partnerships</a> */}
                        {/* <a href="#">News</a> */}
                        <a href="/contact">Contact</a>
                    </div>

                    <div>
                        <h4>Connect</h4>
                        <p><FaLinkedin /> LinkedIn</p>
                        <p><FaFacebook /> Facebook</p>
                        <p><FaTwitter /> Twitter</p>
                    </div>

                </div>
            </div>


            {/* EQUALITY LINE */}
            <p className="equal-text">
                We are an equal opportunity employer, and we believe in providing equal access
                to opportunities for every gender, ethnicity, LGBTI, religion and persons
                with disabilities.
            </p>

            <div className="separator"></div>

            {/* BOTTOM ROW */}
            <div className="footer-bottom">
                <span>© Subven Tech.</span>
                <a href="/privacy">Privacy Policy</a>
            </div>

        </footer>
    );
}
