import React from 'react'

interface ServiceProps {
  heading: string;
  paragraph: string;
  img: string
}

const Service: React.FC<ServiceProps> = ({ heading, paragraph, img }) => {
  return (
    <div className='flex border border-gray-200 hover:bg-gray-50 bg-white  rounded-2xl overflow-hidden flex-col sm:flex-row items-center justify-center mt-3 sm:mt-4 lg:mt-6 group hover:shadow-lg transition-all duration-300'>
      {/* Icon Container - Responsive */}
      <div className='w-full sm:w-auto p-3 sm:p-4 lg:p-5 transition-colors duration-300'>
        <img 
          className='w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto sm:mx-0 object-contain' 
          src={img} 
          alt={heading}
        />
      </div>
      
      {/* Content Container - Responsive */}
      <div className='w-full sm:w-auto p-2 transition-colors duration-300 border-l border-gray-200 '>
        <h6 className='font-bold text-sm sm:text-base lg:text-lg text-center sm:text-left transition-colors duration-300'>
          {heading}
        </h6>
        <span className='text-[#707070] text-xs sm:text-sm lg:text-base block text-center sm:text-left mt-1 sm:mt-2 leading-relaxed'>
          {paragraph}
        </span>
      </div>
    </div>
  )
}

export default Service
