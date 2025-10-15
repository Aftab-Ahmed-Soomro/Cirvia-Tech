import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";
import "swiper/swiper-bundle.css";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Willie Bradley",
      role: "Founder",
      avatar: "/assets/imgs/profile1.png",
      rating: 5,
      title: "Praesent vestibulum congue tellus at fringilla.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      id: 2,
      name: "Wendy Rose",
      role: "Product Manager",
      avatar: "/assets/imgs/profile2.png",
      rating: 5,
      title: "Praesent vestibulum congue tellus at fringilla.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      id: 3,
      name: "Kate Petersonova",
      role: "Co-founder",
      avatar: "/assets/imgs/profile3.png",
      rating: 5,
      title: "Praesent vestibulum congue tellus at fringilla.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
      id: 4,
      name: "Kate Petersonova",
      role: "Co-founder",
      avatar: "/assets/imgs/profile3.png",
      rating: 5,
      title: "Praesent vestibulum congue tellus at fringilla.",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
  ];
  return (
      <div className="relative  px-6 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 py-8 sm:py-12 md:py-16 overflow-hidden">
        {/* Background Image/Overlay */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-6xl m-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm font-md text-black tracking-wider uppercase mb-2">
              TESTIMONIALS
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold text-white">
              What Our Customers Say
            </h2>
          </div>

          {/* Testimonials Grid */}
          {/* Swiper Slider */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  {/* Profile */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#88B44E80]"
                    />
                    <div>
                      <h4 className="font-semibold text-black">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-[#12121280]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-sm text-black mb-2">
                    {testimonial.title}
                  </h3>

                  {/* Text */}
                  <p className="text-sm text-[#6b6a6a] leading-relaxed mb-4">
                    {testimonial.text}
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-current"
                            : "text-black"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
  );
};

export default Testimonials;
