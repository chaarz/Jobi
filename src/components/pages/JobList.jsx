import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../../utils/images';
import JobSamples from '../../utils/JobSamples';
import { getDatabase, ref, onValue, push, set, update } from 'firebase/database';
import firebase from '../firebase';
import Header from '../sections/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const JobList = () => {

    // Popup window opens when bookmark icon is clicked
    const [popup, setPopup] = useState(false);

    const handleClickOpen = (event) => {
        event.preventDefault();
        setPopup(!popup);
    }

    //display jobs from Firebase
    const [jobs, setJobs] = useState([]);

    useEffect(() => {

        const database = getDatabase(firebase)

        const dbRef = ref(database, 'jobs/')

        // // helper function to populate database with jobs
        // const populateJobs = (job) => {

        //     const newJobKey = push(dbRef).key

        //     update(dbRef, { [newJobKey]: job })
        //         .then(() => {
        //             console.log('job has been added')
        //         })
        //         .catch((err) => {
        //             console.log(err)
        //         })
        // }

        // populateJobs(JobSamples);

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

    // Display salary in currency format
    const toCurrency = (number) => {
        const currency = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD",
            maximumFractionDigits: 0
        });
        return currency.format(number);
    }

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
                                                    job.contractType === "Full-time"
                                                        ? { color: "#008000" }
                                                        : job.contractType === "Part-time"
                                                            ? { color: "#ff0000" }
                                                            : null
                                                }
                                            >
                                                {job.contractType}
                                            </p>
                                            <p>{toCurrency(job.salary.min)} - {toCurrency(job.salary.max)}</p>
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
                        <div className='popup-background'>
                            <div className='popup-window'>
                                <p>You must be logged in to save this job!</p>
                                <button onClick={() => { setPopup(false) }} type="button">ok</button>
                            </div>
                        </div>
                        : ""}
                </section>
            </main>
        </>
    )
}

export default JobList;