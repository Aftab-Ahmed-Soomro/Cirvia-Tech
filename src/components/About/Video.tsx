import React from 'react'

const Video: React.FC = () => {
  return (
    <div className="w-full mb-12 px-8">
      <div className="flex justify-center">
        <img 
          className="
            w-full
            rounded-lg
            object-cover
            cursor-pointer
          "
          src="/assets/imgs/Video Block.png" 
          alt="Promotional Video"
        />
      </div>
    </div>
  );
}

export default Video
