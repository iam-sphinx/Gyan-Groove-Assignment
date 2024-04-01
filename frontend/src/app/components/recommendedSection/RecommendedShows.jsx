"use client";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import React from "react";
import RecommendedCard from "./RecommendedCard";
import { useQuery } from "@tanstack/react-query";

const RecommendedShows = () => {
  const { data } = useQuery({
    queryKey: ["recommended"],
    queryFn: () =>
      fetch(
        "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
      ).then((res) => res.json()),
  });

  return (
    <div className="relative sm:h-64 h-36">
      <div className="w-full absolute bottom-20 px-6">
        <header className="flex items-center justify-between mb-4">
          <button className="flex items-center gap-2 sm:pl-32">
            <h1 className=" text-white font-semibold">Recommended Shows</h1>
            <ArrowLongRightIcon className="h-6 text-white" />
          </button>
          <button className="text-white underline underline-offset-2">
            see all
          </button>
        </header>
        <div className="w-full overflow-scroll sm:pl-32 flex gap-6 scrollbar-hide">
          {data?.events?.map((item, idx) => {
            return <RecommendedCard {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RecommendedShows;
