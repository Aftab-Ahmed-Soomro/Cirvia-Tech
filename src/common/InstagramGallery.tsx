import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramGallery:React.FC = () => {
    const images = [
    {
      id: 1,
      url: "/assets/imgs/instagram.jpg",
      alt: "Wireless earbuds"
    },
    {
      id: 2,
      url: "/assets/imgs/instagram2.jpg",
      alt: "Headphones"
    },
    {
      id: 3,
      url: "/assets/imgs/instagram3.jpg",
      alt: "VR Headset"
    },
    {
      id: 4,
      url: "/assets/imgs/instagram4.jpg",
      alt: "Gaming headphones"
    },
    {
      id: 5,
      url: "/assets/imgs/instagram5.jpg",
      alt: "Black headphones"
    }
  ];
  return (
    <>
    <div className="w-full bg-white pt-8 sm:pt-12 md:pt-16  px-6">
      <div className="max-w-6xl m-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-light text-[#45652F] tracking-wider uppercase mb-2">
            INSTAGRAM
          </p>
          <h2 className="ttext-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold text-black">
            Follow Us on Instagram @Criviatech
          </h2>
        </div>
        </div>
    </div>

        {/* Instagram Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-0">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <Instagram 
                  className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100"
                  strokeWidth={1.5}
                />
              </div>

              {/* Instagram Icon Badge - Show on middle image */}
              {index === 3 && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10">
                  <Instagram className="w-8 h-8 text-black" strokeWidth={1.5} />
                </div>
              )}
            </div>
          ))}
        </div>
      </>
  );
}

export default InstagramGallery
