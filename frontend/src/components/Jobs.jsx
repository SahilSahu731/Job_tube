import React, { useEffect, useState, useRef } from 'react';
import Navbar from './shared/Navbar';
import LatestJobCards from './LatestJobCards';
import FilterCard from './FilterCard';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { Button } from './ui/button';
import Job from './Job';

const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);
    const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
    const filterDrawerRef = useRef(null);

    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.location.toLowerCase().includes(searchedQuery.toLowerCase());
            });
            setFilterJobs(filteredJobs);
        } else {
            setFilterJobs(allJobs);
        }
    }, [allJobs, searchedQuery]);

    const toggleFilterDrawer = () => {
        setIsFilterDrawerOpen(!isFilterDrawerOpen);
    };

    const closeFilterDrawer = () => {
        setIsFilterDrawerOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isFilterDrawerOpen && filterDrawerRef.current && !filterDrawerRef.current.contains(event.target)) {
                setIsFilterDrawerOpen(false);
            }
        };

        if (isFilterDrawerOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isFilterDrawerOpen]);

    const drawerVariants = {
        hidden: { y: '100%' },
        visible: { y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
        exit: { y: '100%', transition: { duration: 0.3, ease: 'easeIn' } },
    };

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 md:mt-10'>
                <div className='md:hidden flex justify-end mb-4'>
                    <Button onClick={toggleFilterDrawer} className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2">
                        <Filter size={18} /> Filters
                    </Button>
                </div>

                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='hidden md:block md:w-1/4 lg:w-1/5'>
                        <FilterCard />
                    </div>

                    <AnimatePresence>
                        {isFilterDrawerOpen && (
                            <motion.div
                                ref={filterDrawerRef}
                                variants={drawerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className='fixed inset-x-0 bottom-0 w-full bg-gray-900 z-50 shadow-lg md:hidden overflow-y-auto max-h-[80vh] rounded-t-lg'
                            >
                                <div className='flex justify-between items-center p-4 border-b border-gray-700'>
                                    <h2 className='text-xl font-semibold'>Job Filters</h2>
                                    <button onClick={closeFilterDrawer} className="text-white focus:outline-none">
                                        <X size={24} />
                                    </button>
                                </div>
                                <div className='p-4'>
                                    <FilterCard onFilterApply={closeFilterDrawer} />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {
                        filterJobs.length === 0 ? (
                            <span className="text-center text-lg mt-10 w-full">No jobs found matching your criteria.</span>
                        ) : (
                            <div className='flex-1 h-[calc(100vh-160px)] md:h-[calc(100vh-140px)] hide-scrollbar overflow-y-auto pb-5'>
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                                    {
                                        filterJobs.map((job) => (
                                            <motion.div
                                                initial={{ opacity: 0.2, y: 100 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, x: -100 }}
                                                transition={{ duration: 0.5 }}
                                                key={job?._id}
                                            >
                                                <Job job={job} />
                                            </motion.div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Jobs;