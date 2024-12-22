import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyButton from './MyButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyButton />
    <MyButton/>
  </StrictMode>,
)
