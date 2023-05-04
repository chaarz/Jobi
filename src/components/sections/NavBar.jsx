import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import images from '../../utils/images';

const NavBar = () => {
    const [isActive, setIsActive] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const toggleMobileNav = () => {
        setIsOpen(!isOpen);
        setIsActive(!isActive);
    }
    return (
        <div className="stickyNav">
            <div className='navBar'>
                <NavLink to="/" className='logo'>
                    <div className="yellowCircle">
                        <div className="greenCircle"></div>
                    </div>
                    <span>jobi</span>
                </NavLink>
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
            {/* Slide Out Nav */}
            <div className="hamButtonContainer">
                <button className={isActive ? " hamButton active" : "hamButton"} onClick={toggleMobileNav} >
                    <span></span>
                    <span className="visually-hidden">Slide-Out Navigation Menu</span>{/*for screen readers only*/}
                </button>
            </div>
            <div className={isOpen ? "mobileNavContainer open" : "mobileNavContainer"}>
                <nav className="mobileNav wrapper">
                    <ul className="mobileNavLinks">
                        <li className="mobileNavLink" onClick={toggleMobileNav} >
                            <NavLink to="/" className='highlight'>Home</NavLink>
                        </li>
                        <li className="mobileNavLink" onClick={toggleMobileNav} >
                            <NavLink to="/jobList" className='highlight'>Jobs</NavLink>
                        </li>
                        <li className="mobileNavLink" onClick={toggleMobileNav} >
                            <NavLink to="/" className='highlight' >Explore</NavLink>
                        </li>
                        <li className="mobileNavLink" onClick={toggleMobileNav} >
                            <NavLink to="/" className='highlight'>Category</NavLink>
                        </li>
                        <li className="mobileNavLink" onClick={toggleMobileNav} >
                            <NavLink to="/" className='highlight'>Pages</NavLink>
                        </li>
                    </ul>
                    <div className="navButtons">
                        <button className='loginBtn' onClick={toggleMobileNav}>Login/Sign up</button>
                        <button onClick={toggleMobileNav}>Post a job</button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;