import { useState } from 'react';
import mePhoto from './assets/Me.JPG';
import './style.css';
import './profile-updates.css';

const LINKEDIN = 'https://www.linkedin.com/in/emmanuella-odiase-733527451/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQEn3Zt2jTvy4DNAmNzvEPQ%3D%3D'; // Update with Ella's LinkedIn URL
const GITHUB = 'https://github.com/Ellah-ally';
const EMAIL = 'odiaseella1@gmail.com';
const categories = ['All work', 'Web', 'AI & data'];

const projects = [
  {
    name: 'StrokeAI',
    repo: 'StrokeAI',
    category: 'AI & data',
    type: 'AI · Care & wellness web app',
    description: 'A gentle, accessible AI stroke risk detector powered by a predictive machine learning model and embedded in a Python Flask web app for timely risk checks.',
    tech: 'Python · Flask · ML',
    art: 'fraud',
    feature: true,
  },
  {
    name: 'OPay Homepage Replica',
    repo: 'opay-homepage-replica',
    category: 'Web',
    type: 'Fintech · Thoughtful UI',
    description: 'A clean, responsive recreation of the OPay homepage crafted with semantic HTML, polished CSS styling, and smooth interactive JavaScript details.',
    tech: 'HTML · CSS · JavaScript',
    art: 'brave',
    feature: true,
  },
  {
    name: 'Webcpaz Client & Internal Web Builds',
    repo: '',
    category: 'Web',
    type: 'Web · Full-stack craft',
    description: 'Collaborated across frontend and backend layers on client and internal web projects during full-stack development at Webcpaz Tech.',
    tech: 'React · Node.js · JavaScript',
    art: 'probe',
  },
];

const certifications = [
  {
    title: 'B.Sc. in Computer Science',
    issuer: 'Wellspring University',
    year: '2026',
    href: '#experience',
    action: 'GRADUATED',
  },
];

const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'Webcpaz Tech, Port Harcourt',
    date: 'May — Oct 2025',
    detail: 'Crafted a responsive replica of the OPay homepage using HTML, CSS, and JavaScript, and supported client and internal web builds across frontend and backend layers with care and attention to detail.',
  },
];

const Arrow = ({ diagonal = false }) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow-icon">
    {diagonal ? <path d="M5 15 15 5M6 5h9v9" /> : <path d="M3 10h13m-5-5 5 5-5 5" />}
  </svg>
);

function ProjectCard({ project, index }) {
  const projectHref = project.repo ? `${GITHUB}/${project.repo}` : GITHUB;

  return (
    <article className={`project-card ${project.feature ? 'project-card--feature' : ''}`}>
      <a
        className={`project-art art--${project.art}`}
        href={projectHref}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.name} on GitHub`}
      >
        <span className="art-kicker">OE / PROJECT {String(index + 1).padStart(2, '0')}</span>
        <span className="art-title">{project.name}</span>
        <span className="art-label">{project.type}</span>
        <span className="art-shape" aria-hidden="true" />
        <span className="art-go"><Arrow diagonal /></span>
      </a>
      <div className="project-meta">
        <div className="project-title-row">
          <h3>{project.name}</h3>
          <span>{project.category}</span>
        </div>
        <p>{project.description}</p>
        <div className="project-bottom">
          <span>{project.tech}</span>
          <a href={projectHref} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}>
            VIEW PROJECT <Arrow diagonal />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All work');
  const closeMenu = () => setMenuOpen(false);
  const year = new Date().getFullYear();
  const filteredProjects =
    activeCategory === 'All work'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="ella-theme">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Odiase Etiosa Emmanuella, home">
            <span className="wordmark-symbol">E<span>.</span></span>
            <span className="wordmark-name">Odiase Etiosa Emmanuella</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{menuOpen ? '−' : '+'}</span>
          </button>
          <nav id="primary-nav" className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            <a href="#work" onClick={closeMenu}>Selected work <span>01</span></a>
            <a href="#about" onClick={closeMenu}>About <span>02</span></a>
            <a href="#experience" onClick={closeMenu}>Experience <span>03</span></a>
            <a href="#certifications" onClick={closeMenu}>Education <span>04</span></a>
            <a className="nav-social" href={GITHUB} target="_blank" rel="noreferrer">
              GitHub <Arrow diagonal />
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero page-wrap" id="top" aria-labelledby="hero-title">
          <div className="hero-topline">
            <span><i className="availability-dot" /> FULL-STACK DEVELOPER / CREATIVE BUILDER</span>
            <span>PORT HARCOURT, NIGERIA <b>·</b> {year}</span>
          </div>
          <div className="hero-copy">
            <p className="hero-hello">Hi there, I’m Ella <span>♡</span></p>
            <h1 id="hero-title">
              I craft<br />warm, thoughtful<br /><span className="hero-stroke">digital spaces.</span>
            </h1>
            <p className="hero-intro">
              Full-stack developer and Computer Science graduate with a soft spot for clean design, helpful web apps, and gentle AI-powered tools.
            </p>
            <a className="hero-cta" href="#work">EXPLORE MY WORK <span>↓</span></a>
          </div>
          <div className="hero-decoration">
            <span className="deco-sun" aria-hidden="true" />
            <div className="hero-portrait-frame">
              <img
                src={mePhoto}
                alt="Odiase Etiosa Emmanuella"
                className="hero-portrait-img"
              />
            </div>
            <span className="deco-note" aria-hidden="true">SOFT DETAILS,<br />REAL IMPACT.</span>
            <span className="deco-number" aria-hidden="true">01—0{projects.length}</span>
          </div>
          <div className="hero-foot">
            <span>WEB · FULL-STACK · AI SOLUTIONS</span>
            <span>SCROLL A LITTLE <b>↓</b></span>
          </div>
        </section>

        <section className="work-section page-wrap" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THINGS I’VE LOVED BUILDING <span>♡</span></p>
              <h2 id="work-title">Selected work<span className="heading-period">.</span></h2>
            </div>
            <p className="section-aside">
              Thoughtful interfaces, full-stack builds,<br />and helpful AI experiences.
            </p>
          </div>
          <div className="category-bar" role="group" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? 'category-button is-active' : 'category-button'}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
                <span>
                  {category === 'All work'
                    ? projects.length
                    : projects.filter((project) => project.category === category).length}
                </span>
              </button>
            ))}
          </div>
          <div className="project-grid" aria-live="polite">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} index={projects.indexOf(project)} />
            ))}
          </div>
          <a className="all-work-link" href={`${GITHUB}?tab=repositories`} target="_blank" rel="noreferrer">
            SEE MORE ON GITHUB <Arrow diagonal />
          </a>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="page-wrap about-layout">
            <div className="about-intro">
              <p className="eyebrow">A LITTLE ABOUT ME <span>02</span></p>
              <h2 id="about-title">
                I love making<br />helpful things<br /><em>feel welcoming.</em>
              </h2>
              <p className="about-copy">
                I’m a full-stack developer and Computer Science graduate from Wellspring University who enjoys turning everyday ideas into friendly, intuitive web experiences. Whether I’m shaping a responsive frontend or embedding a machine learning model into a Python Flask app, I care deeply about clarity and ease of use.
              </p>
              <p className="about-copy">
                Working across HTML, CSS, JavaScript, React, Node.js, and Python allows me to bring ideas from first sketch to a live, working application that feels approachable to use.
              </p>
              <a className="text-link" href={`mailto:${EMAIL}`}>
                SEND ME A NOTE <Arrow diagonal />
              </a>
            </div>
            <div className="about-details">
              <div className="detail-block">
                <span className="detail-label">WHAT I ENJOY BUILDING</span>
                <p>
                  Clean, responsive websites & UIs<br />
                  Full-stack web applications<br />
                  AI & machine learning web tools<br />
                  Python Flask & Node.js backends<br />
                  Smooth deployments & ongoing care
                </p>
              </div>
              <div className="detail-block">
                <span className="detail-label">TOOLS IN MY DAILY FLOW</span>
                <div className="skill-cloud">
                  {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'Flask', 'Git'].map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
              <div className="detail-block award-block">
                <span className="detail-label">EDUCATION MILESTONE</span>
                <p>
                  B.Sc. in Computer Science<br />
                  <strong>Wellspring University · Oct 2026</strong>
                </p>
                <span className="award-star" aria-hidden="true">♡</span>
              </div>
            </div>
          </div>
        </section>

        <section className="experience-section page-wrap" id="experience" aria-labelledby="experience-title">
          <div className="section-heading experience-heading">
            <div>
              <p className="eyebrow">WHERE I’VE GROWN <span>03</span></p>
              <h2 id="experience-title">Experience<span className="heading-period">.</span></h2>
            </div>
            <p className="section-aside">
              Growing through hands-on building,<br />collaboration, and caring about the details.
            </p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.company}>
                <span className="timeline-date">{item.date}</span>
                <div>
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p className="timeline-detail">{item.detail}</p>
                </div>
                <span className="timeline-mark" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="certifications-section" id="certifications" aria-labelledby="certifications-title">
          <div className="page-wrap certifications-layout">
            <div>
              <p className="eyebrow">ACADEMIC FOUNDATION <span>04</span></p>
              <h2 id="certifications-title">Education<span className="heading-period">.</span></h2>
              <p className="certifications-intro">Degree milestone and foundation.</p>
            </div>
            <div className="certification-list">
              {certifications.map((certification) => (
                <article className="certification-card" key={certification.title}>
                  <span className="certification-icon" aria-hidden="true">♡</span>
                  <div className="certification-copy">
                    <h3>{certification.title}</h3>
                    <p>
                      {certification.issuer}
                      {certification.year && <> <span>·</span> {certification.year}</>}
                    </p>
                  </div>
                  <a href={certification.href}>{certification.action || 'VIEW'} <Arrow diagonal /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-wrap contact-inner">
            <p className="eyebrow">SAY HELLO <span>♡</span></p>
            <h2>Let’s create<br /><em>something lovely.</em></h2>
            <div className="contact-bottom">
              <a className="contact-email" href={`mailto:${EMAIL}`}>
                {EMAIL} <Arrow diagonal />
              </a>
              <p>Always happy to chat about<br />projects, roles, and ideas.</p>
            </div>
            <div className="contact-socials">
              <a href={LINKEDIN} target="_blank" rel="noreferrer">LINKEDIN <Arrow diagonal /></a>
              <a href={GITHUB} target="_blank" rel="noreferrer">GITHUB <Arrow diagonal /></a>
              <a href={`mailto:${EMAIL}`}>EMAIL <Arrow diagonal /></a>
              <a href="tel:+2348080957174">0808 095 7174 <Arrow diagonal /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-wrap">
        <a className="footer-mark" href="#top">E<span>.</span></a>
        <span>MADE WITH WARMTH & CARE</span>
        <span>© {year} ODIASE ETIOSA EMMANUELLA</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}