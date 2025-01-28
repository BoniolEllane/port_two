import { useState } from 'react'
import mob from './assets/mob-pr.jpg'
import './App.css'

function App() {
    const [activeButton, setActiveButton] = useState("a"); // Default to "a"
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='portfolio'>
      <div className="mobile-view">
        {/* <div className="menu-container">
        <button className="hamburger-button" onClick={toggleMenu} aria-label="Toggle menu">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
        {isOpen && (
          <div className="menu">
            <ul>
              <li>About</li>
              <li>Works</li>
              <li>Contact Me</li>
            </ul>
          </div>
        )}
        </div> */}
        <div className="About">
          <div className="left-side">
            <div className="image-cont">
              <img src={mob}></img>
            </div>
            <div>
              <h1>ELLANE LEE O.BONIOL</h1>
                <div className="left-soc">
                <button className="left-soc-items">
                <img width="48" height="48" src="https://img.icons8.com/ios-filled/100/d4af37/linkedin.png" alt="linkedin"/>
                </button>
                <button className="left-soc-items">
                <img width="48" height="48" src="https://img.icons8.com/ios-glyphs/60/d4af37/github.png" alt="github"/>
                </button>
                <button className="left-soc-items">
                <img width="48" height="48" src="https://img.icons8.com/material-rounded/96/d4af37/phone--v1.png" alt="phone--v1"/>
                </button>
                </div>
                <div className="left-info">
                <div className="left-info-details">
                  <img width="48" height="48" src="https://img.icons8.com/forma-thin/72/d4af37/phone.png" alt="phone"/>
                  <div style={{lineHeight:'0.8em'}}>
                  <p style={{margin:'0.5em', display:'flex'}}>Phone</p>
                  <p style={{margin:'0.5em, 0em', display:'flex'}}>+63935-878-4136</p>
                  </div>
                </div>
                <div className="left-info-details">
                <img width="48" height="48" src="https://img.icons8.com/forma-thin/72/d4af37/marker.png" alt="marker"/>
                  <div style={{lineHeight:'0.8em'}}>
                  <p style={{margin:'0.5em', display:'flex'}}>Address</p>
                  <p style={{margin:'0.5em', display:'flex'}}>SJDM City of Bulacan</p>
                  </div>
                </div>
                <div className="left-info-details">
                <img width="48" height="48" src="https://img.icons8.com/forma-thin/48/d4af37/baby-calendar.png" alt="baby-calendar"/>
                  <div style={{lineHeight:'1em'}}>
                  <p style={{margin:'0.5em', display:'flex'}}>Birthday</p>
                  <p style={{margin:'0.5em', display:'flex'}}>October 29, 2001</p>
                  </div>
                </div>
                <div className="left-info-details">
                <img width="48" height="48" src="https://img.icons8.com/forma-thin/48/d4af37/secured-letter.png" alt="secured-letter"/>
                  <div style={{lineHeight:'1em'}}>
                  <p style={{margin:'0.5em', display:'flex'}}>Email Address</p>
                  <p style={{margin:'0.5em', display:'flex'}}>boniol.ellane@gmail.com</p>
                  </div>
                </div>
              </div>
              <button style={{margin:'1em 0em -0.5em'}}>Download CV</button>
            </div>

          </div>
          <div className="about-me">
            <h1>ABOUT ME </h1>
            <p style={{textAlign:'justify'}}>Computer Science graduate seeking a dynamic role as an IT Specialist and Web Developer within a large organization. 
              Bringing comprehensive expertise in user interface design, web development, information management, and systems 
              evaluation, with a demonstrated ability to improve operational processes. Highly skilled in WordPress, 
              ReactJS, CSS, Bootstrap, network infrastructure, hardware troubleshooting, a background with game development 
              and design, with a strong ability to work collaboratively within multidisciplinary teams.</p>
            
            <h1>WHAT I DO</h1>
            <div className="service-cards">
              <div className="service-cards-items">
              <img width="48" height="48" src="https://img.icons8.com/external-phatplus-lineal-phatplus/48/d4af37/external-support-authentication-phatplus-lineal-phatplus-2.png" alt="external-support-authentication-phatplus-lineal-phatplus-2"/>
                <div>
                  <h3 style={{textAlign:'center'}}>Website Development</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                </div>
              </div>
              <div className="service-cards-items">
              <img width="48" height="48" src="https://img.icons8.com/dotty/48/d4af37/code--v2.png" alt="code--v2"/>
                <div>
                  <h3 style={{textAlign:'center'}}>Programming Skills</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                </div>
              </div>
              <div className="service-cards-items">
              <img width="48" height="48" src="https://img.icons8.com/ios/48/d4af37/design--v1.png" alt="design--v1"/>
                <div>
                  <h3 style={{textAlign:'center'}}>Websites and App Designing</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                </div>
              </div>
              <div className="service-cards-items">
              <img width="48" height="48" src="https://img.icons8.com/ios/48/d4af37/support.png" alt="support"/>
                <div>
                  <h3 style={{textAlign:'center'}}>Technical Support</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Works">
        
        </div> 
     
      </div>
      <div className="pc-view">
        
      </div>
    </div>
  )


};

export default App
