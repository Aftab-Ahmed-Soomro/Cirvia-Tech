import React, { useState } from "react";
import Button1 from "./Button1";

const Subscribe:React.FC = () => {
    const [email, setEmail] = useState("");

  return (
    <div className="bg-[#800080] py-8 sm:py-10 md:py-12  px-6">
        <div className="max-w-6xl m-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Text */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold text-white text-center lg:text-left">
              Subscribe Our Newsletter.
            </h3>

            {/* Input Form */}
            <div className="w-full lg:w-auto">
              <div className="relative flex items-center rounded-full shadow-lg overflow-hidden w-full sm:min-w-[450px] border-[1px] border-white px-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-3 sm:py-4 text-sm text-white placeholder-gray-300 focus:outline-none"
                />
                <Button1 name={"Submit Now"} />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Subscribe
