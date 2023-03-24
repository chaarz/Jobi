import { NavLink } from 'react-router-dom';
import images from './Images';

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
                <div className="navButtons">
                    <button className='loginBtn'>Login/Sign up</button>
                    <button>Post a job</button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;