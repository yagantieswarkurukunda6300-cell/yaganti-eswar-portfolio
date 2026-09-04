import profilePhoto from "./assets/profile.jpg";
import "./App.css";

function App() {
  const completedProjects = [
    ["01", "Automated Solar Tracking System", "Arduino • LDR • Servo"],
    ["02", "Bluetooth Home Automation", "IoT • Bluetooth • Relay"],
    ["03", "Prepaid Energy Meter", "Smart Energy • Monitoring"],
    ["04", "Solar Mobile Charger", "Solar • Power Electronics"],
    ["05", "Automatic Street Light", "LDR • Relay • Automation"],
    ["06", "Smart Agricultural Irrigation", "IoT • Soil Moisture"],
    ["07", "Over / Under Voltage Protection", "Protection • Relay"],
    ["08", "Smart Water Level Controller", "Sensors • Automation"],
    ["09", "Ultrasonic Object Detector", "Arduino • Sensors"],
  ];

  const futureProjects = [
    ["01", "🧮", "Premium Calculator", "Web"],
    ["02", "⚡", "Smart Energy Monitoring Dashboard", "EEE + IoT"],
    ["03", "☀️", "AI Solar Power Prediction", "EEE + AI"],
    ["04", "🔋", "Battery Health Prediction", "EEE + AI"],
    ["05", "🌡️", "IoT Transformer Monitoring", "EEE + IoT"],
    ["06", "🤖", "AI Motor Fault Detection", "EEE + AI"],
    ["07", "💡", "Smart Street Light System", "EEE + IoT"],
    ["08", "🔌", "Electricity Consumption Predictor", "EEE + ML"],
    ["09", "🚗", "EV Battery Monitoring Dashboard", "EEE + AI"],
    ["10", "🌱", "AI Smart Irrigation", "EEE + AI + IoT"],
    ["11", "⚡", "Power Factor Monitoring System", "EEE + IoT"],
    ["12", "🏭", "Predictive Maintenance Dashboard", "EEE + AI"],
    ["13", "☀️", "Solar Panel Fault Detection", "EEE + AI"],
    ["14", "🏠", "AI Smart Home Energy Manager", "EEE + AI"],
    ["15", "⚙️", "AI-Based Electrical Fault Classifier", "EEE + AI"],
  ];

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="logo">
          <span>KURUKUNDA</span> YAGANTI ESWAR
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        {/* RESUME BUTTON */}
        <a
          className="resume-btn"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </nav>

      <main>
        {/* ================= HERO ================= */}

        <section className="hero" id="home">
          <div className="circuit circuit-one"></div>
          <div className="circuit circuit-two"></div>

          <div className="hero-content">
            <div className="status">
              <span></span> OPEN TO OPPORTUNITIES
            </div>

            <p className="hello">HELLO, I'M</p>

            <h1>
              KURUKUNDA
              <br />
              <span>YAGANTI ESWAR</span>
            </h1>

            <h2>
              Electrical Engineer <b>|</b> AI <b>|</b> IoT
            </h2>

            <p className="creator-tag">
              👻 20K+ Snapchat Content Creator
            </p>

            <p className="hero-text">
              EEE student passionate about electrical engineering,
              automation, renewable energy, embedded systems, IoT,
              MATLAB, AutoCAD and emerging AI technologies.
            </p>

            {/* HERO BUTTONS */}

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                Explore My Work →
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>

              <a
                href="https://github.com/yagantieswarkurukunda6300-cell"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/yaganti-eswar-kurukunda-7027132b2"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                LinkedIn ↗
              </a>
            </div>

            <div className="quick-stats">
              <div>
                <strong>9.6</strong>
                <small>CGPA</small>
              </div>

              <div>
                <strong>20K+</strong>
                <small>Followers</small>
              </div>

              <div>
                <strong>12+</strong>
                <small>Projects</small>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="energy-ring ring-one"></div>
            <div className="energy-ring ring-two"></div>

            {/* PROFILE PHOTO */}
            <div className="profile-placeholder">
              <img
                src={profilePhoto}
                alt="KURUKUNDA YAGANTI ESWAR"
                className="profile-photo"
              />
            </div>

            <div className="floating-card card-top">
              ⚡ EEE ENGINEERING
            </div>

            <div className="floating-card card-bottom">
              ◉ AI + IoT
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section className="section about" id="about">
          <div className="section-heading">
            <span>01</span>

            <div>
              <p>GET TO KNOW ME</p>
              <h2>About Me</h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <h3>
                Electrical Engineering with a
                <span> technology-first mindset.</span>
              </h3>

              <p>
                I am a driven Electrical and Electronics Engineering
                student maintaining a 9.6 CGPA at VEMU Institute of
                Technology.
              </p>

              <p>
                I completed my Diploma in EEE as a Gold Medalist with
                86% from Bheema Institute of Technology and secured
                an ECET Branch Rank of 234.
              </p>

              <p>
                My interests combine core electrical engineering with
                automation, renewable energy, embedded systems, IoT,
                AutoCAD, MATLAB, 3D designing and AI.
              </p>
            </div>

            <div className="about-cards">
              <div className="info-card blue">
                <span>⚡</span>
                <h4>EEE</h4>
                <p>Electrical & Electronics Engineering</p>
              </div>

              <div className="info-card orange">
                <span>🤖</span>
                <h4>AI + IoT</h4>
                <p>Smart engineering solutions</p>
              </div>

              <div className="info-card red">
                <span>☀</span>
                <h4>Renewable Energy</h4>
                <p>Solar & sustainable systems</p>
              </div>

              <div className="info-card white">
                <span>⚙</span>
                <h4>Automation</h4>
                <p>Embedded & industrial systems</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}

        <section className="section skills" id="skills">
          <div className="section-heading">
            <span>02</span>

            <div>
              <p>WHAT I WORK WITH</p>
              <h2>Technical Skills</h2>
            </div>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <span>01</span>
              <h3>Electrical</h3>
              <p>
                Power Electronics, Electrical Machines,
                Protection & Electrical Systems
              </p>
            </div>

            <div className="skill-card">
              <span>02</span>
              <h3>Design & Simulation</h3>
              <p>
                AutoCAD, MATLAB / Simulink, 3D Designing
              </p>
            </div>

            <div className="skill-card">
              <span>03</span>
              <h3>Programming</h3>
              <p>
                Java, C, Python & Embedded Programming
              </p>
            </div>

            <div className="skill-card">
              <span>04</span>
              <h3>IoT & Embedded</h3>
              <p>
                Arduino, Sensors, Microcontrollers & IoT Systems
              </p>
            </div>

            <div className="skill-card">
              <span>05</span>
              <h3>Creative Tools</h3>
              <p>
                Adobe Photoshop, DaVinci Resolve & Content Creation
              </p>
            </div>

            <div className="skill-card">
              <span>06</span>
              <h3>Industrial</h3>
              <p>
                Production Processes, Quality Control & Inspection
              </p>
            </div>
          </div>
        </section>

        {/* ================= COMPLETED PROJECTS ================= */}

        <section className="section projects" id="projects">
          <div className="section-heading">
            <span>03</span>

            <div>
              <p>ENGINEERING + TECHNOLOGY</p>
              <h2>Completed Projects</h2>
            </div>
          </div>

          <div className="projects-grid">
            {completedProjects.map(([number, title, tech]) => (
              <article className="project-card" key={number}>
                <div className="project-number">
                  {number}
                </div>

                <div className="project-icon">
                  ⚡
                </div>

                <h3>{title}</h3>

                <p>{tech}</p>

                {/* PROJECT 01 GITHUB LINK */}
                <a
                  href={
                    number === "01"
                      ? "https://github.com/yagantieswarkurukunda6300-cell"
                      : "#contact"
                  }
                  target={number === "01" ? "_blank" : undefined}
                  rel={
                    number === "01"
                      ? "noreferrer"
                      : undefined
                  }
                >
                  View Project ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ================= FUTURE PROJECTS ================= */}

        <section
          className="section future-projects"
          id="future-projects"
        >
          <div className="section-heading">
            <span>04</span>

            <div>
              <p>MY ENGINEERING ROADMAP</p>
              <h2>Future Projects 🚀</h2>
            </div>
          </div>

          <div className="future-projects-intro">
            <p>
              A roadmap of upcoming projects combining Electrical
              Engineering, Artificial Intelligence, Machine Learning,
              IoT and smart automation.
            </p>
          </div>

          <div className="future-projects-grid">
            {futureProjects.map(
              ([number, icon, title, mix]) => (
                <article
                  className="future-project-card"
                  key={number}
                >
                  <div className="future-number">
                    {number}
                  </div>

                  <div className="future-icon">
                    {icon}
                  </div>

                  <h3>{title}</h3>

                  <span className="future-tag">
                    {mix}
                  </span>

                  <div className="future-status">
                    <span></span>
                    PLANNED
                  </div>
                </article>
              )
            )}
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}

        <section
          className="section experience"
          id="experience"
        >
          <div className="section-heading">
            <span>05</span>

            <div>
              <p>INDUSTRY EXPERIENCE</p>
              <h2>Experience</h2>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>APR 2026 — JUL 2026</span>

                <h3>Quality Control Intern</h3>

                <h4>Versigent</h4>

                <p>
                  Conducted quality inspections, documented defects,
                  supported root cause analysis and CAPA, maintained
                  quality records and collaborated with production
                  and engineering teams.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>FEB 2026 — MAR 2026</span>

                <h3>Quality Inspector</h3>

                <h4>Stanley Manufacturing</h4>

                <p>
                  Performed quality inspection activities and
                  supported production operations.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>JAN 2026 — FEB 2026</span>

                <h3>Intern</h3>

                <h4>AICTE / Skill India</h4>

                <p>
                  Learned electrical system design and analysis with
                  exposure to industry-oriented engineering concepts.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>JUN 2023 — NOV 2023</span>

                <h3>Quality Control Inspector</h3>

                <h4>
                  Trasccon Interconnection Systems Pvt Ltd
                </h4>

                <p>
                  Gained practical experience in quality inspection
                  and electrical support.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>JUN 2022 — AUG 2022</span>

                <h3>Production Specialist</h3>

                <h4>EMVEE</h4>

                <p>
                  Gained practical exposure to solar manufacturing
                  and production processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}

        <section
          className="section education"
          id="education"
        >
          <div className="section-heading">
            <span>06</span>

            <div>
              <p>ACADEMIC JOURNEY</p>
              <h2>Education</h2>
            </div>
          </div>

          <div className="education-grid">
            <div className="education-card">
              <span>2024 — 2027</span>

              <h3>
                B.E. Electrical & Electronics Engineering
              </h3>

              <h4>
                VEMU Institute of Technology, Chittoor
              </h4>

              <strong>9.6 CGPA</strong>
            </div>

            <div className="education-card">
              <span>2021 — 2024</span>

              <h3>
                Diploma in Electrical & Electronics Engineering
              </h3>

              <h4>
                Bheema Institute of Technology
              </h4>

              <strong>
                86% • Gold Medalist
              </strong>
            </div>
          </div>
        </section>

        {/* ================= ACHIEVEMENTS ================= */}

        <section
          className="section achievements"
          id="achievements"
        >
          <div className="section-heading">
            <span>07</span>

            <div>
              <p>BEYOND THE CLASSROOM</p>
              <h2>Achievements</h2>
            </div>
          </div>

          <div className="achievement-grid">
            <div className="achievement-card">
              🥇
              <h3>Diploma Gold Medalist</h3>
              <p>EEE • 86% • 2024</p>
            </div>

            <div className="achievement-card">
              🏆
              <h3>ECET Branch Rank</h3>
              <p>Rank 234</p>
            </div>

            <div className="achievement-card">
              📜
              <h3>NPTEL Silver Medalist</h3>
              <p>Java</p>
            </div>

            <div className="achievement-card">
              🎤
              <h3>Paper Presentation</h3>
              <p>
                1st Prize • Regenerative Braking
              </p>
            </div>

            <div className="achievement-card">
              🧠
              <h3>College Quiz</h3>
              <p>
                1st Prize • 2 Consecutive Years
              </p>
            </div>

            <div className="achievement-card">
              🎭
              <h3>Cultural President</h3>
              <p>
                Event & Team Coordination
              </p>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section
          className="section contact"
          id="contact"
        >
          <div className="contact-box">
            <p className="contact-label">
              LET'S CONNECT
            </p>

            <h2>
              Have a project
              <span> in mind?</span>
            </h2>

            <p>
              Open to opportunities and collaborations in EEE,
              Automation, Power Systems, IoT, AutoCAD, 3D Designing
              and MATLAB.
            </p>

            <div className="contact-details">
              <a href="mailto:yagantieswarkurukunda6300@gmail.com">
                ✉ yagantieswarkurukunda6300@gmail.com
              </a>

              <a href="tel:6300272789">
                ☎ 6300272789
              </a>

              <span>
                📍 Kurnool, Andhra Pradesh, India
              </span>
            </div>

            {/* CONTACT SOCIAL LINKS */}

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/yaganti-eswar-kurukunda-7027132b2"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/yagantieswarkurukunda6300-cell"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}

      <footer>
        <strong>
          KURUKUNDA YAGANTI ESWAR
        </strong>

        <span>
          EEE • AI • IoT
        </span>

        <small>
          © 2026 All Rights Reserved.
        </small>
      </footer>
    </div>
  );
}

export default App;