import React, { useState } from "react";

import './App.css'
import one from './assets/ongpin.jpg'
import two from './assets/filchi.jpg'
import three from './assets/gds.jpg'
import four from './assets/clear.jpg'
import five from './assets/ux.jpg'
import six from './assets/twl.jpg' 
import mob from './assets/mob-pr.jpg'

const Web =()=>{
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
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_t9ky4n2', 'template_pl9w02s', form.current, '9-CE23zskKkT2wDXn')
      .then(
        () => {
          alert('Your message has been sent successfully!'); // Success alert
        },
        () => {
          alert('There was an error sending your message. Please try again.'); // Failure alert
        }
      );
  };

  return (
    <div className='portfolio' >
      <div className="mobile-view" >
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className="navbar">
        <div className="button-container">
          <a href='#About'>
          <button className="nav">
          <img width="20" height="20" src="https://img.icons8.com/ios-filled/30/d4af37/about.png" alt="about"/>
            <p>About</p>
          </button>
          </a>
          <a href='#Skills'>
          <button className="nav">
          <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/d4af37/admin-settings-male.png" alt="admin-settings-male"/>
            <p>Skills</p>
          </button>
          </a>
          <a href='#Works'>
          <button className="nav">
          <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/d4af37/portfolio.png" alt="portfolio"/>
            <p>Works</p>
          </button>
          </a>
          <a href='#Contact'>
          <button className="nav">
          <img width="20" height="20" src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/30/d4af37/external-contact-contact-flatart-icons-solid-flatarticons.png" alt="external-contact-contact-flatart-icons-solid-flatarticons"/>
            <p>Contact</p>
          </button>
          </a>
        </div>
       </div>
        </div>
       
        <div className="left-side-mobile" id="About">
          <div className="image-cont">
            <div>
              <img src={mob}></img>
            </div>
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
        <div className="Skills-cont" id="Skills">
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
                    <div>
                      <img width="100" height="100" src={tech.icon} alt={tech.name} />
                    </div>
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
        <div className="Works-cont" id="Works">  
          <div className="works-mob">
            <h1>PORTFOLIO</h1>
            <div className="work-cont">
              <div className="works-card-mob">
                <div className="gradient">
                  <img src={one} alt="" />
                  <h2>Ongpin Tower Website</h2>
                </div>
                <div className="content">
                  <a href="https://ongpintower.com">
                  <p style={{color:'white'}}>Click here to view the Project</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="work-cont">
              <div className="works-card-mob">
                <div className="gradient">
                  <img src={two} alt="" />
                  <h2>Merged Fil-Chi Job Fair 2024 Website</h2>
                </div>
                <div className="content">
                  <a href="https://www.filchi-jobfair.com/index.html">
                  <p style={{color:'white'}}>Click here to view the Project</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="work-cont">
              <div className="works-card-mob">
                <div className="gradient">
                  <img src={three} alt="" />
                  <h2>GDS Booking System - Admin</h2>
                </div>
                <div className="content">
                  <p>Admin Side for GDS Booking System using Vue.js</p>
                </div>
              </div>
          </div>
          <div className="work-cont">
              <div className="works-card-mob">
                <div className="gradient">
                  <img src={four} alt="" />
                  <h2>Clearpath Website</h2>
                </div>
                <div className="content">
                  <a href="https://www.clear-path.ph/">
                  <p style={{color:'white'}}>Click here to view the Project</p>
                  </a>
                </div>
              </div>
          </div>
          <div className="work-cont">
              <div className="works-card-mob">
                <div className="gradient">
                  <img src={five} alt="" />
                  <h2>UX/UI TUP Manila Website</h2>
                </div>
                <div className="content">
                  <a href="https://www.figma.com/proto/qpt6EAgg1TcvB9tDvfIBIJ/UX-SOCIETY-WEBSITE?node-id=61-89&starting-point-node-id=61%3A89">
                  <p style={{color:'white'}}>Click here to view the Prototype</p>
                  </a>
                </div>
              </div>
          </div>
          <div className="work-cont">
              <div className="works-card-mob">
                <div className="gradient">
                  <img src={six} alt="" />
                  <h2>The Writhing Labyrinth</h2>
                </div>
                  <a href="https://niloknation.itch.io/the-writhing-labyrinth?fbclid=IwZXh0bgNhZW0CMTAAAR3VyM-Euo_v3Jz-yhrXK3RhsMo2YsYml1a0V_ElJdZhHC0TPtlli_f7h4o_aem_AcaHdl6k5Lp2l1ln8w9145Nln14omehgALoUM8kNOwBe-oWgR-PmxMOp7LSCtJaOhiP3ZwZ36Ye5W0fBS-jxUpAp">
                  <div className="content">
                  <p style={{color:'white'}}>Click here to download or view the game</p>
                  </div>
                  </a>
              </div>
          </div>
        </div>

        </div> 
        <div className="Contact-cont" id="Contact">
            <div className="contact-mob">
              <h2>Contact Me!</h2>
              <div className="info">
                <h3>Phone: <br /> +639-35-878-4136</h3>
              </div>
              <div className="info">
                <h3>Email: <br /> boniol.ellane@gmail.com</h3>
              </div>
              <div className="contactbox">
                <h2>Get in Touch</h2>
                <form onSubmit={sendEmail} id="contact-form">
                  <div>
                    <label>Name</label>
                    <div>
                      <input type="text" name="user_name" required />
                    </div>
                  </div>
                  <div>
                    <label>Email </label>
                    <div>
                      <input type="email" name="user_name" required />
                    </div>
                  </div>
                  <div>
                    <label>Phone </label>
                    <div>
                      <input type="number" name="user_phone" required />
                    </div>
                  </div>
                  <div>
                    <label>Message </label>
                    <textarea name="message" required />
                  </div>
                  <div style={{display:'flex', justifyContent:'center'}}>
                  <button type="submit" > 
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                      <span>Send</span>
                  </button>
                  </div>
                </form>

              </div>
            </div>  
        </div>
      </div>
      <div className="pc-view">
        
      </div>
    </div>
    
  )


};

export default Web;
