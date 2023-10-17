"use client";

import Banner from "./banner";
import BottomPlayer from "./bottom-player";
import Ipod from "./ipod";
import TrackList from "./track-list";

const MainContent = () => {
  return (
    <div className="w-full relative h-screen col-span-12 lg:col-span-10 bg-[#f4f4f4] rounded-l-3xl shadow-md overflow-hidden">
      <Banner />
      <div className="flex flex-col justify-center">
        <Ipod />
      </div>

      <TrackList />
      <BottomPlayer />
    </div>
  );
};

export default MainContent;
