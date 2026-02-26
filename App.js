import NavbarComponent from "./NavbarComponent";
import GalaxyBackground from "./GalaxyBackground";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava } from "react-icons/fa";
import { FaComments, FaUsers, FaLightbulb, FaClock, FaBrain } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import Contact from "./contact";
import "./index.css"; // Create this CSS file for responsive styles


function App() {
  const aboutRef = useRef(null);
  const [showAbout, setShowAbout] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowAbout(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="App">
      <GalaxyBackground />
      <NavbarComponent />

      {/* HOME SECTION */}
      <div id="home" className="section home-container">
        <div className="home-content">
          <p style={{ fontSize: "clamp(16px, 4vw, 22px)", color: "#bbbbbb" }}>
            Hello, I'm
          </p>

          <h1 style={{ 
            fontSize: "clamp(40px, 10vw, 80px)", 
            margin: "0",
            lineHeight: "1.2"
          }}>
            Bushra <span style={{ color: "#edf0f3" }}>Taranum</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Aspiring Web Developer",
              1500,
              "Aspiring Web Developer\nComputer Science Student"
            ]}
            speed={50}
            repeat={0}
            style={{
              fontSize: "clamp(20px, 4vw, 30px)",
              marginTop: "20px",
              color: "#c084fc",
              whiteSpace: "pre-line"
            }}
          />

          <div style={{ 
            marginTop: "30px", 
            display: "flex", 
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
           <button
onClick={() =>
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  })
}
style={{
  padding: "12px 28px",
  borderRadius: "10px",
  border: "none",
  background: "#ef23ae",
  color: "white",
  cursor: "pointer"
}}
>
Contact Me
</button>

            <a
  href="/Bushra_resume (1).pdf"
  target="_blank"
  rel="noreferrer"
>
  <button
    style={{
      padding: "12px 28px",
      borderRadius: "10px",
      border: "none",
      background: "#ef23ae",
      color: "white",
      cursor: "pointer"
    }}
  >
    Resume
  </button>
</a>
          </div>

          <div className="social-links">
            <a href="https://github.com/bushrataranum2-glitch" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/bushra-taranum-66785b32a" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:bushrataranum2@gmail.com">
              <FaEnvelope />
            </a>
           
           
          </div>
        </div>

        <img
          src="/avatar.png"
          alt="avatar"
          className="avatar-image"
        />
      </div>

      {/* ABOUT SECTION */}
      <div id="about" ref={aboutRef} className="section about-section">
        <h1 className="section-title">About Me</h1>

        <div className="about-container">
          <img
            src="/myphoto.jpeg"
            alt="me"
            className="about-image"
          />

          <div className="about-text">
            <p className={`about-description ${showAbout ? 'fade-in' : ''}`}>
              I am a Computer Science Engineering student passionate about web development and programming.
              I enjoy building projects using HTML, CSS, JavaScript and React.
              I am eager to learn and grow in the field of web development and 
              am excited about the opportunities it offers. I love learning new technologies and improving my coding skills.
            </p>

            <div className="interest-tags">
              <span className="interest-tag">Curious Learner</span>
              <span className="interest-tag">Love Cooking</span>
              <span className="interest-tag">Exploring Places</span>
            </div>
          </div>
        </div>
      </div>

      {/* EDUCATION SECTION */}
      <div id="education" className="section education-section">
        <h1 className="section-title">Education</h1>

        <div className="timeline">
          <div className="timeline-line"></div>

          {/* BTECH */}
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>B.Tech Computer Science Engineering</h3>
              <p>2024 – Present</p>
              <p className="highlight-text">CGPA: Pursuing</p>
              <p>Learning Web Development and Programming</p>
            </div>
            <div className="timeline-star">
              <svg width="40" height="40">
                <polygon points="20,0 26,14 40,14 30,24 34,40 20,30 6,40 10,24 0,14 14,14" fill="#ef23ae"/>
              </svg>
            </div>
          </div>

          {/* PUC */}
          <div className="timeline-item right">
            <div className="timeline-content">
              <h3>PUC - PCMB</h3>
              <p>2022 – 2024</p>
              <p className="highlight-text">93%</p>
              <p>Physics Chemistry Mathematics Biology</p>
            </div>
            <div className="timeline-star">
              <svg width="40" height="40">
                <polygon points="20,0 26,14 40,14 30,24 34,40 20,30 6,40 10,24 0,14 14,14" fill="#ef23ae"/>
              </svg>
            </div>
          </div>

          {/* SSLC */}
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>SSLC</h3>
              <p>2022</p>
              <p className="highlight-text">93%</p>
              <p>Citizens English High School</p>
            </div>
            <div className="timeline-star">
              <svg width="40" height="40">
                <polygon points="20,0 26,14 40,14 30,24 34,40 20,30 6,40 10,24 0,14 14,14" fill="#ef23ae"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div id="skills" className="section skills-section">
        <h1 className="section-title">Skills</h1>

        <h2 className="skills-subtitle">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <FaHtml5 size={40} color="#E34F26"/>
            <h3>HTML</h3>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: "90%"}}></div>
            </div>
          </div>

          <div className="skill-card">
            <FaCss3Alt size={40} color="#1572B6"/>
            <h3>CSS</h3>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: "85%"}}></div>
            </div>
          </div>

          <div className="skill-card">
            <FaJs size={40} color="#F7DF1E"/>
            <h3>JavaScript</h3>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: "70%"}}></div>
            </div>
          </div>

          <div className="skill-card">
            <FaReact size={40} color="#61DBFB"/>
            <h3>React</h3>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: "65%"}}></div>
            </div>
          </div>

          <div className="skill-card">
            <FaPython size={40} color="#3776AB"/>
            <h3>Python</h3>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: "75%"}}></div>
            </div>
          </div>

          <div className="skill-card">
            <FaJava size={40} color="#f89820"/>
            <h3>Java</h3>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: "70%"}}></div>
            </div>
          </div>
        </div>

        <h2 className="skills-subtitle">Soft Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <FaComments size={40} color="#ef23ae"/>
            <h3>Communication</h3>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: "85%"}}></div>
            </div>
          </div>

          <div className="skill-card">
            <FaUsers size={40} color="#ef23ae"/>
            <h3>Teamwork</h3>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: "90%"}}></div>
            </div>
          </div>

          <div className="skill-card">
            <FaLightbulb size={40} color="#ef23ae"/>
            <h3>Problem Solving</h3>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: "85%"}}></div>
            </div>
          </div>

          <div className="skill-card">
            <FaClock size={40} color="#ef23ae"/>
            <h3>Time Management</h3>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: "80%"}}></div>
            </div>
          </div>

          <div className="skill-card">
            <FaBrain size={40} color="#ef23ae"/>
            <h3>Quick Learner</h3>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: "90%"}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <div id="projects" className="section projects-section">
        <h1 className="section-title">Projects</h1>

        <div className="projects-grid">
          {/* School Management */}
          <div className="project-card">
            <iframe
              src="https://school-management-system-by-bushra.netlify.app/"
              className="project-preview"
              title="school"
              loading="lazy"
            />
            <h3>School Management System</h3>
            <p className="project-text">
              Developed a web-based School Management System to manage
              student records and academic information.
            </p>
            <div className="project-buttons">
              <a href="https://school-management-system-by-bushra.netlify.app/" target="_blank" rel="noreferrer">
                <button className="demo-btn">Live Demo</button>
              </a>
              <a href="https://github.com/bushrataranum2-glitch" target="_blank" rel="noreferrer">
                <button className="github-btn">GitHub</button>
              </a>
            </div>
          </div>

          {/* Recipe Generator */}
          <div className="project-card">
            <iframe
              src="https://foodrecipegenerator.netlify.app/"
              className="project-preview"
              title="recipe"
              loading="lazy"
            />
            <h3>Food Recipe Generator</h3>
            <p className="project-text">
              Developed a Food Recipe Generator that suggests recipes
              based on available ingredients.
            </p>
            <div className="project-buttons">
              <a href="https://foodrecipegenerator.netlify.app/" target="_blank" rel="noreferrer">
                <button className="demo-btn">Live Demo</button>
              </a>
              <a href="https://github.com/bushrataranum2-glitch" target="_blank" rel="noreferrer">
                <button className="github-btn">GitHub</button>
              </a>
            </div>
          </div>

          {/* Expense Tracker */}
          <div className="project-card">
            <iframe
              src="https://budget-flows.netlify.app/"
              className="project-preview"
              title="expense"
              loading="lazy"
            />
            <h3>Expense Tracker</h3>
            <p className="project-text">
              Built an Expense Tracker to monitor daily expenses
              and manage personal finances effectively.
            </p>
            <div className="project-buttons">
              <a href="https://budget-flows.netlify.app/" target="_blank" rel="noreferrer">
                <button className="demo-btn">Live Demo</button>
              </a>
              <a href="https://github.com/bushrataranum2-glitch" target="_blank" rel="noreferrer">
                <button className="github-btn">GitHub</button>
              </a>
            </div>
          </div>

          {/* Hospital Design */}
          <div className="project-card">
            <iframe
              src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/aLzvmaWnWZ3ZGwllp5ViRd/APP"
              className="project-preview"
              title="hospital"
              loading="lazy"
            />
            <h3>Hospital Management System</h3>
            <p className="project-text">
              Designed a Hospital Management System user interface in Figma.
            </p>
            <div className="project-buttons">
              <a href="https://www.figma.com/design/aLzvmaWnWZ3ZGwllp5ViRd/APP" target="_blank" rel="noreferrer">
                <button className="demo-btn">View Design</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CERTIFICATION SECTION */}
      <div id="certification" className="section certification-section">
        <h1 className="section-title">Certifications</h1>

        <div className="certificate-grid">
          {/* AWS */}
          <div className="certificate-card">
            <img src="/aws.jpeg" className="certificate-img" alt="aws" loading="lazy"/>
            <h3>AWS Cloud Practitioner</h3>
            <button className="demo-btn" onClick={() => setSelectedCert("/aws.jpeg")}>
              View Certificate
            </button>
          </div>

          {/* Cyber */}
          <div className="certificate-card">
            <img src="/cyber.jpeg" className="certificate-img" alt="cyber" loading="lazy"/>
            <h3>Cyber Security</h3>
            <button className="demo-btn" onClick={() => setSelectedCert("/cyber.jpeg")}>
              View Certificate
            </button>
          </div>

          {/* DSA */}
          <div className="certificate-card">
            <img src="/dsa.jpeg" className="certificate-img" alt="dsa" loading="lazy"/>
            <h3>Data Structures</h3>
            <button className="demo-btn" onClick={() => setSelectedCert("/dsa.jpeg")}>
              View Certificate
            </button>
          </div>

          {/* AI */}
          <div className="certificate-card">
            <img src="/ai.jpeg" className="certificate-img" alt="ai" loading="lazy"/>
            <h3>Azure AI</h3>
            <button className="demo-btn" onClick={() => setSelectedCert("/ai.jpeg")}>
              View Certificate
            </button>
          </div>

          {/* Cloud */}
          <div className="certificate-card">
            <img src="/cloud.jpeg" className="certificate-img" alt="cloud" loading="lazy"/>
            <h3>Cloud Computing Fundamentals</h3>
            <button className="demo-btn" onClick={() => setSelectedCert("/cloud.jpeg")}>
              View Certificate
            </button>
          </div>
        </div>
      </div>

      <Contact />

      {/* Certificate Popup */}
      {selectedCert && (
        <div className="cert-popup" onClick={() => setSelectedCert(null)}>
          <div className="cert-box" onClick={(e) => e.stopPropagation()}>
            <span className="close-cross" onClick={() => setSelectedCert(null)}>✖</span>
            <img src={selectedCert} className="cert-large" alt="certificate" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;