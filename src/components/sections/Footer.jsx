const Footer = () => {
    return (
        <footer>
            <div className='upperFooter'>
                <div className='wrapper'>
                    <div className='flexContainer'>
                        <div className='headingContainer'>
                            <h2>Complete Job Portal for Everyone</h2>
                        </div>
                        <div className='flexTextContainer'>
                            <p>Find your dream job or your next talent.</p>
                            <div className='flexBtnContainer'>
                                <button className='lookingBtn'>Looking for a job?</button>
                                <button>Post a job</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mainFooter'>
                <div className='wrapper'>
                    <div className="bottomFooter">
                        <p>Privacy & Terms</p>
                        <p>Contact Us</p>
                        <p>Copyright @2023 jobi inc.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
  }

  export default Footer;