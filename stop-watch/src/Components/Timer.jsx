import React from 'react'

const Timer = ({times}) => {
 
    return (
    <div>
      <span >
                {("0" + Math.floor((times.time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {("0" + Math.floor((times.time / 100) % 60)).slice(-2)}:
            </span>
            <span  >
                {("0" + ((times.time / 1) % 100)).slice(-2)}
            </span>
    </div>
  )
}

export default Timer;