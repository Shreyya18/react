import React from 'react'
import './App.css'
import {useState,useEffect} from 'react'
const App = () => {
  const[text,setText]=React.useState('')
  const[word,setWord]=React.useState('')
  const [qrCode, setQrCode] = React.useState('');

  useEffect(() => {
    setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!`);
  }, [word]);


  const handleClick=()=>{
    setWord(text)
  }

  return (
    <div className='min-h-screen  '>
      <h1 className=' flex justify-center py-12 text-purple-800 font-bold text-3xl'>QR Code Generator</h1>
      <div className='flex justify-center '>
        <input type="text" placeholder='Enter text to encode' className='border-1 border-black-200 ' onChange={(e)=>{setText(e.target.value)} } />
        {/* <p>{text}</p> */}
        <button className='bg-green-500 p-1 rounded-r-sm hover:bg-green-700 text-white cursor-pointer'  onClick={handleClick} onKeyDown={(e)=>{if (e.key === 'Enter')handleClick}}>Generate</button>
      </div>
      <div className='flex  flex-col  items-center py-12 '>
        <img src={qrCode} alt="" />
        <a href={qrCode} download="qrCode.png">
      <button className='bg-green-500 p-1 rounded-sm text-white hover:bg-green-700 cursor-pointer m-12' >Download</button>
      </a>
      </div>
    </div>
  )
}

export default App