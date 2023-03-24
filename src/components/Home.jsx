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
            <p>This is the Home page!</p>
        </main>
    )
}

export default Home;