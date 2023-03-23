import { NavLink} from 'react-router-dom';
import images from './images';

const NavBar = () => {
    return (
        <nav>
            <div className='logo'>
                <img src={images.jobiLogo} alt="Jobi logo" />
            </div>
            <ul className='navMenu'>
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
                <div>
                    <button>Login/Sign up</button>
                    <button>Post a Job</button>
                </div>
            </ul>
        </nav>
    )
  }

export default NavBar;