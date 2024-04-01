import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import loading from "../../images/loading.gif";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { queryClient } from "@/app/providers/QueryProvider";

const UpComingEvent = () => {
  const [page, setPage] = React.useState(1);
  const [savedData, setSavedData] = useState([]);
  const { ref, inView } = useInView();

  const fetchProjects = (page = 0) =>
    fetch(
      `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`
    ).then((res) => res.json());

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery({
      queryKey: ["upcomming", page],
      queryFn: () => fetchProjects(page),
      keepPreviousData: true,
    });

  useEffect(() => {
    if (data) {
      setSavedData((prevData) => [...prevData, ...data.events]);
    }
  }, [data]);

  useEffect(() => {
    if (inView) {
      setPage(page + 1);
    }
  }, [inView]);

  return (
    <div className="px-6">
      <header className="flex items-center justify-between">
        <button className="flex items-center gap-2 sm:pl-32">
          <h1 className=" text-[#1E2022] font-semibold">Upcoming events</h1>
          <ArrowLongRightIcon className="h-6 text-[#1E2022]" />
        </button>

        <button className="text-[#1E2022] underline underline-offset-2">
          see all
        </button>
      </header>

      <div className="sm:h-[700px] h-[640px] sm:w-[1400px] sm:pl-32 mb-64 overflow-scroll scrollbar-hide mt-12">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 overflow-hidden">
            {savedData.map((item, idx) => {
              return <EventCard key={idx} {...item} />;
            })}

            {page <= 4 && (
              <div
                ref={ref}
                className="col-span-3 flex items-center justify-center"
              >
                <Image src={loading} quality={100} className="h-auto" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpComingEvent;
