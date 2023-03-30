import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../images';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';
import firebase from '../firebase';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    // sample job object
    const jobSample = [  {
        uid: "0001",
        url: 'https://omega.corp/jobs/full-stack-developer',
        benefits: [
          'Competitive salary and benefits package with annual bonuses.',
          'Flexible work hours and options to work remotely from anywhere in the world.',
          'Opportunities for career growth and advancement.',
          'Collaborative and fun work environment with regular team events.',
        ],
        category: 'Development',
        date: '2023-03-27',
        employer: 'Omega Corp',
        facebook: 'https://www.facebook.com/omegacorp',
        twitter: 'https://twitter.com/omegacorp',
        experienceYears: 7,
        expertiseLevel: 'Senior',
        description:
          "As a full-stack developer at Omega Corp, you will be responsible for developing and maintaining the company's web applications and services.",
        title: 'Full-stack Developer',
        contractType: 'Fulltime',
        keywords: [
          'full-stack development',
          'web development',
          'HTML',
          'CSS',
          'JavaScript',
          'React',
          'Node.js',
          'MongoDB',
          'AWS',
        ],
        location: { city: 'San Francisco', country: 'United States' },
        overview:
          'Omega Corp is looking for a highly skilled full-stack developer to join our team.',
        requiredSkills: [
          'Expertise in HTML, CSS, and JavaScript.',
          'Strong experience with modern web development frameworks such as React and Node.js.',
          'Experience with MongoDB and AWS.',
          'Excellent problem-solving and debugging skills.',
          'Exceptional communication and collaboration skills.',
        ],
        responsibilities: [
          "Develop new features for the company's web applications and services.",
          'Maintain and improve existing code.',
          'Collaborate with designers and other developers to implement new features.',
          'Write well-documented, modular, and scalable code.',
          'Optimize web applications for performance and scalability.',
        ],
        salary: { max: 120000, min: 80000 },
      },  {
        uid: "0002",
        url: 'https://omega.corp/jobs/full-stack-developer',
        benefits: [
          'Competitive salary and benefits package with annual bonuses.',
          'Flexible work hours and options to work remotely from anywhere in the world.',
          'Opportunities for career growth and advancement.',
          'Collaborative and fun work environment with regular team events.',
        ],
        category: 'Development',
        date: '2023-03-27',
        employer: 'Omega Corp',
        facebook: 'https://www.facebook.com/omegacorp',
        twitter: 'https://twitter.com/omegacorp',
        experienceYears: 7,
        expertiseLevel: 'Senior',
        description:
          "As a full-stack developer at Omega Corp, you will be responsible for developing and maintaining the company's web applications and services.",
        title: 'Front-End Developer',
        contractType: 'Part Time',
        keywords: [
          'full-stack development',
          'web development',
          'HTML',
          'CSS',
          'JavaScript',
          'React',
          'Node.js',
          'MongoDB',
          'AWS',
        ],
        location: { city: 'Toronto', country: 'Canada' },
        overview:
          'Omega Corp is looking for a highly skilled full-stack developer to join our team.',
        requiredSkills: [
          'Expertise in HTML, CSS, and JavaScript.',
          'Strong experience with modern web development frameworks such as React and Node.js.',
          'Experience with MongoDB and AWS.',
          'Excellent problem-solving and debugging skills.',
          'Exceptional communication and collaboration skills.',
        ],
        responsibilities: [
          "Develop new features for the company's web applications and services.",
          'Maintain and improve existing code.',
          'Collaborate with designers and other developers to implement new features.',
          'Write well-documented, modular, and scalable code.',
          'Optimize web applications for performance and scalability.',
        ],
        salary: { max: 120000, min: 80000 },
      }];

    useEffect(() => {
        // create a variable that holds our database details
        const database = getDatabase(firebase)

        // we then create a variable that makes reference to our database
        const dbRef = ref(database, 'jobs/')

        set(dbRef, [] )

        jobSample.forEach((job) => {
            push(dbRef, job)
        })
        // add an event listener to that variable that will fire
        // from the database, and call that data 'response'.
        onValue(dbRef, (response) => {
            // here we use Firebase's .val() method to parse our database info the way we want it
            const data = response.val();
            console.log(data)

            const arrayOfJobs = []

            for (let key in data) {
                arrayOfJobs.push(data[key])
            }

            console.log(arrayOfJobs);

            setJobs(arrayOfJobs);
        });
    }, [])
    return (
        <main>
            <section className='wrapper jobList'>
                <div className='jobListSort'>
                    <p> {jobs.length} <span>jobs found</span></p>
                </div>
                <ul>
                    {jobs.map((job) => {
                        return (
                            <Link to={`/jobList/${job.uid}`}
                            >
                                <li key={job.uid}>
                                    <div className='jobTitle'>
                                        <img src={images.profile} alt="company logo" />
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
                                        <button className='saveJobBtn'>
                                            <img src={images.bookmark} alt="bookmark icon" />
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
    )
}

export default JobList;