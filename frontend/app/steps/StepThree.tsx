"use client";
import { useRef, useState } from "react";

const StepThree = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full mx-auto scroll-mt-60" id="step3">
      <div className="text-white p-6">
        <h2 className="text-xl text-gray-400 font-medium mb-2">Step 3</h2>
        <h3 className="text-3xl font-semibold mb-6">Profile Creation</h3>

        <div className="bg-[#0b0b0b] border border-[#383838] max-w-6xl rounded-xl p-6 sm:p-10 shadow-xl">
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-[70%_30%] gap-6">
              {/* Left Section */}
              <div>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                    <label className="w-full sm:w-1/5 text-sm">
                      Creator Name
                    </label>
                    <input
                      type="text"
                      placeholder="Name such as Skrillex, Coldplay"
                      className="w-full sm:w-[40%] h-10 bg-zinc-800 rounded-full px-4 py-2 outline-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                    <label className="w-full sm:w-1/5 text-sm">
                      Description
                    </label>
                    <input
                      type="text"
                      placeholder="Upto 300 characters"
                      className="w-full sm:w-[65%] h-10 bg-zinc-800 rounded-full px-4 py-2 outline-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                    <label className="w-full sm:w-1/5 text-sm">Tags</label>
                    <button
                      type="button"
                      className="bg-zinc-700 text-lg mr-2 px-4 py-1 rounded-full"
                    >
                      +
                    </button>
                    {/* <div className="flex gap-2 items-center w-full">
                      <input
                        type="text"
                        placeholder="Enter tag"
                        className="flex-1 bg-zinc-800 rounded-full px-4 py-2 outline-none"
                      />
                    </div> */}
                  </div>

                  {[
                    {
                      label: "DNA Visibility",
                      options: ["Public", "Private", "Draft"],
                    },
                    {
                      label: "Price",
                      options: ["$9.99", "$8.99", "$7.99", "$6.99", "$5.99"],
                    },
                    {
                      label: "License",
                      options: [
                        "Distribution",
                        "Royalty Free",
                        "Sample",
                        "Sync",
                        "Full Ownership",
                      ],
                    },
                    { label: "Tracks", options: ["Visible", "Invisible"] },
                    { label: "Become Partner", options: ["Yes", "No"] },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4"
                    >
                      <label className="w-full sm:w-1/5 text-sm">
                        {item.label}
                      </label>
                      <select className="w-full sm:w-auto h-10 bg-zinc-800 rounded-full px-4 py-2 outline-none">
                        {item.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Section - Upload */}
              <div className="flex flex-col items-center justify-start gap-4 pt-6">
                <div className="w-40 h-40 bg-[#37373740] rounded-full flex items-center justify-center border border-zinc-700 relative z-4 overflow-hidden">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-[#373737] rounded-full flex items-center justify-center border border-zinc-700 z-10">
                      <span className="text-3xl font-bold text-white">+</span>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  className="bg-zinc-800 text-white px-4 py-2 rounded-full hover:bg-zinc-700 transition"
                  onClick={handleUploadClick}
                >
                  Upload Picture
                </button>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="bg-[#007d49] hover:bg-[#007d4995] text-white px-20 py-3 rounded-full transition hover:scale-105 duration-500 ease-in-out"
              >
                Done
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
