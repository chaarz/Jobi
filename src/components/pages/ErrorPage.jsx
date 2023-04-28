import { Link} from 'react-router-dom';
import images from '../../utils/images';
import Header from '../sections/Header';

const ErrorPage = () => {
    return (
        <>
        <Header />
        <main>
            <section className='errorPage wrapper'>
                <div className='imgContainer'>
                    <img src={images.error404} alt="404 error with a landscape concept illustration" />
                    <a href="https://www.freepik.com/free-vector/404-error-with-landscape-concept-illustration_20602785.htm#page=3&query=404%20page%20drawing&position=44&from_view=search&track=ais">Image by storyset on Freepik</a>
                </div>
                <div className='flexTextContainer'>
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <div className='button'>
                        <Link to="/">Go Back</Link>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default ErrorPage;