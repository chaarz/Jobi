import { NavLink } from 'react-router-dom';
import images from './images';

const NavBar = () => {
    return (
        <div class='navBar'>
            <div className='logo'>
                <img src={images.jobiLogo} alt="Jobi logo" />
            </div>
            <nav className='desktopNav'>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/JobList">Jobs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Explore</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Category</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Pages</NavLink>
                    </li>
                </ul>
                <div>
                    <button>Login/Sign up</button>
                    <button>Post a Job</button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;