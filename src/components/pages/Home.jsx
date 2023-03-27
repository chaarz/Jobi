import Images from '../Images';

const Home = () => {
    return (
        <main>
            <section className='partners'>
                <ul className='wrapper'>
                    <li>
                        <img src={Images.google} alt="Google logo" />
                    </li>
                    <li>
                        <img src={Images.shipbob} alt="ShipBob logo" />
                    </li>
                    <li>
                        <img src={Images.dribbble} alt="Dribbble logo" />
                    </li>
                    <li>
                        <img src={Images.slack} alt="Slack logo" />
                    </li>
                    <li>
                        <img src={Images.vine} alt="Vine logo" />
                    </li>
                    <li>
                        <img src={Images.airbnb} alt="Airbnb logo" />
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
                            <img src={Images.uiuxdesign} alt="pencil icon" aria-hidden='true'/>
                            <p>UI/UX Design</p>
                        </div>
                    </li>
                    <li>
                    <div className='category category2'>
                            <img src={Images.development} alt="html tag icon" aria-hidden='true'/>
                            <p>Development</p>
                        </div>
                    </li>
                    <li>
                    <div className='category category3'>
                            <img src={Images.marketing} alt="bag icon" aria-hidden='true'/>
                            <p>Marketing</p>
                        </div>
                    </li>
                    <li>
                    <div className='category category4'>
                            <img src={Images.telemarketing} alt="phone icon" aria-hidden='true'/>
                            <p>Telemarketing</p>
                        </div>
                    </li>
                    <li>
                    <div className='category category5'>
                            <img src={Images.accounting} alt="accounting icon" aria-hidden='true'/>
                            <p>Accounting</p>
                        </div>
                    </li>
                    <li>
                    <div className='category category6'>
                            <img src={Images.editing} alt="editing icon" aria-hidden='true'/>
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
                            <img src={Images.backArrow} alt="back arrow" />
                        </button>
                        <button>
                            <img src={Images.nextArrow} alt="next arrow" />
                        </button>
                    </div>
                </div>
                <ul>
                    <li>
                        <img src={Images.wordpressDevelopment} alt="open laptop on wooden table" />
                        <p>Wordpress Development</p>
                    </li>
                    <li>
                        <img src={Images.audioEditing} alt="man writing with headsets on" />
                        <p>Audio & Video Editing</p>
                    </li>
                    <li>
                        <img src={Images.productDevelopment} alt="person drawing sketch on tablet with pencil" />
                        <p>Product & Branding Design</p>
                    </li>
                    <li>
                        <img src={Images.customerSupport} alt="open laptop on wooden table" />
                        <p>Admin & Customer Support</p>
                    </li>
                </ul>
            </section>
            <section className >

            </section>
        </main>
    )
}

export default Home;