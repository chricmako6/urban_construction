import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function TestCard() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/assert/pro1.jpg",
      text: 'Exceeded expectations. On time within budget and top quality works Highly recommended.',
      name: 'Chric Dev'
    },
    {
      id: 2,
      image: "/assert/pro2.jpg",
      text: 'Amazing work! Professional team and excellent results. Will definitely hire again.',
      name: 'Sarah Johnson'
    },
    {
      id: 3,
      image: "/assert/pro3.jpg",
      text: 'Outstanding service. Delivered beyond expectations with great attention to detail.',
      name: 'Mike Anderson'
    }
  ];

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentData = slides[currentSlide];

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center p-2 sm:p-3 gap-3 sm:gap-4 w-full">
      {/* Image Container */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-25 md:h-25 lg:w-28 lg:h-28 xl:w-35 xl:h-35 bg-amber-400 flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-bold text-white transition-all duration-500 overflow-hidden rounded-lg">
        {currentData.image ? (
          <img 
            src={currentData.image} 
            alt={currentData.name} 
            className="w-full h-full object-cover" 
          />
        ) : (
          <span className="text-sm sm:text-base md:text-lg">{currentData.id}</span>
        )}
      </div>

      {/* Description Container */}
      <div className="flex-1 w-full text-center sm:text-left mt-3 sm:mt-0">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#5e5f61] mb-2 sm:mb-3 md:mb-4 transition-all duration-500 min-h-15 sm:min-h-17.5 md:min-h-20">
          {currentData.text}
        </p>
        <span className='font-bold text-sm sm:text-base md:text-lg lg:text-[18px] text-[#5e5f61] transition-all duration-500'>
          {currentData.name}
        </span>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-2 sm:gap-3 justify-center items-center mt-3 sm:mt-0 sm:absolute sm:bottom-4 sm:right-4 md:static md:mt-27 w-full sm:w-auto">
        <button 
          onClick={handlePrevious}
          className="p-2 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-15 lg:w-15 cursor-pointer hover:text-[#ffd061] bg-[#ffd061] flex justify-center items-center rounded transition hover:bg-[#f5c84a]"
          aria-label="Previous testimonial"
        >
          <FaArrowLeft className='w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#5e5f61]'/>
        </button>
        <button 
          onClick={handleNext}
          className="p-2 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-15 lg:w-15 cursor-pointer hover:text-[#ffd061] bg-[#ffd061] flex justify-center items-center rounded transition hover:bg-[#f5c84a]"
          aria-label="Next testimonial"
        >
          <FaArrowRight className='w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#5e5f61]'/>
        </button>
      </div>
    </div>
  );
}

export default TestCard;