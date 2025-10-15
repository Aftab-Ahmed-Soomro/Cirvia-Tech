export default function Device() {
  return (
    <div className="p-4 sm:p-6 md:p-8 mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Badge */}
        <div className="mb-6 sm:mb-8 flex justify-center md:justify-start">
          <span className="inline-block text-[#4F7EFF] px-4 py-2 border-2 border-[#4F7EFF] rounded-full text-xs sm:text-sm font-medium">
            ABOUT THE DEVICE
          </span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:gap-12 lg:gap-6 justify-between">
          {/* Heading */}
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold leading-tight mb-6 md:mb-8 max-w-full md:max-w-[750px] text-center md:text-left">
            Experience The Future In Your Hands With Our Newest{" "}
            <span className="inline-flex items-center justify-center p-2 w-8 h-8 sm:w-12 sm:h-12 bg-orange-400 rounded-lg mx-1 align-middle">
              <img
                className=""
                src="/assets/imgs/shield.png"
                alt="Shield"
              />
            </span>{" "}
            Mobile Device. Combining{" "}
            <span className="inline-flex items-center justify-center p-2 w-8 h-8 sm:w-12 sm:h-12 bg-green-400 rounded-lg mx-1 align-middle">
              <img
                className=""
                src="/assets/imgs/power.png"
                alt="Power"
              />
            </span>{" "}
            Sleek Design With Peak Powerful Performance.
          </h1>

          {/* Signature */}
          <div className="flex w-full md:w-auto md:items-end justify-center mb-4 md:mb-0 pr-10">
            <div className="text-center md:text-right">
              <img
                src="/assets/imgs/signature.png"
                alt="Emma White Signature"
                className="mx-auto md:ml-auto md:mr-0 max-w-[130px] sm:max-w-[210px] mb-2"
              />
              <p className="text-xs sm:text-sm text-black">
                - Emma White, <span className="text-[#800080]">CEO</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
