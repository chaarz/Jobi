import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import firebase from "../firebase";
import { getDatabase, ref, child, get } from 'firebase/database';

const JobDetail = () => {
  const [jobDetails, setJobDetails] = useState({})

  const jobId = useParams();

  useEffect(() => {
    const database = getDatabase(firebase)

    const dbRef = ref(database, `jobs/${jobId.jobID}`)

    get(dbRef)
      .then((jobDetail) => {
        if (jobDetail.exists()) {
          setJobDetails(jobDetail.val())
        } else {
          console.log("No Data available")
        }
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);


  return (
    <main>
      <section className='jobHeading'>
        <div className='wrapper'>
          <h1>{jobDetails.title}</h1>
        </div>
      </section>
      <section className='jobDetails'>
        <div className='wrapper jobInfo'>
          <div>
            <h3>Overview</h3>
            <p>{jobDetails.overview}</p>
          </div>
          <div>
            <h3>Job Description</h3>
            <p>{jobDetails.description}</p>
          </div>
          <div>
            <h3>Responsibilities</h3>
            <ul>{jobDetails.responsibilities}
              {/* {jobDetails.responsibilities.map((resp) => {
                return (
                  <li key={resp}>
                    {resp}
                  </li>
                )
              })} */}
            </ul>
          </div>
          <div>
            <h3>Required Skills</h3>
            <ul>
              <li>{jobDetails.requiredSkills}</li>
            </ul>
          </div>
          <div>
            <h3>Benefits</h3>
            <p>{jobDetails.benefits}</p>
          </div>
          <button>Apply for this position</button>
        </div>
      </section>
    </main>


  )
}

export default JobDetail;
