import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer",
    "Mobile Developer",
    "UI/UX Designer",
    "Software Engineer",
    "QA Engineer",
    "DevOps Engineer",
    "Project Manager",
    "Technical Writer",
    "Marketing Specialist",
    "Business Analyst",
    "Product Manager",
    "Sales Representative",
];

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    };

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <Carousel className="w-full max-w-7xl mx-auto my-10 md:my-20"> 
                <CarouselContent className="-ml-1 px-10"> 
                    {
                        category.map((cat, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-1 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 flex flex-col justify-center items-center" 
                            >
                                <Button
                                    onClick={() => searchJobHandler(cat)}
                                    variant="outline"
                                    className="rounded-full px-4 py-2 text-black whitespace-nowrap text-sm sm:text-base"
                                >
                                    {cat}
                                </Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 text-black z-10 cursor-pointer  md:flex" /> 
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 text-black z-10 cursor-pointer  md:flex" /> 
            </Carousel>
        </div>
    );
};

export default CategoryCarousel;