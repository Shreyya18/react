import React from 'react'

const ControlButton = ({active,onStart,onPause,pause, onReset}) => {

  const StartButton= (
    <div>
        <button className='mt-20 px-4 py-1 rounded-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer' onClick={onStart}>Start</button>
    </div>
  );
  const ActiveButtons=(
    <div className='flex space-x-2'>
      <button className='mt-20 bg-red-500 cursor-pointer hover:bg-red-700 px-4 py-1 text-white rounded w-24' onClick={onReset}>Reset</button>
      <button className='mt-20 bg-red-500 cursor-pointer hover:bg-red-700 px-4 py-1 text-white rounded w-24' onClick={onPause}>{pause?"Resume":"Pause"}</button>
    </div>
  );
  
  return(
    <div>{active ? ActiveButtons:StartButton}</div>
  )
}

export default ControlButton;