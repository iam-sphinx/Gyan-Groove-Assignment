import React from "react";
import banner from "../../images/Banner.svg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full h-[600px] sm:size-auto relative">
      <Image
        src={banner}
        alt=""
        className="size-full object-cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-[#00000040]"></div>
      <div className="absolute w-full px-20 sm:px-80 sm:left-[50%] sm:top-[50%] left-[50%] top-[20%] -translate-x-[50%] -translate-y-[50%] flex flex-col gap-3 items-center justify-center">
        <h1 className="text-xl sm:text-5xl sm:font-semibold text-white w-full text-center leading-[2rem] sm:leading-[5rem]">
          Discover Exciting Events Happening Near You - Stay Tuned for Updates
        </h1>
        <p className="text-base sm:px-24 px-0 tracking-wide font-medium text-[#989090] text-center line-clamp-3 sm:line-clamp-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          delectus vero, sint laboriosam, placeat animi provident itaque earum
          vitae sit doloribus. Laborum minus
        </p>
      </div>
    </div>
  );
};

export default Banner;
