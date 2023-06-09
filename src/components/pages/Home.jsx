import { Link, Outlet } from 'react-router-dom';
import images from '../../utils/images';
import Header from '../sections/Header';
import About from '../sections/About';
import ScrollToTop from '../../utils/ScrollToTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section className='partners'>
                    <div className='wrapper marquee-container'>
                        <ul>
                            <li>
                                <img src={images.google} alt="Google logo" />
                            </li>
                            <li>
                                <img src={images.shipbob} alt="ShipBob logo" />
                            </li>
                            <li>
                                <img src={images.dribbble} alt="Dribbble logo" />
                            </li>
                            <li>
                                <img src={images.slack} alt="Slack logo" />
                            </li>
                            <li>
                                <img src={images.vine} alt="Vine logo" />
                            </li>
                            <li>
                                <img src={images.airbnb} alt="Airbnb logo" />
                            </li>
                        </ul>
                        <ul aria-hidden="true">
                            <li>
                                <img src={images.google} alt="Google logo" />
                            </li>
                            <li>
                                <img src={images.shipbob} alt="ShipBob logo" />
                            </li>
                            <li>
                                <img src={images.dribbble} alt="Dribbble logo" />
                            </li>
                            <li>
                                <img src={images.slack} alt="Slack logo" />
                            </li>
                            <li>
                                <img src={images.vine} alt="Vine logo" />
                            </li>
                            <li>
                                <img src={images.airbnb} alt="Airbnb logo" />
                            </li>
                        </ul>
                    </div>
                </section>
                <section className='categories wrapper'>
                    <div className='sectionHeading'>
                        <h2>Most in demand categories</h2>
                        <Link to="/jobList" className='highlight end'>
                            Explore all categories {'>'}
                        </Link>
                    </div>
                    <ul>
                        <li className='category category1'>
                            <img src={images.uiuxdesign} alt="pencil icon" aria-hidden='true' />
                            <p>UI/UX Design</p>
                        </li>
                        <li className='category category2'>
                            <img src={images.development} alt="html tag icon" aria-hidden='true' />
                            <p>Development</p>
                        </li>
                        <li className='category category3'>
                            <img src={images.marketing} alt="bag icon" aria-hidden='true' />
                            <p>Marketing</p>
                        </li>
                        <li className='category category4'>
                            <img src={images.telemarketing} alt="phone icon" aria-hidden='true' />
                            <p>Telemarketing</p>
                        </li>
                        <li className='category category5'>
                            <img src={images.accounting} alt="accounting icon" aria-hidden='true' />
                            <p>Accounting</p>
                        </li>
                        <li className='category category6'>
                            <img src={images.editing} alt="editing icon" aria-hidden='true' />
                            <p>Editing</p>
                        </li>
                    </ul>
                </section>
                <section className='trending wrapper'>
                    <div className='sectionHeading'>
                        <h2>Trending Jobs</h2>
                        <div className='end'>
                            <button className='prevNextBtn'>
                                <span className="sr-only">Previous</span>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <button className='prevNextBtn'>
                                <span className="sr-only">Next</span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <img src={images.wordpressDevelopment} alt="open laptop on wooden table" />
                            <p>WordPress Development</p>
                        </li>
                        <li>
                            <img src={images.audioEditing} alt="man writing with headsets on" />
                            <p>Audio & Video Editing</p>
                        </li>
                        <li>
                            <img src={images.productDevelopment} alt="person drawing sketch on tablet with pencil" />
                            <p>Product & Branding Design</p>
                        </li>
                        <li>
                            <img src={images.customerSupport} alt="open laptop on wooden table" />
                            <p>Admin & Customer Support</p>
                        </li>
                    </ul>
                </section>
                <section className='howItWorks'>
                    <div className='wrapper flex'>
                        <div className='howItWorksHeading'>
                            <img src={images.videoPayBtn} alt="video play button" aria-hidden='true' />
                            <h2>Let's get started <br/>It's <span>simple.</span>
                            </h2>
                            <p>Get access to our top talents as well as a complete set of hybrid workforce management tools.</p>
                        </div>
                        <div className='cards'>
                            <ul>
                                <li>
                                    <img src={images.account} alt="account image" aria-hidden='true'/>
                                    <div className='cardText'>
                                        <p>It takes 2 minutes to open an account.</p>
                                        <Link to='/'>OPEN ACCOUNT</Link>
                                    </div>
                                </li>
                                <li>
                                    <img src={images.profile} alt="profile image" aria-hidden='true'/>
                                    <div className='cardText'>
                                        <p>Find talents or search for your dream job.</p>
                                        <Link to='/jobList'>APPLY OR HIRE</Link>
                                    </div>
                                </li>
                                <li>
                                    <img src={images.apply} alt="apply image" aria-hidden='true'/>
                                    <div className='cardText'>
                                        <p>Get your work done quickly with Jobi.</p>
                                        <Link to='/'>PAYMENT METHOD</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <About />
                <section className='testimonials' id='reviews'>
                    <div className='wrapper'>
                        <div className='sectionHeading'>
                            <h2>What our clients say about us</h2>
                            <div className='end'>
                                <button className='prevNextBtn'>
                                    <span className="sr-only">Previous</span>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </button>
                                <button className='prevNextBtn'>
                                    <span className="sr-only">Next</span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
                        </div>
                        <div className='testimonialCards'>
                            <ul>
                                <li>
                                    <div className='cardHeading'>
                                        <p>Impressive!</p>
                                        <p>⭐⭐⭐⭐⭐</p>
                                    </div>
                                    <div className='review'>
                                        <p>Amazing theme, I'm using it for our internal process and procedures, and it's working very well.</p>
                                        <div className='client'>
                                            <p>Rashed Ka, Dhaka</p>
                                            <img src={images.greyCircle} alt="clientImg" />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='cardHeading'>
                                        <p>Great work!!</p>
                                        <p>⭐⭐⭐⭐⭐</p>
                                    </div>
                                    <div className='review'>
                                        <p>One of the best places to find experts. Highly recommend!</p>
                                        <div className='client'>
                                            <p>Zubayer Al Hasan, USA</p>
                                            <img src={images.greyCircle} alt="clientImg" />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className='jobiGuides wrapper' id='blog'>
                    <div className='sectionHeading'>
                        <h2>Jobi Guides</h2>
                        <Link to="/" className='highlight end'>
                            Explore more {'>'}
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <div className='imgContainer'>
                                <img src={images.jobiGuides1} alt="people with laptop" />
                            </div>
                            <div className='card'>
                                <p className='date'>July 23, 2022</p>
                                <h3>Challenge yourself and win the future</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, esse?</p>
                                <Link to='/' className='highlight'>
                                    <span className="sr-only">Read more here</span>
                                    <FontAwesomeIcon icon={faArrowRightLong} className='icon' />
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className='imgContainer'>
                                <img src={images.jobiGuides4} alt="People with laptop" />
                            </div>
                            <div className='card'>
                                <p className='date'>July 23, 2022</p>
                                <h3>Challenge yourself and win the future</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, esse?</p>
                                <Link to='/' className='highlight'>
                                    <span className="sr-only">Read more here</span>
                                    <FontAwesomeIcon icon={faArrowRightLong} className='icon' />
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className='imgContainer'>
                                <img src={images.jobiGuides3} alt="People with laptop" />
                            </div>
                            <div className='card'>
                                <p className='date'>July 23, 2022</p>
                                <h3>Challenge yourself and win the future</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, esse?</p>
                                <Link to='/' className='highlight'>
                                    <span className="sr-only">Read more here</span>
                                    <FontAwesomeIcon icon={faArrowRightLong} className='icon' />
                                </Link>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className='collab about wrapper' id='collab'>
                    <div className='aboutImgContainer'>
                        <img src={images.collabImg} alt="" />
                    </div>
                    <div className='aboutTextContainer'>
                        <div>
                            <p className='topBrands'>TOP BRANDS</p>
                            <h2>Collaboration with Top Brands</h2>
                        </div>
                        <p>We collaborate with a number of top tier companies on imagining the future of work. Have a look!</p>
                        <Link to='/' className='highlight learnMore'>
                            <span>Learn more</span>
                            <FontAwesomeIcon icon={faArrowRightLong} className="icon" />
                        </Link>
                    </div>
                </section>
            </main>
            <ScrollToTop />
        </>
    )
}

export default Home;