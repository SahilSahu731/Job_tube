import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
    const {allJobs} = useSelector(store=>store.job);
   
    return (
        <motion.div className='max-w-7xl mx-auto my-20' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 1 }}>
            <h1 className='text-4xl font-bold'><span className='text-[#4de43a]'>Latest & Top </span> Job Openings</h1>
            <hr className='mt-5 w-1/3  border-gray-200' />
            <div className='grid grid-cols-3 gap-4 my-5 mt-10'>
                {
                    allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
                }
            </div>
        </motion.div>
    )
}

export default LatestJobs


