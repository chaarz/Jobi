import { NavLink} from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section>
            <p>404</p>
            <p>Page Not Found</p>
            <div>
                <NavLink to="/">Go Back</NavLink>
            </div>
        </section>
    )
}

export default ErrorPage;