import './App.css'
import { resume } from './resume'

const formatRange = (start: string, end?: string) => `${start} - ${end ?? 'Present'}`

function App() {
  return (
    <main className="resume-page">
      <header className="hero" aria-labelledby="resume-title">
        <nav className="topbar" aria-label="Primary">
          <a className="brand" href="#resume-title" aria-label={`${resume.profile.name} resume`}>
            <span aria-hidden="true">{resume.profile.initials}</span>
          </a>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </div>
        </nav>

        <section className="hero-grid">
          <div className="hero-copy">
            <p className="location">{resume.profile.location}</p>
            <h1 id="resume-title">{resume.profile.name}</h1>
            <p className="title">{resume.profile.title}</p>
            <p className="summary">{resume.profile.summary}</p>
            <div className="actions" aria-label="Profile links">
              {resume.profile.links.map((link) => (
                <a key={link.href} className={link.primary ? 'button primary' : 'button'} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <aside className="snapshot" aria-label="Resume snapshot">
            <div>
              <span className="snapshot-label">Focus</span>
              <strong>{resume.profile.focus}</strong>
            </div>
            <div>
              <span className="snapshot-label">Stack</span>
              <strong>{resume.profile.stack}</strong>
            </div>
            <div>
              <span className="snapshot-label">Availability</span>
              <strong>{resume.profile.availability}</strong>
            </div>
          </aside>
        </section>
      </header>

      <section className="content-grid" aria-label="Resume content">
        <div className="main-column">
          <section id="experience" className="section-block" aria-labelledby="experience-title">
            <div className="section-heading">
              <p>Work</p>
              <h2 id="experience-title">Experience</h2>
            </div>
            <div className="timeline">
              {resume.experience.map((role) => (
                <article className="timeline-item" key={`${role.company}-${role.role}`}>
                  <div className="timeline-meta">
                    <span>{formatRange(role.start, role.end)}</span>
                    <span>{role.location}</span>
                  </div>
                  <div>
                    <h3>{role.role}</h3>
                    <p className="company">{role.company}</p>
                    <ul>
                      {role.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="section-block" aria-labelledby="projects-title">
            <div className="section-heading">
              <p>Selected</p>
              <h2 id="projects-title">Projects</h2>
            </div>
            <div className="projects">
              {resume.projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="side-column">
          <section id="skills" className="section-block compact" aria-labelledby="skills-title">
            <div className="section-heading">
              <p>Toolbox</p>
              <h2 id="skills-title">Skills</h2>
            </div>
            <div className="tag-list strong">
              {resume.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>

          <section className="section-block compact" aria-labelledby="education-title">
            <div className="section-heading">
              <p>Learning</p>
              <h2 id="education-title">Education</h2>
            </div>
            {resume.education.map((item) => (
              <article className="simple-item" key={item.school}>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                <span>{item.period}</span>
              </article>
            ))}
          </section>

          <section className="section-block compact" aria-labelledby="contact-title">
            <div className="section-heading">
              <p>Links</p>
              <h2 id="contact-title">Contact</h2>
            </div>
            <ul className="contact-list">
              {resume.contact.map((contact) => (
                <li key={contact.href}>
                  <a href={contact.href}>{contact.label}</a>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </section>
    </main>
  )
}

export default App
