import { useState } from 'react'
import mob from './assets/mob-pr.jpg'
import './App.css'
import one from './assets/ongpin.jpg'
import two from './assets/filchi.jpg'
import three from './assets/gds.jpg'
import four from './assets/clear.jpg'
import five from './assets/ux.jpg'
import six from './assets/twl.jpg' 

const Web =()=>{
  const [activeMobile, setactiveMobile] = useState("about");
  const [activeButton, setActiveButton] = useState("a"); // Default to "a"
  const [isOpen, setIsOpen] = useState(false);

  const portfolioItems = [
    { img: one, text: "Ongpin Tower Website" },
    { img: two, text: "Merged Fil-Chi Job Fair 2024 Website" },
    { img: three, text: "GDS Booking System - Admin" },
    { img: four, text: "ClearPath Website" },
    { img: five, text: "UX/UI TUP Manila Website" },
    { img: six, text: "The Writhing Labyrinth" },
  ];

  const technicalSkills = [
    "Website Development","Website Designing","Front-end Design",
    "Front-end Development","UX/UI Design","Systems Assessment",
    "Troubleshooting Skills"
  ];
  
  const coreCompetencies = [
    "Keen Attention to Detail","Proactive and Highly Motivated",
    "Proficient in Problem-Solving and Debugging",
    "Effective in Communication","Evaluative Thinking Skills",
    "Strong Time Management"
  ];

  const techStack = [
    { name: "JavaScript", icon: "https://img.icons8.com/color/100/javascript--v1.png" },
    { name: "React Native", icon: "https://img.icons8.com/color/100/react-native.png" },
    { name: "HTML", icon: "https://img.icons8.com/color/100/html-5--v1.png" },
    { name: "Tailwind CSS", icon: "https://img.icons8.com/color/100/tailwind_css.png" },
    { name: "Bootstrap CSS", icon: "https://img.icons8.com/color/100/bootstrap--v2.png" },
    { name: "CSS", icon: "https://img.icons8.com/fluency/100/css3.png" },
    { name: "C++", icon: "https://img.icons8.com/color/100/c-plus-plus-logo.png" },
    { name: "Vite", icon: "https://img.icons8.com/fluency/96/vite.png" },
    { name: "NodeJS", icon: "https://img.icons8.com/color/100/nodejs.png" }
  ];
  
  const developerTools = [
    { name: "Github", icon: "https://img.icons8.com/ios-glyphs/100/github.png" },
    { name: "VSCode", icon: "https://img.icons8.com/fluency/100/visual-studio-code-2019.png" },
    { name: "WordPress", icon: "https://img.icons8.com/color/100/wordpress.png" },
    { name: "Figma", icon: "https://img.icons8.com/color/100/figma--v1.png" },
    { name: "Pycharm", icon: "https://img.icons8.com/color/100/pycharm--v1.png" },
    { name: "Elementor", icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/external-elementor-the-wordpress-page-builder-a-simple-intuitive-drag-and-drop-interface-logo-shadow-tal-revivo.png" }
  ];
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
        <div className="About-cont">
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
        <div className="Skills-cont">
        <div className="skill-mob">
          <h1>Skills</h1>
            <div className="Techn-mob" style={{ textAlign: 'center' }}>
              <h2>Technical Skills</h2>
              <div className="tsm">
                {technicalSkills.map((skill, index) => (
                  <div className="tsmi" key={index}>{skill}</div>
                ))}
              </div>
              <h2>Core Competencies</h2>
              <div className="tsm">
                {coreCompetencies.map((competency, index) => (
                  <div className="tsmi" key={index}>{competency}</div>
                ))}
              </div>
            </div>
          <h1>Tech Frameworks</h1>
            <div className="Frame-mob" style={{ textAlign: 'center' }}>
              <h2>Tech Stack</h2>
              <div className="frm">
                {techStack.map((tech, index) => (
                  <div className="frmi" key={index}>
                    <img width="100" height="100" src={tech.icon} alt={tech.name} />
                    <p>{tech.name}</p>
                  </div>
                ))}
              </div>
              <h2>Developer Tools</h2>
              <div className="frm">
                {developerTools.map((tool, index) => (
                  <div className="frmi" key={index}>
                    <img width="100" height="100" src={tool.icon} alt={tool.name} />
                    <p>{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
        </div>
        <div className="Works-cont">
          <div className="works-mob">
            <h1>PORTFOLIO</h1>
            {portfolioItems.map((item, index) => (
              <div className="works-card-mob" key={index}>
                <div className="gradient">
                  <img src={item.img} alt="" />
                  <h2>{item.text}</h2>
                </div>
              </div>
            ))}
          </div>
        </div> 
        <div className="contact-cont">

        </div>
      </div>
      <div className="pc-view">
        
      </div>
    </div>
  )


};

export default Web;
