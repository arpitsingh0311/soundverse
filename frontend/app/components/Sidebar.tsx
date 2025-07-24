"use client";
import { Home, Search, Library, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import soundverse from "../assests/soundverse.webp";
import plus from "../assests/plus.png";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: Search, label: "Explore" },
  { icon: Library, label: "Library" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      {/* Hamburger Menu for Mobile */}
      <div className="sm:hidden flex justify-between items-center p-4 bg-black fixed top-0 left-0 right-0 z-50">
        <img src={soundverse.src} alt="Soundverse" className="w-8" />
        <Menu
          onClick={() => setIsOpen(!isOpen)}
          className="text-white"
          size={28}
        />
      </div>

      {/* Sidebar (Desktop) */}
      <aside className="hidden sm:flex fixed sm:left-0 sm:top-0 sm:h-screen sm:w-16 sm:flex-col sm:space-y-8 bg-black p-6 items-center z-50">
        {/* Soundverse Logo */}
        <div className="relative group sm:self-center">
          <img
            className="sm:w-10 w-8 lg:scale-150 sm:scale-150"
            src={soundverse.src}
            alt="Soundverse Logo"
          />
        </div>

        <div className="relative group sm:self-center">
          <img
            className="text-white cursor-pointer hover:text-[#1db954] w-6 sm:w-8 lg:scale-150 sm:scale-150"
            src={plus.src}
            alt="Add Icon"
          />
          <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-white text-black text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50"></span>
        </div>

        {/* Navigation Icons */}
        {navItems.map(({ icon: Icon, label }, idx) =>
          label === "Home" ? (
            <div key={idx} className="relative group">
              <Link href="/">
                <Icon
                  className="text-white cursor-pointer hover:text-[#1db954]"
                  size={20}
                />
              </Link>
              <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-white text-black text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
                {label}
              </span>
            </div>
          ) : (
            <div key={idx} className="relative group">
              <Icon
                className="text-white cursor-pointer hover:text-[#1db954]"
                size={20}
              />
              <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-white text-black text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
                {label}
              </span>
            </div>
          )
        )}

        <div className="text-white bg-[#1c1e1f] text-base sm:text-xl p-2 rounded-lg font-bold sm:mb-4 hidden sm:block">
          <p>DNA</p>
        </div>
      </aside>

      {/* Mobile Sidebar Drawer */}
      {isOpen && (
        <div className="sm:hidden fixed top-14 left-0 w-full bg-black z-40 flex flex-col space-y-4 p-6 shadow-lg border-t border-gray-700">
          {navItems.map(({ icon: Icon, label }, idx) => (
            <div key={idx} className="flex items-center gap-3">
              {label === "Home" ? (
                <Link href="/" className="flex items-center gap-3">
                  <Icon className="text-white" size={20} />
                  <span className="text-white text-sm">{label}</span>
                </Link>
              ) : (
                <>
                  <Icon className="text-white" size={20} />
                  <span className="text-white text-sm">{label}</span>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Sidebar;
