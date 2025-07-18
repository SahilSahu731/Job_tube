import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import FilterCard from './FilterCard';
import { useSelector } from 'react-redux';


const Jobs = () => {
    const { allJobs } = useSelector(store => store.job);
    // eslint-disable-next-line no-unused-vars
    const [filterJobs, setFilterJobs] = useState(allJobs);

    // useEffect(() => {
    //     if (searchedQuery) {
    //         const filteredJobs = allJobs.filter((job) => {
    //             return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
    //                 job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
    //                 job.location.toLowerCase().includes(searchedQuery.toLowerCase())
    //         })
    //         setFilterJobs(filteredJobs)
    //     } else {
    //         setFilterJobs(allJobs)
    //     }
    // }, [allJobs, searchedQuery]);

    return (
        <div>
            <Navbar />
            <div className='max-w-8xl mx-16 mt-10'>
                <div className='flex gap-5'>
                    <div className='w-1/5'>
                        <FilterCard />
                    </div>
                    {
                        filterJobs.length <= 0 ? <span>Job not found</span> : (
                            <div className='flex-1 h-[88vh] hide overflow-y-auto pb-5'>
                                <div className='grid grid-cols-3 gap-4'>
                                    {
                                        filterJobs.map((job) => (
                                            // <motion.div
                                            //     initial={{ opacity: 0, x: 100 }}
                                            //     animate={{ opacity: 1, x: 0 }}
                                            //     exit={{ opacity: 0, x: -100 }}
                                            //     transition={{ duration: 0.3 }}
                                            //     key={job?._id}>
                                            //     <Job job={job} />
                                            // </motion.div>
                                            <div key={job?._id}>
                                                <Job job={job} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>


        </div>
    )
}

export default Jobs