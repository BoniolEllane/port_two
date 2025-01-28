import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [activeButton, setActiveButton] = useState("a"); // Default to "a"

  return (
    <div className='portfolio'>
    {/* main side */}
    <div className="left-side">
      {/* image */}
      <div className="image-cont">

      </div>

    </div>
    <div>
          {/* contents */}
          <button onClick={() => setActiveButton("a")}>About</button>
      <button onClick={() => setActiveButton("b")}>Skills</button>
      <button onClick={() => setActiveButton("c")}>Works</button>
      <button onClick={() => setActiveButton("d")}>Contacts</button>

      <div>
        {activeButton === "a" && 
        
        <div>
          <p>letter a</p>
          
        </div>}
        {activeButton === "b" && 
        
        <div>
          <p>letter b</p>
        </div>

        }
      </div>
    </div>
    </div>
  )


};

export default App
