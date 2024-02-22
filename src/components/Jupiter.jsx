import React from "react";
import bgVideo from "./assets/jupter-bg1.mp4";
import Navbar from "./components/Navbar";

const Jupiter = () => {
  return (
    <div>
      <div className="h-[700px] relative">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          className="fixed right-0 top-0 h-[700[px]] w-full object-cover z[-1]"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* <CosmoCast /> */}
        <Navbar />
      </div>
    </div>
  );
};

export default Jupiter;
