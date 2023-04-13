import { Link } from 'react-router-dom';
import images from '../images';
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
                            <p>Sign up to find your dream job or discover your next talent.</p>
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
                    <div className='footerMenu'>
                        <div className='logo'>
                            <img src={images.jobiLogoBlack} alt="Jobi logo" />
                        </div>
                        <div className='footerList'>
                            <h3>Links</h3>
                            <ul>
                                <li>
                                    <Link to="/">Pricing</Link>
                                </li>
                                <li>
                                    <Link to="/">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/">Careers</Link>
                                </li>
                                <li>
                                    <Link to="/">Blog</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='footerList'>
                            <h3>Products</h3>
                            <ul>
                                <li>
                                    <Link to="/">Take the tour</Link>
                                </li>
                                <li>
                                    <Link to="/">Live chat</Link>
                                </li>
                                <li>
                                    <Link to="/">Self-service</Link>
                                </li>
                                <li>
                                    <Link to="/">Mobile</Link>
                                </li>
                                <li>
                                    <Link to="/">Collaboration</Link>
                                </li>
                                <li>
                                    <Link to="/">Reviews</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='footerList'>
                            <h3>Legal</h3>
                            <ul>
                                <li>
                                    <Link to="/">Terms of use</Link>
                                </li>
                                <li>
                                    <Link to="/">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link to="/">Privacy</Link>
                                </li>
                                <li>
                                    <Link to="/">Cookie policy</Link>
                                </li>
                            </ul>
                        </div>
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
                        <Link to="/" className='highlight'>Privacy & Terms</Link>
                        <Link to="/" className='highlight'>Contact Us</Link>
                    </div>
                    <p>Copyright @2023 jobi inc.</p>
                    <div className='socialIcons'>
                        <Link to='/'>
                            <FontAwesomeIcon icon={faFacebookF} className='icon highlight' />
                            <span className="sr-only">Link to Facebook</span>
                        </Link>
                        <Link to='/'>
                            <FontAwesomeIcon icon={faInstagram} className='icon highlight' />
                            <span className="sr-only">Link to Instagram</span>
                        </Link>
                        <Link to='/'>
                            <FontAwesomeIcon icon={faPinterestP} className='icon highlight' />
                            <span className="sr-only">Link to Pinterest</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;