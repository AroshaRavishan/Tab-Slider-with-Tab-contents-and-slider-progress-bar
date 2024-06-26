'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import chevronleft from "../public/Images/arrow-left.svg";
import chevronright from "../public/Images/arrow-right.svg";

// Define categories and their corresponding slides
const categories = [
    {
        name: 'Information Technology',
        slides: [
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Information Technology' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Information Technology' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Information Technology' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Information Technology' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Information Technology' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Information Technology' },
        ]
    },
    {
        name: 'Business',
        slides: [
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Business1' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Business2' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Business3' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Business4' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Business5' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Business6' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Business7' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Business8' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Business9' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Business10' },
        ]
    },
    {
        name: 'Management',
        slides: [
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Management' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Management' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Management' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Management' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Management' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Management' },
        ]
    },
    {
        name: 'Administration',
        slides: [
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Administration' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Administration' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Administration' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Administration' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Administration' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Administration' },
        ]
    },
    {
        name: 'Project Management',
        slides: [
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Project Management' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Project Management' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Project Management' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Project Management' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Project Management' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Project Management' },
        ]
    },
    {
        name: 'Hr & Leadership',
        slides: [
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Hr & Leadership' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Hr & Leadership' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Hr & Leadership' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Hr & Leadership' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Hr & Leadership' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Hr & Leadership' },
        ]
    },
    {
        name: 'Sales & Marketing',
        slides: [
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Sales & Marketing' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Sales & Marketing' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Sales & Marketing' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Sales & Marketing' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Sales & Marketing' },
            { title: 'Add Your own Title Name', banenrImage: 'Images/course-image.png', categoryImage: 'Images/axelos.png', categoryName: 'Sales & Marketing' },
        ]
    },
    // ... Add more categories as needed
];

const Carousel = () => {

     // Refs for Splide instances
    const categorySplideRef = useRef(null);
    const contentSplideRef = useRef(null);

    // State variables
    const [hasStarted, setHasStarted] = useState(false);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [activeCategory, setActiveCategory] = useState(categories[0].name);
    const [progress, setProgress] = useState(0);

    // Navigation functions for category slider
    const prevSlide = () => {
        if (categorySplideRef.current) {
            categorySplideRef.current.go('-1');
        }
    };

    const nextSlide = () => {
        if (categorySplideRef.current) {
            categorySplideRef.current.go('+1');
            setHasStarted(true);
        }
    };


    // Navigation functions for content slider
    const prevSlideCategory = () => {
        if (contentSplideRef.current) {
            contentSplideRef.current.splide.go('-1');
        }
    };

    const nextSlideCategory = () => {
        if (contentSplideRef.current) {
            contentSplideRef.current.splide.go('+1');
            setHasStarted(true); // Mark that the slider has started
        }
    };

    // Handle category selection
    const handleCategoryClick = (categoryName) => {
        setActiveCategory(categoryName);
        if (contentSplideRef.current) {
            contentSplideRef.current.go(0); // Reset content slider to first slide
        }
    };

    // Splide options for category slider
    const categorySplideOptions = {
        type: 'slide',
        perPage: 4,
        arrows: false,
        pagination: false,
        gap: '1rem',
        autoplay: true,
        perMove: 1,
        interval: 3000,

        autoScroll: {
            speed: 1,
            pauseOnHover: true,
            pauseOnFocus: false,
        },
        breakpoints: {
            1200: {
                perPage: 2,
            },
            991: {
                perPage: 2,
            },
            767: {
                perPage: 2,
            },
            575: {
                perPage: 1,
            },
        },
    };

    // Splide options for content slider
    const contentSplideOptions = {
        type: 'slide',
        perPage: 3,
        perMove: 1,
        rewind: true,
        arrows: false,
        autoplay: true,
        pagination: false,
        gap: '1rem',
        breakpoints: {
            1200: { perPage: 2 },
            767: { perPage: 1 },
        },
    };

    // Effect to update navigation buttons state
    useEffect(() => {
        const splide = categorySplideRef.current?.splide;
        if (splide) {
            const updateButtons = () => {
                const currentIndex = splide.index;
                const totalSlides = splide.length - splide.options.perPage;
                setIsAtEnd(currentIndex >= totalSlides);
                setHasStarted(currentIndex > 0);
            };
            splide.on('moved', updateButtons);
            updateButtons();
        }
    }, []);

    return (
        <div className="container pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 bg-green-100 rounded-t-3xl h-[30px] lg:h-[60px]">
                <div className="col-span-1 lg:col-span-1 border-bottom"></div>
                <div className="col-span-1 lg:col-span-10 border-left flex items-center justify-center border-bottom border-right">
                </div>
                <div className="col-span-1 lg:col-span-1 border-bottom"></div>
            </div>
             {/* Category slider */}
            <div className="grid grid-cols-1 lg:grid-cols-12 bg-green-100">
                <div className="col-span-1 lg:col-span-1"></div>
                <div className="col-span-1 lg:col-span-10 border-left border-right border-bottom">
                    <div className="relative">
                        {hasStarted && (
                            <button className="prev absolute top-1/2 transform -translate-y-1/2 left-0 z-10" onClick={prevSlide}>
                                <div className="text-gray-300 hover:text-white border border-gray-300 rounded-full bg-white w-[35px] h-[35px] flex justify-center items-center">
                                    <img src={chevronleft.src} alt="chevronleft" />
                                </div>
                            </button>
                        )}
                        <div className="mx-10">
                            <Splide options={categorySplideOptions} ref={categorySplideRef}>
                                {categories.map((category, index) => (
                                    <SplideSlide key={index}>
                                        <div className="my-3 lg:my-5 flex justify-center">
                                            <div
                                                className={`text-base font-medium rounded-lg w-max py-2.5 px-8 border cursor-pointer text-nowrap ${activeCategory === category.name
                                                    ? 'text-black-900 bg-green-200 border-green-200'
                                                    : 'text-black-900 bg-white border-gray-300'
                                                    }`}
                                                onClick={() => handleCategoryClick(category.name)}
                                            >
                                                {category.name}
                                            </div>
                                        </div>
                                    </SplideSlide>
                                ))}
                            </Splide>
                        </div>
                        {!isAtEnd && (
                            <button className="next absolute top-1/2 transform -translate-y-1/2 right-0 z-10" onClick={nextSlide}>
                                <div className="text-gray-300 hover:text-white border border-gray-300 rounded-full bg-white w-[35px] h-[35px] flex justify-center items-center">
                                    <img src={chevronright.src} alt="chevronright" />
                                </div>
                            </button>
                        )}
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-1 border-bottom"></div>
            </div>
            {/* Content slider */}
            <div className="grid grid-cols-1 lg:grid-cols-12 bg-green-100 rounded-b-3xl">
                <div className="col-span-1 lg:col-span-1"></div>
                <div className="col-span-1 lg:col-span-10 border-left border-right">
                    <div className="py-10 px-4">
                        {categories.find(category => category.name === activeCategory) && (
                            <Splide options={contentSplideOptions} ref={contentSplideRef} onMoved={(splide) => {
                                const progressValue = (splide.index / (splide.length - 1)) * 100;
                                setProgress(progressValue);
                            }}>
                                {categories.find(category => category.name === activeCategory).slides.map((slide, index) => (
                                    <SplideSlide key={index} className="">
                                        <div className="bg-white shadow-soft-shadow rounded-2xl">
                                            <img src={slide.banenrImage} alt="banenrImage" className="bannerImage" />
                                            <div className="p-5 card-body">
                                                <div className="flex gap-3 items-center">
                                                    <div className="">
                                                        <img src={slide.categoryImage} alt="categoryImage" className="h-10 max-w-10" />
                                                    </div>
                                                    <h6 className="text-lg font-semibold text-black-800 uppercase">{slide.categoryName}</h6>
                                                </div>
                                                <h3 className="text-lg font-semibold text-black-800 mt-3 bannerTitle">{slide.title}</h3>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                ))}
                            </Splide>
                        )}
                    </div>
                     {/* Progress bar and navigation buttons */}
                    <div className="block flex items-center justify-between my-8 w-full lg:w-3/5 mx-auto">
                        <button className="prev" onClick={prevSlideCategory}>
                            <div className="fas fa-chevron-left text-gray-300 hover:text-white border border-gray-300 rounded-md w-[35px] h-[35px] flex justify-center items-center">
                                <img src={chevronleft.src} alt="checronleft" />
                            </div>
                        </button>
                        <div className="progress-bar bg-gray-500 h-[2px] flex-1 mx-4">
                            <div className="progress" style={{ width: `${progress}%` }}></div>
                        </div>
                        <button className="next" onClick={nextSlideCategory}>
                            <div className="fas fa-chevron-right text-gray-300 hover:text-white border border-gray-300 rounded-md w-[35px] h-[35px] flex justify-center items-center">
                                <img src={chevronright.src} alt="checronleft" />
                            </div>
                        </button>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-1"></div>
            </div>
        </div>
    );
};

export default Carousel;