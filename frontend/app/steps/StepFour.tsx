import React from "react";

const StepFour = () => {
  return (
    <div
      className="bg-383838 max-w-7xl pb-20 scroll-mt-50 px-4 sm:px-6"
      id="step4"
    >
      <div className="text-white pt-6 sm:pt-10">
        <h2 className="text-base sm:text-xl text-gray-400 font-normal mb-2 sm:mb-4">
          Step 4
        </h2>
        <h3 className="text-2xl sm:text-3xl font-medium mb-6">
          Tagging and Categorization
        </h3>
      </div>

      <div className="flex flex-col items-center justify-center text-center mt-10 sm:mt-16">
        {/* Circular Loader */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72">
          {/* Background Circle */}
          <div className="absolute inset-0 rounded-full border-8 border-gray-800 flex items-center justify-center">
            <div className="w-4/5 h-1/3 blur-3xl mix-blend-screen bg-[#9164FF46]"></div>
          </div>

          {/* Animated Circle */}
          <svg
            className="absolute inset-0 w-full h-full transform -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="#10B981"
              strokeWidth="3"
              strokeDasharray="360"
              strokeDashoffset="360"
              className="circle-animation"
            />
          </svg>

          {/* Text Inside Circle */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <h1 className="text-2xl sm:text-4xl font-bold leading-snug tracking-tight">
              WE&apos;RE <br />
              BUILDING <br />
              YOUR <span className="text-white font-extrabold">DNA</span>
            </h1>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-6 max-w-xs sm:max-w-md">
          Your DNA will be ready in a few minutes. We&apos;ll inform you once
          it&apos;s ready. You can use the studio meanwhile.
        </p>
      </div>
    </div>
  );
};

export default StepFour;
