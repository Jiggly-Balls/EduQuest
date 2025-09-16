// import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1 className="Title">EduQuest</h1>
      <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="my-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#755697ff" />
            <stop offset="100%" stop-color="#617aa5ff" />
          </linearGradient>
        </defs>

        <path fill="url(#my-gradient)"  fill-opacity="1" d="M0,32L26.7,37.3C53.3,43,107,53,160,90.7C213.3,128,267,192,320,197.3C373.3,203,427,149,480,122.7C533.3,96,587,96,640,96C693.3,96,747,96,800,117.3C853.3,139,907,181,960,202.7C1013.3,224,1067,224,1120,208C1173.3,192,1227,160,1280,154.7C1333.3,149,1387,171,1413,181.3L1440,192L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z">
        </path>
      </svg>
      
    </div>
  )
}

export default App
