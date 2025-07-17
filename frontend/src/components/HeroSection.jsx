import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

const HeroSection = () => {
    const [query, setQuery] = useState("");
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    const searchJobHandler = () => {
        // dispatch(setSearchedQuery(query));
        // navigate("/browse");
        console.log(query)
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#2faa81] font-medium'>No. 1 Job Hunt Website</span>
                <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#3be46d]'>Dream Jobs</span></h1>
                <p>Get the latest job openings from the best companies. Search for jobs by keyword, location, or company name.</p>
                <div className='flex w-[40%] shadow-lg border border-gray-800 rounded-full items-center mx-auto mt-5'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full p-2 pl-6 text-gray-900 rounded-r-none h-10 rounded-full'

                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full rounded-l-none w-14 h-10 hover:bg-green-600 bg-[#23a539]">
                        <Search className='h-5 w-5 text-white' />   
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection