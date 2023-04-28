import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../../utils/images';
import JobSamples from '../../utils/JobSamples';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';
import firebase from '../firebase';
import Header from '../sections/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const JobList = () => {
    const [popup, setPopup] = useState(false);

    const handleClickOpen = (event) => {
        event.preventDefault();
        setPopup(!popup);
        console.log(popup);
    }
    // const handleClickClose = () => {
    //     setPopup(false);
    // }

    const [jobs, setJobs] = useState([]);

    const jobSample = JobSamples;

    useEffect(() => {

        const database = getDatabase(firebase)

        const dbRef = ref(database, 'jobs/')

        onValue(dbRef, (response) => {

            const data = response.val();

            const arrayOfJobs = []

            for (let key in data) {
                const jobObject = {
                    id: key,
                    ...data[key]
                };

                arrayOfJobs.push(jobObject)
            }

            setJobs(arrayOfJobs);
        });
    }, [])
    return (
        <>
            <Header />
            <main>
                <section className='wrapper jobList'>
                    <div className='jobListSort'>
                        <p> {jobs.length} <span>jobs found</span></p>
                    </div>
                    <ul>
                        {jobs.map((job) => {
                            return (
                                <li key={job.id}>
                                    <Link to={`/jobList/${job.id}`}>
                                        <div className='jobTitle'>
                                            <div className='companyLogo'>
                                                <img src={images.profile} alt="company logo" />
                                            </div>
                                            <h4>{job.title}</h4>
                                        </div>
                                        <div className='jobCardType flex'>
                                            <p
                                                style={
                                                    job.contractType === "Full Time"
                                                        ? { color: "#008000" }
                                                        : job.contractType === "Part Time"
                                                            ? { color: "#ff0000" }
                                                            : null
                                                }
                                            >
                                                {job.contractType}
                                            </p>
                                            <p>${job.salary.min}-${job.salary.max}</p>
                                        </div>
                                        <div className='jobCardDetails flex'>
                                            <p className='jobLocation'>{job.location.city}, {job.location.country}</p>
                                            <p>{job.category}</p>
                                        </div>
                                        <div className='jobCardBtn'>
                                            <button onClick={handleClickOpen} className='saveJobBtn highlight'>
                                                <span className="sr-only">Bookmark job</span>
                                                <FontAwesomeIcon icon={faBookmark} />
                                            </button>
                                            <button>APPLY</button>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    {popup ?
                        // <div className='popup-background'>
                            <div className='popup-window'>
                                <h3>You must be logged in to bookmark this job!</h3>
                                <button onClick={() => {setPopup(false)}} type="button">OK</button>
                            </div>
                        // </div>
                        : ""}
                </section>
            </main>
        </>
    )
}

export default JobList;