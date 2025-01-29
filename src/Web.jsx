import { useState } from 'react'
import mob from './assets/mob-pr.jpg'
import './App.css'

function App() {
  const [activeMobile, setactiveMobile] = useState("about");
  const [activeButton, setActiveButton] = useState("a"); // Default to "a"
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='portfolio'>
      <div className="mobile-view">
      <header>
        <nav class="navbar">
          <h2>Portfolio</h2>
          <input type="checkbox" id="bar"/>
          <label for="bar"> 
            <img width="48" height="48" src="https://img.icons8.com/small/48/d4af37/menu.png" alt="menu"/>
          </label>
          <ul>
          <li>
            <button onClick={() => setActiveSection("about")}>About</button>
          </li>
          <li>
            <button onClick={() => setActiveSection("skills")}>Skills</button>
          </li>
          <li>
            <button onClick={() => setActiveSection("works")}>Works</button>
          </li>
          <li>
            <button onClick={() => setActiveSection("contact")}>Contact Me</button>
          </li>
          </ul>
        </nav>
      </header>

      <main>

      </main>
        <div className="left-side-mobile">
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
        <div className="About-mobile">
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
        <div className="Skills-mobile">
        <div className="skill-mob">
          <h1>Skills</h1>
          <div className="Techn-mob" style={{textAlign:'center'}}>
            <h2>Technical Skills</h2>
              <div className="tsm">
                <div className="tsmi">Website Development</div>
                <div className="tsmi">Website Designing</div>
                <div className="tsmi">Front-end Design</div>
                <div className="tsmi">Front-end Development</div>
                <div className="tsmi">UX/UI Design</div>
                <div className="tsmi">Web App Systems Design</div>
                <div className="tsmi">Systems Assessment </div>
                <div className="tsmi">Troubleshooting Skills</div>
              </div>
            <h2>Core Competencies</h2>
              <div className="tsm">
                <div className="tsmi">Keen Attention to Detail</div>
                <div className="tsmi">Proactive and Highly Motivated</div>
                <div className="tsmi">Proficient in Problem-Solving and Debugging</div>
                <div className="tsmi">Effective in Communication</div>
                <div className="tsmi">Evaluative Thinking Skills</div>
                <div className="tsmi">Strong Time Management</div>
              </div>
          </div>
        </div>
        </div> 
      </div>
      <div className="pc-view">
        
      </div>
    </div>
  )


};

export default App
