import { navList } from "@/app/utils/navlist_config";
import { Bars3Icon, ChevronRightIcon, HeartIcon, MagnifyingGlassIcon, MapPinIcon, UserIcon } from "@heroicons/react/16/solid";
import React from "react";

const Navbar = () => {
  return (
    <nav className="px-6 mb-4">
      {/* Windows View */}
      <div className="sm:py-3 py-1 flex justify-between items-center">
        <h1 className="text-[#CF2D2D] font-bold text-lg flex-1">BookUsNow</h1>

        <div className="gap-3 flex-1 justify-center hidden sm:flex">
          <button className="bg-[#1e2022] h-8 hover:bg-[#3c3c3d] text-white font-bold  px-4 rounded flex items-center gap-1">
            <Bars3Icon className="h-4" />
            <span className="text-xs">Categories</span>
          </button>

          <div className="w-96 h-8 ring-1 ring-[#dadee0] rounded-md flex items-center justify-between px-3 text-[#dadee0] ">
            <input
              className="w-full h-full text-ellipsis text-[#a5a7a9] text-sm"
              placeholder="DJI Phantom"
            />
            <MagnifyingGlassIcon className="h-6" />
          </div>
        </div>

        <div className=" gap-3 flex-1 justify-end hidden sm:flex">
          <button className="bg-transparent text-[#8b8e92] text-xs font-semibold h-8 px-4 border border-[#f3f6f6] hover:border-transparent rounded flex items-center gap-1">
            <HeartIcon className="h-4" />
            Favorites
          </button>
          <button className="bg-transparent text-[#8b8e92] text-xs font-semibold h-8 px-4 border border-[#f3f6f6] hover:border-transparent rounded">
            Sign In
          </button>
        </div>

        {/* Mobile icons */}
        <div className="flex sm:hidden gap-3">
          <HeartIcon className="h-4 text-[#8b8e92] cursor-pointer" />
          <MagnifyingGlassIcon className="h-4 text-[#8b8e92] cursor-pointer" />
          <UserIcon className="h-4 text-[#8b8e92]" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <span className="flex items-center flex-1 ">
          <MapPinIcon className="h-3 text-[#b2bac0]" />
          <span className="text-xs text-[#85888c] ">Mumbai, India</span>
          <ChevronRightIcon className="h-3 text-[#b2bac0]" />
        </span>

        <ul className="flex sm:gap-4 gap-6 text-xs text-[#85888c]  py-2 sm:p-0 justify-center text-nowrap overflow-scroll sm:overflow-hidden w-full sm:w-auto pl-24">
          {navList.map((item, idx) => {
            return (
              <li key={idx} className="cursor-pointer">
                {item}
              </li>
            );
          })}
        </ul>
        <div className="flex-1"></div>
      </div>
    </nav>
  );
};

export default Navbar;
