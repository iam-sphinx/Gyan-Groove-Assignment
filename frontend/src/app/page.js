"use client";

import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import RecommendedShows from "./components/recommendedSection/RecommendedShows";
import UpComingEvent from "./components/upComingEvent/UpComingEvent";

export default function Page() {
  return (
    <main className="min-h-scren">
      <Navbar />
      <Banner />
      <RecommendedShows />
      <UpComingEvent />
    </main>
  );
}
