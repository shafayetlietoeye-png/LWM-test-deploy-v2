import { Link } from 'react-router-dom';

export default function MainFooter() {
    return (
        <footer className="main-footer">
            <div className="block footer-grid">
                {/* Quick Links */}
                <div className="footer-col">
                    <h3 className="footer-head">Quick Links</h3>
                    <ul className="footer-links-grid">
                        <li><img src="/assets/icon/double arrow.png" className="f-arrow" alt="" /> <Link to="/">Home</Link></li>
                        <li><img src="/assets/icon/double arrow.png" className="f-arrow" alt="" /> <a href="#">Tickets</a></li>
                        <li><img src="/assets/icon/double arrow.png" className="f-arrow" alt="" /> <a href="#">About</a></li>
                        <li><img src="/assets/icon/double arrow.png" className="f-arrow" alt="" /> <Link to="/donate">Donate</Link></li>
                        <li><img src="/assets/icon/double arrow.png" className="f-arrow" alt="" /> <Link to="/virtual-tour">Virtual Tour</Link></li>
                        <li><img src="/assets/icon/double arrow.png" className="f-arrow" alt="" /> <a href="#">Events</a></li>
                        <li><img src="/assets/icon/double arrow.png" className="f-arrow" alt="" /> <Link to="/on-this-day">On This Day</Link></li>
                        <li><img src="/assets/icon/double arrow.png" className="f-arrow" alt="" /> <a href="#">Gallery</a></li>
                        <li><img src="/assets/icon/double arrow.png" className="f-arrow" alt="" /> <a href="#">Trustees</a></li>
                        <li><img src="/assets/icon/double arrow.png" className="f-arrow" alt="" /> <a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Latest News */}
                <div className="footer-col">
                    <h3 className="footer-head">Latest News</h3>
                    <ul className="news-list">
                        <li>
                            <img src="/assets/icon/double arrow.png" className="f-arrow" alt="" />
                            <a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                        </li>
                        <li>
                            <img src="/assets/icon/double arrow.png" className="f-arrow" alt="" />
                            <a href="#">Sed do eiusmod tempor incididunt ut labore et dolore magna</a>
                        </li>
                        <li>
                            <img src="/assets/icon/double arrow.png" className="f-arrow" alt="" />
                            <a href="#">Ut enim ad minim veniam, quis nostrud exercitation ullamco</a>
                        </li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className="footer-col">
                    <h3 className="footer-head">Contact Us</h3>
                    <ul className="contact-list">
                        <li>
                            <img src="/assets/icon/location-pin-svgrepo-com 1.png" className="f-icon" alt="loc" />
                            <span>Lorem ipsum dolor sit amet, consectetur <br /> Adipiscing elit, sed do eiusmod tempor</span>
                        </li>
                        <li>
                            <img src="/assets/icon/phone-svgrepo-com 1.png" className="f-icon" alt="phone" />
                            <span>+880 1234-567890 <br /> +880 9876-543210</span>
                        </li>
                        <li>
                            <img src="/assets/icon/email-svgrepo-com 1.png" className="f-icon" alt="email" />
                            <span>info@loremipsummuseum.org <br /> contact@loremipsum.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="block footer-bottom">
                <div className="copyright">© 2024 Liberation War Museum, All rights reserved</div>
                <div className="f-socials">
                    <a href="#"><img src="/assets/icon/logo-facebook.png" alt="FB" /></a>
                    <a href="#"><img src="/assets/icon/logo-linkedin.png" alt="LI" /></a>
                    <a href="#"><img src="/assets/icon/logo-twitter.png" alt="TW" /></a>
                    <a href="#"><img src="/assets/icon/logo-instagram.png" alt="IG" /></a>
                </div>
                <div className="powered">Powered by: Playmaker Ltd.</div>
            </div>
        </footer>
    );
}
