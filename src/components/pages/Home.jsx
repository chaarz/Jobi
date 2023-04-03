import images from '../images';
import Header from '../sections/Header';
import AboutAccordion from '../../utils/AboutAccordion';

const Home = () => {
    const accordionData = [
        {
          title: 'Seamless Search',
          content: `It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand`
        },
        {
          title: 'Hire top talents',
          content: `It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand`
        },
        {
          title: 'Protected Payments, every time',
          content: `It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand`
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
                    <div className='categoryHeading'>
                        <h2>Most in demand categories</h2>
                        <a href="#" className='highlight'>Explore all categories
                            {'>'}
                        </a>
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
                    <div className='trendingHeading'>
                        <h2>Trending Jobs</h2>
                        <div>
                            <button>
                                <img src={images.backArrow} alt="back arrow" />
                            </button>
                            <button>
                                <img src={images.nextArrow} alt="next arrow" />
                            </button>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <img src={images.wordpressDevelopment} alt="open laptop on wooden table" />
                            <p>Wordpress Development</p>
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
                        <div className='heading'>
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
                                    <a href="#">OPEN ACCOUNT</a>
                                </li>
                                <li>
                                    <div className='cardHeading'>
                                        <img src={images.profile} alt="" />
                                        <p>Find talents or search for your dream job.</p>
                                    </div>
                                    <a href="#">APPLY OR HIRE</a>
                                </li>
                                <li>
                                    <div className='cardHeading'>
                                        <img src={images.apply} alt="" />
                                        <p>Get your work done quickly with Jobi.</p>
                                    </div>
                                    <a href="#">PAYMENT METHOD</a>
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
                                <h2>World of talents at your fingertips</h2>
                            </div>
                            <ul>
                                {
                                    accordionData.map(({title, content}) => (
                                        < AboutAccordion title={title} content={content} />
                                    ))
                                }
                            </ul>
                            <a href="#" className='button'>Learn more</a>
                        </div>
                        <div>
                            <img src={images.about} alt="" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;