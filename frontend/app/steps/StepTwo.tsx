"use client";

import { useState } from "react";

const StepTwo = () => {
  const [sensitivity, setSensitivity] = useState(5);

  return (
    <div className="max-w-4xl scroll-mt-[210px]" id="step2">
      <div className="text-white p-6">
        <h2 className="text-xl text-gray-400 font-medium mb-4">Step 2</h2>
        <h3 className="text-3xl font-semibold mb-6">DNA Sensitivity</h3>
        <div className="bg-[#0b0b0b] border border-zinc-700 rounded-xl p-10 shadow-xl">
          <h1 className="text-2xl mb-2">
            Set the level of sensitivity for the DNA creation
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            Less sensitivity will result in less number of DNAs, higher
            sensitivity will result in many niche DNAs.
          </p>

          <div className="flex flex-col items-center space-y-4">
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={sensitivity}
              onChange={(e) => setSensitivity(Number(e.target.value))}
              className="w-[90%] appearance-none h-0.5 bg-[#767575] rounded-md mb-6
                [&::-webkit-slider-thumb]:appearance-none 
                [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 
                [&::-webkit-slider-thumb]:rounded-full 
                [&::-webkit-slider-thumb]:bg-white"
            />

            <div className="w-full flex justify-between text-[11px] text-gray-400">
              <span className="text-left">
                Least Sensitive
                <br />
                (Generic Genre DNAs)
              </span>
              <span className="text-center -translate-x-4">Recommended</span>
              <span className="text-right">
                Highly Sensitive
                <br />
                (Niche Genre DNAs)
              </span>
            </div>

            <p className="text-sm text-gray-300">
              Sensitivity Level: {sensitivity}/10
            </p>

            <div className="flex gap-4 mt-6">
              <button
                type="submit"
                className="bg-[#007d49] hover:bg-[#007d4995] px-8 py-4 font-medium rounded-full z-10 hover:scale-105 transition-all duration-500 ease-in-out"
              >
                Set Sensitivity
              </button>
              <button type="submit" className="text-white hover:underline">
                Skip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
