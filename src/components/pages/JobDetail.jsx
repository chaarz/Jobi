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
        if(jobDetail.exists()){
          setJobDetails(jobDetail.val())
        } else {
          console.log("No Data available")
        }
      })
      .catch((error) =>{
        console.error(error);
      })
  }, []);

  
  return (
    <section>
      <div>Job Detail</div>
      <p>{jobDetails.title}</p>
    </section>

  )
}

export default JobDetail;
