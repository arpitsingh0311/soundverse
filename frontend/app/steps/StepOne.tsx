"use client";
import React, { useState } from "react";
import { Howl } from "howler";
import vector from "../assests/vector.svg";

const StepOne = () => {
  const [fileName, setFileName] = useState("");
  const [sound, setSound] = useState<Howl | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    const fileUrl = URL.createObjectURL(file);

    const newSound = new Howl({
      src: [fileUrl],
      format: ["mp3", "wav", "ogg", "flac"],
      html5: true,
    });

    setSound(newSound);
  };

  const playAudio = () => {
    if (sound) {
      sound.play();
    }
  };

  return (
    <section
      className="bg-383838 lg:w-4xl scroll-mt-60"
      id="step1"
    >
      <div className="text-white p-6">
        <h2 className="text-xl text-gray-400 font-sm mb-4">Step 1</h2>
        <h3 className="text-3xl font-md mb-6">Upload Audio</h3>

        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 sm:p-10 text-center shadow-xl">
          <input
            type="file"
            accept=".mp3,.wav,.aac,.ogg,.flac"
            className="hidden"
            id="audio-upload"
            onChange={handleFileUpload}
          />

          <label htmlFor="audio-upload" className="cursor-pointer block">
            <img
              className="opacity-30 h-16 sm:h-20 mx-auto pb-5 mt-6"
              src={vector.src}
              alt=""
            />
            <div className="text-gray-100 font-semibold text-lg sm:text-xl">
              Choose audio file(s) or drag it here
            </div>
            <div className="text-gray-400 mb-4 text-sm">
              Supported formats: .mp3, .wav, .aac, .ogg, .flac
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 my-5 rounded-lg hover:bg-purple-700 transition">
              Upload audio file(s)
            </button>
          </label>

          {fileName && (
            <div className="mt-4">
              <p className="text-sm text-gray-400 break-all">
                Uploaded: {fileName}
              </p>
              <button
                onClick={playAudio}
                className="mt-2 text-sm text-purple-400 hover:text-purple-300 underline"
              >
                ▶ Play Preview
              </button>
            </div>
          )}

          <p className="text-xs text-gray-600 mt-6">
            By uploading files, you agree that you have the ownership and
            authority to upload them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StepOne;
