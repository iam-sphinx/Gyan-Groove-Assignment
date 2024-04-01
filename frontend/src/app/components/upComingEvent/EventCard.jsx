import { MapPinIcon } from "@heroicons/react/16/solid";
import moment from "moment";
import Image from "next/image";
import React from "react";

const EventCard = ({
  eventName,
  cityName,
  date,
  weather,
  distanceKm,
  imgUrl,
}) => {
  const formattedDate = moment(date).format("MMMM DD, YYYY");
  const formattedKm = distanceKm.split(".")[0];
  const imgId = imgUrl.split("/")[5];

  return (
    <div className="h-80 sm:w-96 w-full border border-[#f3f3f3] rounded-lg p-4  flex flex-col justify-between">
      <div className="w-full h-52 rounded-lg relative overflow-hidden">
        <Image
          loader={() => imgUrl}
          unoptimized
          src={`https://drive.google.com/thumbnail?id=${imgId}&sz=w1000`}
          alt=""
          className="size-full object-cover scale-125"
          fill={true}
        />
        <div className="absolute w-full bottom-0 h-12 bg-[#00000080] flex items-center px-6">
          <h1 className="text-white font-medium">{formattedDate}</h1>
        </div>
      </div>

      <div>
        <h1 className="text-[#2f2f2f] font-semibold">{eventName}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[#988f8f]">
            <MapPinIcon className="h-5" />
            <span className="text-sm">{cityName}</span>
          </div>
          <span className="text-sm text-[#988f8f]">
            {weather} | {formattedKm} km
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
