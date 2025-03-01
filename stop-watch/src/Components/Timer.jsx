import React from 'react'

const Timer = () => {
    const[seconds,setSeconds]=React.useState("00");
    const[minutes,setMinutes]=React.useState("00");
    const[hours,setHours]=React.useState("00");
    return (
    <div>
        <p className='text-3xl'>{hours}:{minutes}:{seconds}</p>
    </div>
  )
}

export default Timer;