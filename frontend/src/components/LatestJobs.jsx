import React from 'react'
import LatestJobCards from './LatestJobCards';

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
    // const {allJobs} = useSelector(store=>store.job);
   
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold'><span className='text-[#4de43a]'>Latest & Top </span> Job Openings</h1>
            <hr className='mt-5 w-1/3  border-gray-200' />
            <div className='grid grid-cols-3 gap-4 my-5 mt-10'>
                {
                    allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
                }
            </div>
        </div>
    )
}

export default LatestJobs


// eslint-disable-next-line react-refresh/only-export-components
export const allJobs = [
  {
    _id: "1",
    company: { name: "TechCorp" },
    title: "Frontend Developer",
    description: "Build responsive web applications using React and Tailwind CSS.",
    position: 3,
    jobType: "Full-Time",
    salary: 12,
  },
  {
    _id: "2",
    company: { name: "DataSoft" },
    title: "Data Scientist",
    description: "Analyze large datasets to drive business insights.",
    position: 2,
    jobType: "Part-Time",
    salary: 15,
  },
  {
    _id: "3",
    company: { name: "CloudPeak" },
    title: "DevOps Engineer",
    description: "Manage CI/CD pipelines and cloud infrastructure.",
    position: 4,
    jobType: "Contract",
    salary: 18,
  },
  {
    _id: "4",
    company: { name: "InnovateX" },
    title: "Backend Developer",
    description: "Develop RESTful APIs with Node.js and Express.",
    position: 5,
    jobType: "Full-Time",
    salary: 14,
  },
  {
    _id: "5",
    company: { name: "AIWorks" },
    title: "Machine Learning Engineer",
    description: "Design and deploy ML models for predictive analytics.",
    position: 2,
    jobType: "Full-Time",
    salary: 20,
  },
  {
    _id: "6",
    company: { name: "WebWave" },
    title: "UI/UX Designer",
    description: "Create user-friendly interfaces and prototypes.",
    position: 1,
    jobType: "Freelance",
    salary: 10,
  },
  {
    _id: "7",
    company: { name: "SecureNet" },
    title: "Cybersecurity Analyst",
    description: "Monitor and protect systems from security threats.",
    position: 3,
    jobType: "Full-Time",
    salary: 16,
  },
  {
    _id: "8",
    company: { name: "GameForge" },
    title: "Game Developer",
    description: "Develop interactive games using Unity.",
    position: 2,
    jobType: "Contract",
    salary: 13,
  },
  {
    _id: "9",
    company: { name: "HealthTech" },
    title: "Mobile App Developer",
    description: "Build mobile apps for healthcare solutions.",
    position: 4,
    jobType: "Full-Time",
    salary: 15,
  },
  {
    _id: "10",
    company: { name: "EduPlatform" },
    title: "Full Stack Developer",
    description: "Work on both frontend and backend of e-learning platforms.",
    position: 6,
    jobType: "Full-Time",
    salary: 17,
  },
];