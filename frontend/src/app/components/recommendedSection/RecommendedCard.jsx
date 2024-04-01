import { MapPinIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";
import moment from "moment";

const RecommendedCard = ({
  cityName,
  eventName,
  date,
  distanceKm,
  imgUrl,
  weather,
}) => {
  const formattedDate = moment(date).format("MMMM DD, YYYY");
  const formattedKm = distanceKm.split(".")[0];
  const imgId = imgUrl.split("/")[5];

  return (
    <div className="h-80 w-60 flex-shrink-0 rounded-lg bg-black relative overflow-hidden">
      <Image
        loader={() => imgUrl}
        unoptimized
        src={`https://drive.google.com/thumbnail?id=${imgId}&sz=w1000`}
        alt=""
        className="size-full object-cover scale-125"
        fill={true}
      />
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#00000070] from-80% to-100% "></div>
      <footer className="absolute bottom-0 w-full p-3 flex items-end justify-between gap-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-sm">{eventName}</h1>
          <span className="text-[#989090] text-xs flex items-end">
            <MapPinIcon className="h-4" />{" "}
            <span className="text-[#73757a] text-nowrap">{cityName}</span>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#989090] text-sm">{formattedDate}</h1>
          <span className="text-[#989090] text-xs ">
            {weather} | {formattedKm} km
          </span>
        </div>
      </footer>
    </div>
  );
};

export default RecommendedCard;
