"use client";
import React from "react";
import Topbar from "./Topbar";
import { useRouter } from "next/navigation";

const Start = () => {
  const router = useRouter();
  return (
    <div>
      <Topbar />
      <div className="bg-[#1a1a1a] text-white py-15 px-5 flex flex-col lg:px-20 justify-center">
        <div className="bg-[#00000052] flex flex-col w-full max-w-5xl p-6 sm:p-8 sm:pr-10 md:pr-20 lg:pr-40 rounded-lg shadow-lg">
          <h1 className="text-white text-2xl sm:text-3xl">
            Verify your creator identity → Unlock your DNA
          </h1>
          <p className="text-[#9f9f9f] pt-3 text-sm sm:text-base">
            Simply claim your profile, and we’ll build your DNA automatically.
            Are you a creator with music already on Spotify, Youtube etc?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-8">
            <button
              className="bg-[#007d49] hover:bg-[#007d4995] px-6 sm:px-10 py-3 sm:py-4 font-semibold rounded-full hover:scale-105 transition-all duration-500 ease-in-out"
              onClick={() => router.push("/dna")}
            >
              Claim your profile
            </button>
            <button className="bg-[#383838] px-6 sm:px-10 py-3 sm:py-4 font-semibold rounded-full hover:bg-[#38383895] hover:scale-105 transition-all duration-500 ease-in-out">
              This doesn't apply to me
            </button>
          </div>
        </div>

        <div className="bg-[#00000052] flex flex-col justify-center w-full max-w-5xl p-6 sm:p-8 sm:pr-10 md:pr-20 lg:pr-40 rounded-lg shadow-lg mt-10">
          <h1 className="text-white text-2xl sm:text-3xl">
            Build DNA by Uploading Audio Tracks
          </h1>
          <p className="text-[#9f9f9f] pt-3 text-sm sm:text-base">
            You can upload your music, and build your Sonic DNA. Please note
            that by default all DNAs remain private. <br />
            <span className="text-white">● Build with AI: </span>With this, AI
            will take care of captions, categorisations, tags. <br />
            <span className="text-white">● Build Manually: </span>You’ll have to
            manually add captions, categorisations and tags.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-8">
            <button
              className="bg-[#007d49] hover:bg-[#007d4995] px-6 sm:px-10 py-3 sm:py-4 font-semibold rounded-full hover:scale-105 transition-all duration-500 ease-in-out"
              onClick={() => router.push("/dna")}
            >
              Upload Audio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
