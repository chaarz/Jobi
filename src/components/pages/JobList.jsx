import { useState, useEffect } from 'react';
import images from '../images';
import { getDatabase, ref, onValue } from 'firebase/database';
import firebase from '../firebase';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        // create a variable that holds our database details
        const database = getDatabase(firebase)

        // we then create a variable that makes reference to our database
        const dbRef = ref(database)

        // add an event listener to that variable that will fire
        // from the database, and call that data 'response'.
        onValue(dbRef, (response) => {
            // here we use Firebase's .val() method to parse our database info the way we want it
            const data = response.val();
            console.log(data)
            //   data.forEach((key) => {
            //     jobData.push(data[key]);
            //   })
            setJobs(data);
        });
    }, [])
    return (
        <section>
            <p>This is the Job List page!</p>
            <ul>
                {jobs.map((job) => {
                    return (
                        <li key={job.title}>
                            <div>
                                <img src={images.profile} alt="company logo" />
                                <p>{job.title}</p>
                            </div>
                            <div>
                                <p>{job.contractType}</p>
                                <p>${job.salary.min}-${job.salary.max}</p>
                            </div>
                            <div>
                                <p>{job.location.city}, {job.location.country}</p>
                                <p>{job.category}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default JobList;