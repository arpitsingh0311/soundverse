"use client";
import Link from "next/link";
import StepFour from "../steps/StepFour";
import StepOne from "../steps/StepOne";
import StepThree from "../steps/StepThree";
import StepTwo from "../steps/StepTwo";
import profile from "../assests/profile.jpg";

export default function stepDNA() {
  return (
    <div className="w-full h-screen snap-y snap-mandatory scroll-smooth overflow-auto lg:mt-0 sm:mt-10 mt-15">
      <nav className="lg:sticky top-0 z-50 bg-[#1a1a1a]">
        <div className="relative bg-[#d9d9d920] text-white p-2 overflow-hidden">
          <div className="absolute blur-3xl mix-blend-screen bg-[#66abff26] w-1/3 h-full z-0"></div>
          
          {/* Profile icon */}
          <div className="flex justify-end items-center z-10">
            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
                alt="Profile"
                src={profile.src}
              />
              <div className="absolute right-0 mt-2 w-32 bg-white text-black text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
                <div className="p-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </div>
              </div>
            </div>
          </div>

          {/* Title & Description */}
          <div className="pt-5 px-4 sm:pl-20">
            <p className="text-gray-100 text-xl sm:text-2xl font-medium">
              Build DNA by Uploading Audio Tracks
            </p>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              You can upload your music, and build your DNA.
              <span className="text-white underline"> Learn more</span>
            </p>
          </div>

          {/* Step Buttons */}
          <div className="hidden lg:flex flex-wrap justify-between items-center gap-2 py-5 px-6 lg:px-20 z-50">
            <button className="bg-[#1b1b1b84] active:bg-[#007d49] hover:bg-[#007d49] px-6 py-3 sm:py-4 font-semibold rounded-full hover:scale-105 transition-all duration-500 ease-in-out z-50">
              <a href="#step1">Step 1: Upload Audio</a>
            </button>
            <button className="bg-[#1b1b1b84] active:bg-[#007d49] hover:bg-[#007d49] px-6  py-3 sm:py-4 font-semibold rounded-full hover:scale-105 transition-all duration-500 ease-in-out z-50">
              <a href="#step2">Step 2: DNA Sensitivity</a>
            </button>
            <button className="bg-[#1b1b1b84] active:bg-[#007d49] hover:bg-[#007d49] px-6 sm:px-10 py-3 sm:py-4 font-semibold rounded-full hover:scale-105 transition-all duration-500 ease-in-out">
              <a href="#step3">Step 3: Profile Creation</a>
            </button>
            <button className="bg-[#1b1b1b84] active:bg-[#007d49] hover:bg-[#007d49] px-6 sm:px-10 py-3 sm:py-4 font-semibold rounded-full hover:scale-105 transition-all duration-500 ease-in-out">
              <a href="#step4">Step 4: Tagging and Categorization</a>
            </button>
            <button className="bg-[#1b1b1b84] active:bg-[#007d49] hover:bg-[#007d49] px-6 sm:px-10 py-3 sm:py-4 font-semibold rounded-full hover:scale-105 transition-all duration-500 ease-in-out">
              Publish
            </button>
          </div>
        </div>
      </nav>

      {/* Steps Section */}
      <div className=" flex flex-col justify-center bg-[#1a1a1a] px-4 sm:px-16">
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
      </div>
    </div>
  );
}
