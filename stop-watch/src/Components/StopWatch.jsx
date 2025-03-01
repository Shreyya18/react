import React from "react";
import Timer from "./Timer";
import ControlButton from "./ControlButton";

const StopWatch = () => {
  const[isActive,setIsActive]=React.useState(false);
  const[isPaused,setIsPaused]=React.useState(false);
  const[time,setTime]=React.useState(0);

  const handleStart=()=>{
    setIsActive(true);

  }

  const handleReset=()=>{
    setIsActive(false);
    setTime(0);
  }
  const handlePause=()=>{
    setIsPaused(!isPaused);

  }

  React.useEffect(()=> {
    let intervalId;
    if(isActive && !isPaused){
      intervalId=setInterval(()=>{
        setTime((time)=>time+1);
      },10);
    }
    else{
      clearInterval(intervalId);
    }
    return ()=>clearInterval(intervalId);
  },[isActive,isPaused] );


  return (
    <div className="min-h-screen w-full flex flex-col items-center  m-12 bg-white text-black mx-auto  ">
      <h1 className="m-4 text-3xl font-bold text-red-700">Stop Watch</h1>
      <Timer times={{time}} />
      <ControlButton active={isActive} onStart={handleStart} onReset={handleReset} onPause={handlePause} pause={isPaused}/>
    </div>
  );
};

export default StopWatch;
