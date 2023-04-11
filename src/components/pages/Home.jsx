import { Link } from 'react-router-dom';
import images from '../images';
import Header from '../sections/Header';
import AboutAccordion from '../../utils/AboutAccordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const accordionData = [
        {
            title: 'Seamless Search',
            content: `It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.`
        },
        {
            title: 'Hire top talents',
            content: `It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.`
        },
        {
            title: 'Protected Payments, every time',
            content: `It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.`
        }
    ];

    return (
        <>
            <Header />
            <main>
                <section className='partners'>
                    <ul className='wrapper'>
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
                </section>
                <section className='categories wrapper'>
                    <div className='sectionHeading'>
                        <h2>Most in demand categories</h2>
                        <Link to="/" className='highlight'>
                            Explore all categories {'>'}
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <div className='category category1'>
                                <img src={images.uiuxdesign} alt="pencil icon" aria-hidden='true' />
                                <p>UI/UX Design</p>
                            </div>
                        </li>
                        <li>
                            <div className='category category2'>
                                <img src={images.development} alt="html tag icon" aria-hidden='true' />
                                <p>Development</p>
                            </div>
                        </li>
                        <li>
                            <div className='category category3'>
                                <img src={images.marketing} alt="bag icon" aria-hidden='true' />
                                <p>Marketing</p>
                            </div>
                        </li>
                        <li>
                            <div className='category category4'>
                                <img src={images.telemarketing} alt="phone icon" aria-hidden='true' />
                                <p>Telemarketing</p>
                            </div>
                        </li>
                        <li>
                            <div className='category category5'>
                                <img src={images.accounting} alt="accounting icon" aria-hidden='true' />
                                <p>Accounting</p>
                            </div>
                        </li>
                        <li>
                            <div className='category category6'>
                                <img src={images.editing} alt="editing icon" aria-hidden='true' />
                                <p>Editing</p>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className='trending wrapper'>
                    <div className='sectionHeading'>
                        <h2>Trending Jobs</h2>
                        <div>
                            <button className='prevNextBtn'>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <button className='prevNextBtn'>
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
                            <img src={images.videoPayBtn} alt="video play button" />
                            <h2>Let's get started
                                It's <span>simple.</span>
                            </h2>
                            <p>Get access to our top talents as well as a complete set of hybrid workforce management tools.</p>
                        </div>
                        <div className='cards'>
                            <ul>
                                <li>
                                    <div className='cardHeading'>
                                        <img src={images.account} alt="" />
                                        <p>It takes 2 minutes to open an account.</p>
                                    </div>
                                    <Link to='/'>OPEN ACCOUNT</Link>
                                </li>
                                <li>
                                    <div className='cardHeading'>
                                        <img src={images.profile} alt="" />
                                        <p>Find talents or search for your dream job.</p>
                                    </div>
                                    <Link to='/'>APPLY OR HIRE</Link>
                                </li>
                                <li>
                                    <div className='cardHeading'>
                                        <img src={images.apply} alt="" />
                                        <p>Get your work done quickly with Jobi.</p>
                                    </div>
                                    <Link to='/'>PAYMENT METHOD</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className='about wrapper'>
                    <div className='aboutFlexContainer'>
                        <div className='aboutTextContainer'>
                            <div>
                                <p>Why choose us ?</p>
                                <h2>World of talent at your fingertips</h2>
                            </div>
                            <ul>
                                {
                                    accordionData.map(({ title, content }) => (
                                        < AboutAccordion title={title} content={content} key={title} />
                                    ))
                                }
                            </ul>
                            <Link to='/' className='button'>Learn more</Link>
                        </div>
                        <div className='aboutImgContainer'>
                            <img src={images.about} alt="" />
                        </div>
                    </div>
                </section>
                <section className='testimonials'>
                    <div className='wrapper'>
                        <div className='testimonialsHeading'>
                            <h2>What our clients say about us</h2>
                            <div>
                                <button className='prevNextBtn'>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </button>
                                <button className='prevNextBtn'>
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
                <section className='jobiGuides wrapper'>
                    <div className='sectionHeading'>
                        <h2>Jobi Guides</h2>
                        <Link to="/" className='highlight'>
                            Explore more {'>'}
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <div className='imgContainer'>
                                <img src="" alt="" />
                            </div>
                            <div className='card'>
                                <p className='date'>July 23, 2022</p>
                                <h3>Challenge yourself and win the future</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, esse?</p>
                                <Link to='/' className='highlight'>
                                    <FontAwesomeIcon icon={faArrowRightLong} className='icon' />
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className='imgContainer'>
                                <img src="" alt="" />
                            </div>
                            <div className='card'>
                                <p className='date'>July 23, 2022</p>
                                <h3>Challenge yourself and win the future</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, esse?</p>
                                <Link to='/' className='highlight'>
                                    <FontAwesomeIcon icon={faArrowRightLong} className='icon' />
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className='imgContainer'>
                                <img src="" alt="" />
                            </div>
                            <div className='card'>
                                <p className='date'>July 23, 2022</p>
                                <h3>Challenge yourself and win the future</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, esse?</p>
                                <Link to='/' className='highlight'>
                                    <FontAwesomeIcon icon={faArrowRightLong} className='icon' />
                                </Link>
                            </div>
                        </li>
                    </ul>
                </section>
            </main>
        </>
    )
}

export default Home;