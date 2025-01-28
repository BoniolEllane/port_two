import { useState } from 'react'
import mob from './assets/mob-pr.jpg'
import './App.css'

function App() {
    const [activeButton, setActiveButton] = useState("a"); // Default to "a"

  return (
    <div className='portfolio'>
    <div className="left-side">
      <div className="image-cont">
        <img src={mob}></img>
      </div>
      <div>
        <h1>ELLANE LEE O.BONIOL</h1>
      </div>
    </div>          
    {/* contents */}
    {/* <div>

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
    </div> */}
    </div>
  )


};

export default App
