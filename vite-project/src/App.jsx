import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] = useState("lavender")

  return (
    <div className={`h-screen w-screen flex flex-col items-center justify-center duration-500`} style={{ backgroundColor: color }}>
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-4xl shadow-xl text-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Change Background Color
          </h1>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => setColor("skyblue")} 
              className=" px-6 py-2 text-gray-800 font-medium  shadow-md"
              style={{ backgroundColor: 'skyblue' }}
            >
              Sky Blue
            </button>

            <button 
              onClick={() => setColor("green")} 
              className="px-6 py-2  text-gray-800 font-medium shadow-md"
              style={{ backgroundColor: 'green' }}
            >
              Green
            </button>

            <button 
              onClick={() => setColor("orange")} 
              className="px-6 py-2 text-gray-800 font-medium  shadow-md"
              style={{ backgroundColor: 'orange' }}
            >
              Orange
            </button>

            <button 
              onClick={() => setColor("pink")} 
              className="px-6 py-2 text-gray-800 font-medium  shadow-md"
              style={{ backgroundColor: 'pink'}}
            >
              Pink
            </button>

            <button 
              onClick={() => setColor("lavender")} 
              className="px-6 py-2 text-white-700 font-medium  shadow-md"
            >
              Reset
            </button>
          </div>
        </div>
    </div>
  )
}

export default App
