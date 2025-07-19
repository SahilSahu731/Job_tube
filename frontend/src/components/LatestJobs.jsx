import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'


const LatestJobs = () => {
    const {allJobs} = useSelector(store=>store.job);
   
    return (
        <motion.div className='max-w-7xl mx-auto my-20' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 1 }}>
            <h1 className='text-4xl ml-5 font-bold'><span className='text-[#4de43a]'>Latest & Top </span> Job Openings</h1>
            <hr className='mt-5 w-1/3 ml-5 border-gray-200' />
            <div className='grid md:grid-cols-3 p-9 sm:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-4 my-5 mt-10'>
                {
                    allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0,8).map((job) => <LatestJobCards key={job._id} job={job}/>)
                }
            </div>
        </motion.div>
    )
}

export default LatestJobs


