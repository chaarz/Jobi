import images from './Images';

const Home = () => {
    return (
        <main>
            <section className='partners'>
                <ul class='wrapper'>
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
                <div class='categoryHeading'>
                    <h2>Most in demand categories</h2>
                    <a href="#">Explore all categories
                       {'>'}
                    </a>
                </div>
                <ul>
                    <li>
                        <div className='category category1'>
                            <img src={images.uiuxdesign} alt="pencil icon" aria-hidden='true'/>
                            <p>UI/UX Design</p>
                        </div>
                    </li>
                    <li>
                    <div className='category category2'>
                            <img src={images.development} alt="html tag icon" aria-hidden='true'/>
                            <p>Development</p>
                        </div>
                    </li>
                    <li>
                    <div className='category category3'>
                            <img src={images.marketing} alt="bag icon" aria-hidden='true'/>
                            <p>Marketing</p>
                        </div>
                    </li>
                    <li>
                    <div className='category category4'>
                            <img src={images.telemarketing} alt="phone icon" aria-hidden='true'/>
                            <p>Telemarketing</p>
                        </div>
                    </li>
                    <li>
                    <div className='category category5'>
                            <img src={images.accounting} alt="accounting icon" aria-hidden='true'/>
                            <p>Accounting</p>
                        </div>
                    </li>
                    <li>
                    <div className='category category6'>
                            <img src={images.editing} alt="editing icon" aria-hidden='true'/>
                            <p>Editing</p>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default Home;