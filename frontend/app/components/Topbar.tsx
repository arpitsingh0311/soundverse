"use client";
import profile from "../assests/profile.jpg";
const Topbar = () => {
  return (
    <div className="relative bg-[#d9d9d920] text-white p-4 overflow-hidden w-full sm:pt-[150px] lg:pt-[0px]">
      {/* Background blur blob */}
      <div className="absolute blur-3xl mix-blend-screen bg-[#66abff26] w-1/3 h-full z-0" />

      {/* Profile Icon Section */}
      <div className="flex justify-end items-center pr-4 pt-1 z-10 pt-15 lg:pt-0">
        <img
          src={profile.src}
          className="w-10 h-10 rounded-full cursor-pointer"
          alt="Profile"
        />

        {/* Dropdown Menu */}
        <div className="absolute right-4 top-12 w-32 bg-white text-black text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
          <div className="p-2 hover:bg-gray-100 cursor-pointer">Profile</div>
          <div className="p-2 hover:bg-gray-100 cursor-pointer">Logout</div>
        </div>
      </div>

      {/* Title & Description Section */}
      <div className="pt-5 px-4 sm:pl-20 sm:pt-6 z-10">
        <p className="text-gray-100 text-xl sm:text-2xl font-medium">
          BUILD <span className="font-bold">DNA</span>
        </p>
        <p className="text-gray-400 text-sm sm:text-base mt-2">
          Build a DNA on Soundverse and earn passive income as your DNA is used
          by other creators.{" "}
          <span className="text-white underline">Learn more</span>
        </p>
      </div>
    </div>
  );
};

export default Topbar;
