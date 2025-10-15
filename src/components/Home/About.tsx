import React from 'react'
import Button2 from '../../common/Button2';
import { FaCheck } from 'react-icons/fa6';

const About: React.FC = () => {

    const features = [
        { id: 1, text: "Nature's Goodness" },
        { id: 2, text: "Natural Remedies" },
        { id: 3, text: "Inspired By Nature" },
        { id: 4, text: "Nourishing Your Body" }
    ];

  return (
    <div className="py-8 sm:py-12 md:py-16 bg-gray-100 flex items-center justify-center   px-6   ">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden">
              <img
                src="/assets/imgs/wellness.png"
                alt="Wellness workspace"
                className="w-full min-h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-md text-black tracking-wider uppercase">
                About
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight font-semibold text-black leading-tight">
                Crafting Wellness with Nature's Finest Ingredients
              </h2>
              <p className="text-[#707070] text-sm leading-relaxed">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#800080] flex items-center justify-center">
                    <FaCheck className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#464646] text-base sm:text-lg leading-relaxed">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <Button2 name={"Read More"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
