import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");    
    };

    return (
        <div className='text-center px-4 sm:px-6 lg:px-8 py-10'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#2faa81] font-medium text-sm sm:text-base'> 
                    No. 1 Job Hunt Website
                </span>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'>
                    Search, Apply & <br className='sm:hidden'/> Get Your <span className='text-[#3be46d]'>Dream Jobs</span>
                </h1>
                <p className='text-sm sm:text-base max-w-2xl mx-auto'>
                    Get the latest job openings from the best companies. Search for jobs by keyword, location, or company name.
                </p>
                <div className='flex w-full sm:w-[80%] md:w-[60%] lg:w-[40%] max-w-xl shadow-lg border border-gray-800 rounded-full items-center mx-auto mt-5'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full p-2 pl-6 text-gray-900 rounded-l-full rounded-r-none h-10' 
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full rounded-l-none w-14 h-10 hover:bg-green-600 bg-[#23a539]">
                        <Search className='h-5 w-5 text-white' />  
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;