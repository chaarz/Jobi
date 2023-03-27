import { NavLink } from 'react-router-dom';
import images from '../Images';

const NavBar = () => {
    return (
        <div className='navBar'>
            <div className='logo'>
                <img src={images.jobiLogo} alt="Jobi logo" />
            </div>
            <nav className='desktopNav'>
                <ul>
                    <li>
                        <NavLink to="/" className='highlight'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/jobList" className='highlight'>Jobs</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className='highlight'>Explore</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className='highlight'>Category</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className='highlight'>Pages</NavLink>
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