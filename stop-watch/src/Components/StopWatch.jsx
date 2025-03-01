import React from "react";
import Timer from "./Timer";
import ControlButton from "./ControlButton";

const StopWatch = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center  m-12 bg-black text-white mx-auto rounded-lg">
      <h1 className="m-4 text-3xl font-bold text-red-700">Stop Watch</h1>
      <Timer />
      <ControlButton />
    </div>
  );
};

export default StopWatch;
