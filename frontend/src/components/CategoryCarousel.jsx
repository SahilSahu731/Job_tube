import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';

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
]

const CategoryCarousel = () => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const searchJobHandler = (query) => {
        // dispatch(setSearchedQuery(query));
        console.log(query)
        // navigate("/browse");
    }

    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem key={index} className="md:basis-1/3 lg-basis-1/4 basis-1/2 flex flex-col justify-center items-center">
                                <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full px-6 text-black">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious className="text-black z-10 cursor-pointer" />
                <CarouselNext className="text-black z-10 cursor-pointer" />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel