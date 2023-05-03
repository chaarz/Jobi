import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import images from '../../utils/images';
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
                        <div className='logoBlack'>
                            {/* <img src={images.jobiLogoBlack} alt="Jobi logo" /> */}
                            <div className="greenCircle">
                                <div className="yellowCircle"></div>
                            </div>
                            <span>jobi</span>
                        </div>
                        <div className='footerList'>
                            <h3>Links</h3>
                            <ul>
                                <li>
                                    <Link to="/" className='highlight'>Pricing</Link>
                                </li>
                                <li>
                                    <HashLink to="/#about" className='highlight'>About Us</HashLink>
                                </li>
                                <li>
                                    <Link to="/" className='highlight'>Careers</Link>
                                </li>
                                <li>
                                    <HashLink to="/#blog" className='highlight'>Blog</HashLink>
                                </li>
                            </ul>
                        </div>
                        <div className='footerList'>
                            <h3>Products</h3>
                            <ul>
                                <li>
                                    <Link to="/" className='highlight'>Take the tour</Link>
                                </li>
                                <li>
                                    <Link to="/" className='highlight'>Live chat</Link>
                                </li>
                                <li>
                                    <Link to="/" className='highlight'>Self-service</Link>
                                </li>
                                <li>
                                    <Link to="/" className='highlight'>Mobile</Link>
                                </li>
                                <li>
                                    <HashLink to="/#collab" className='highlight'>Collaboration</HashLink>
                                </li>
                                <li>
                                    <HashLink to="/#reviews" className='highlight'>Reviews</HashLink>
                                </li>
                            </ul>
                        </div>
                        <div className='footerList'>
                            <h3>Legal</h3>
                            <ul>
                                <li>
                                    <Link to="/" className='highlight'>Terms of use</Link>
                                </li>
                                <li>
                                    <Link to="/" className='highlight'>Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link to="/" className='highlight'>Privacy</Link>
                                </li>
                                <li>
                                    <Link to="/" className='highlight'>Cookie policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='newsletter'>
                        <h3>Newsletter</h3>
                        <p>Join & receive important updates</p>
                        <form action='#'>
                            <label htmlFor="email" className='sr-only'>Enter your email</label>
                            <input className='highlight' type="email" id="email" name="email" placeholder="Enter your email" required />
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