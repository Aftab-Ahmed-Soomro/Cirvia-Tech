import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";
import "swiper/swiper-bundle.css";
import Button1 from "../../common/Button1";

const Cirvia: React.FC = () => {
  const slides = [
    {
      id: 1,
      bg: "/assets/imgs/Group10.png",
      title: "Shop Trending Products - Delivered to Your Doorstep",
      subtitle: "Welcome To Cirvia Tech",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 2,
      bg: "/assets/imgs/Group10.png",
      title: "Innovative Tech Solutions For Modern Businesses",
      subtitle: "Empower Your Brand",
      text: "Discover the future of technology with Cirvia Tech. We bring top-quality, reliable, and affordable products directly to your business.",
    },
    {
      id: 3,
      bg: "/assets/imgs/Group10.png",
      title: "Your One-Stop Shop for Cutting-Edge Devices",
      subtitle: "Smart. Simple. Seamless.",
      text: "Get access to the latest electronics, gadgets, and smart home products — all in one place with Cirvia Tech.",
    },
  ];

  // Create refs for navigation buttons
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={
          {
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          } as NavigationOptions
        } // ✅ explicitly typed
        onInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="hero-swiper w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="bg-left bg-no-repeat bg-cover lg:h-[600px] h-[400px] flex"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <div className="w-full text-white max-w-7xl px-18 m-auto py-8 flex">
                <div className="max-w-2xl">
                  <p className="text-sm sm:text-base mb-2 uppercase">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold mb-4 leading-tight">
                    {slide.title.split(" - ")[0]} <br />{" "}
                    {slide.title.split(" - ")[1]}
                  </h1>
                  <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                    {slide.text}
                  </p>
                  <Button1 name="Request a Quote" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className="hero-prev absolute left-4 top-1/2 -translate-y-1/2 z-10"
        >
          <img
            src="/assets/imgs/arrow-left.svg"
            alt="Previous"
            className="w-5 h-5"
          />
        </button>

        <button
          ref={nextRef}
          className="hero-next absolute right-4 top-1/2 -translate-y-1/2 z-10"
        >
          <img
            src="/assets/imgs/arrow-right.svg"
            alt="Next"
            className="w-5 h-5"
          />
        </button>
      </Swiper>
  );
};

export default Cirvia;
