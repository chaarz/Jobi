import { useState, useEffect } from 'react';
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
          console.log(response.val());
          const jobData = []

          const data = response.val();

          for (let key in data) {
            jobData.push({key: key, title:data.title});
          }

          setJobs(jobData);
        });
      }, [])
    return (
        <section>
            <p>This is the Job List page!</p>
            <ul>
                {jobs.map((job) => {
                    return (
                        <li key={job.key}>
                            <p>{job.title}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
  }

export default JobList;