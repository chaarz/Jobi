import Images from "../Images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className='upperFooter'>
                <div className='wrapper'>
                    <div className='flexContainer'>
                        <div className='headingContainer'>
                            <h2>Complete Job Portal for Everyone</h2>
                        </div>
                        <div className='flexTextContainer'>
                            <p>Find your dream job or your next talent.</p>
                            <div className='flexBtnContainer'>
                                <button className='lookingBtn'>Looking for a job?</button>
                                <button>Post a job</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mainFooter wrapper'>
                <div className='footerFlexContainer'>
                    <div>
                        <img src={Images.jobiLogoBlack} alt="Jobi logo" />
                    </div>
                    <div>
                        <h3>Links</h3>
                        <ul>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Products</h3>
                        <ul>
                            <li>
                                <a href="#">Take the tour</a>
                            </li>
                            <li>
                                <a href="#">Live chat</a>
                            </li>
                            <li>
                                <a href="#">Self-service</a>
                            </li>
                            <li>
                                <a href="#">Mobile</a>
                            </li>
                            <li>
                                <a href="#">Collaboration</a>
                            </li>
                            <li>
                                <a href="#">Reviews</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Legal</h3>
                        <ul>
                            <li>
                                <a href="#">Terms of use</a>
                            </li>
                            <li>
                                <a href="#">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#">Privacy</a>
                            </li>
                            <li>
                                <a href="#">Cookie policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className='newsletter'>
                        <h3>Newsletter</h3>
                        <p>Join & receive important updates</p>
                        <form action='#'>
                            <label htmlFor="email" className='sr-only'>Enter your email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                            <button type='submit'>Send</button>
                        </form>
                        <p className='note'>We only send emails with relevant content</p>
                    </div>
                </div>
                <div className="bottomFooter">
                    <div className='flexContainer'>
                        <a href="#" className='highlight'>Privacy & Terms</a>
                        <a href="#" className='highlight'>Contact Us</a>
                    </div>
                    <p>Copyright @2023 jobi inc.</p>
                    <div className='socialIcons'>
                        <a href="#">
                            <FontAwesomeIcon icon={faFacebookF} className='icon highlight' />
                            <span className="sr-only">Link to Facebook</span>
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} className='icon highlight' />
                            <span className="sr-only">Link to Instagram</span>
                        </a>
                        <a href="">
                            <FontAwesomeIcon icon={faPinterestP} className='icon highlight' />
                            <span className="sr-only">Link to Pinterest</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;