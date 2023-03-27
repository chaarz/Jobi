import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    return (
        <header>
            <div className="wrapper">
                <NavBar />
                {
                    location.pathname === "/" ? (
                        <div className="heading">
                            <div className="headerTextContainer">
                                <h1>Find & Hire Experts for any job</h1>
                                <p>Unlock your potential and find your dream job</p>
                            </div>
                            <div className="searchFormContainer">
                                <form action="#">
                                    <div className='flexContainer'>
                                        <div className="searchForm">
                                            <label htmlFor="keyword">Job title, Keywords or Company</label>
                                            <input type="text" id="keyword" name="keyword" />
                                        </div>
                                        <div className="searchForm category">
                                            <label htmlFor="category">Category</label>
                                            <select name="category" id="category">
                                                <option value disabled selected>All categories</option>
                                                <option value="webDevelopment">Web Development</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button>Search</button>
                                </form>
                            </div>
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
            </div>
        </header>
    )
}

export default Header;