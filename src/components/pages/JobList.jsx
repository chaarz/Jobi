import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../images';
import JobSamples from '../JobSamples';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';
import firebase from '../firebase';
import Header from '../sections/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const JobList = () => {
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
                                <Link to={`/jobList/${job.id}`}
                                    key={job.id}>
                                    <li>
                                        <div className='jobTitle'>
                                            <div className='companyLogo'>
                                                <img src={images.profile} alt="company logo" />
                                            </div>
                                            <p>{job.title}</p>
                                        </div>
                                        <div className='jobCardType flex'>
                                            <p>{job.contractType}</p>
                                            <p>${job.salary.min}-${job.salary.max}</p>
                                        </div>
                                        <div className='jobCardDetails flex'>
                                            <p>{job.location.city}, {job.location.country}</p>
                                            <p>{job.category}</p>
                                        </div>
                                        <div className='jobCardBtn'>
                                            <button className='saveJobBtn highlight'>
                                                <FontAwesomeIcon icon={faBookmark} />
                                            </button>
                                            <button>APPLY</button>
                                        </div>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </section>
            </main>
        </>
    )
}

export default JobList;