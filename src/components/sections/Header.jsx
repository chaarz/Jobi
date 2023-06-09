import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
import SearchForm from "./SearchForm";

const Header = (props) => {

    const location = useLocation();
    
    return (
        <header>
            <NavBar />
            <div className="wrapper">
                {
                    location.pathname === "/" ? (
                        <div className="heading">
                            <div className="headerTextContainer">
                                <h1>Find & Hire Experts for any job</h1>
                                <p>Unlock your potential and find your dream job</p>
                            </div>
                            <SearchForm />
                            <div>
                                <p>Popular: Designer, Art, Software Engineer, Video Editing</p>
                            </div>
                        </div>
                    ) : null
                }
                {
                    location.pathname === "/jobList" ? (
                        <div className="heading">
                            <div className="headerTextContainer">
                                <h1>Job Listing</h1>
                                <p>Unlock your potential and find your dream job</p>
                            </div>
                        </div>
                    ) : null
                }
                {
                    props.title !== undefined ? (
                        <div className="heading">
                            <div className="headerTextContainer">
                                <h1>{props.title}</h1>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </header>
    )
}

export default Header;