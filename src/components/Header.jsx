import NavBar from "./NavBar";

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <NavBar />
                <div className="heading">
                    <div className="headerTextContainer">
                        <h1>Find & Hire Experts for any job</h1>
                        <p>Unlock your potential and find your dream job</p>
                    </div>
                    <div>
                        <form action="#">
                            <div>
                                <label htmlFor="keyword">Job title, Keywords or Company</label>
                                <input type="text" id="keyword" name="keyword" />
                            </div>
                            <div>
                                <label htmlFor="category">Category</label>
                                <select name="category" id="category">
                                    <option value disabled selected>All categories</option>
                                    <option value="webDevelopment">Web Development</option>
                                </select>
                            </div>
                            <button>Search</button>
                        </form>
                    </div>
                    <div>
                        <p>Popular: Designer, Art, Software Engineer, Video Editing</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;