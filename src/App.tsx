import { useEffect, useState } from 'react'
import {
  BarChart3,
  Code2,
  Database,
  Link,
  Mail,
  MapPin,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import './App.css'
import {
  languageOptions,
  resumes,
  type ContactLink,
  type Impact,
  type Language,
  type Metric,
  type Project,
  type ResumeContent,
} from './resume'

const languageStorageKey = 'resume-language'

const isLanguage = (value: string | null): value is Language => value === 'ru' || value === 'en'

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'ru'
  }

  const savedLanguage = window.localStorage.getItem(languageStorageKey)

  return isLanguage(savedLanguage) ? savedLanguage : 'ru'
}

const metricIcons: Record<Metric['icon'], LucideIcon> = {
  users: Users,
  zap: Zap,
  shield: ShieldCheck,
  database: Database,
}

const projectIcons: Record<Project['icon'], LucideIcon> = {
  sparkles: Sparkles,
  database: Database,
  code: Code2,
}

const impactIcons: Record<Impact['icon'], LucideIcon> = {
  trophy: Trophy,
  rocket: Rocket,
  chart: BarChart3,
  shield: ShieldCheck,
}

function GitHubMark() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.9 2.1 2.8 1.5.1-.7.4-1.1.7-1.4-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C17.6 5 18.6 5.3 18.6 5.3c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"
      />
    </svg>
  )
}

function ContactIcon({ kind }: { kind: ContactLink['kind'] }) {
  if (kind === 'telegram') {
    return <Send aria-hidden="true" />
  }

  if (kind === 'email') {
    return <Mail aria-hidden="true" />
  }

  if (kind === 'github') {
    return <GitHubMark />
  }

  return <Link aria-hidden="true" />
}

function ContactButton({ link }: { link: ContactLink }) {
  return (
    <a className={link.primary ? 'contact-button primary' : 'contact-button'} href={link.href}>
      <ContactIcon kind={link.kind} />
      <span>{link.label}</span>
    </a>
  )
}

function LanguageSwitch({
  language,
  label,
  onChange,
}: {
  language: Language
  label: string
  onChange: (language: Language) => void
}) {
  return (
    <div className="language-switch" role="group" aria-label={label}>
      {languageOptions.map((option) => (
        <button
          aria-pressed={language === option.code}
          key={option.code}
          onClick={() => onChange(option.code)}
          title={option.name}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

function SectionTitle({ children, id }: { children: string; id?: string }) {
  return (
    <h2 className="section-title" id={id}>
      {children}
    </h2>
  )
}

function MetricCard({ metric }: { metric: Metric }) {
  const Icon = metricIcons[metric.icon]

  return (
    <article className="metric-card">
      <Icon aria-hidden="true" />
      <div>
        <strong>{metric.value}</strong>
        <span>{metric.label}</span>
      </div>
    </article>
  )
}

function ProjectRow({
  labels,
  project,
}: {
  labels: ResumeContent['labels']['projectColumns']
  project: Project
}) {
  const Icon = projectIcons[project.icon]

  return (
    <article className="project-row">
      <div className="project-icon">
        <Icon aria-hidden="true" />
      </div>
      <div className="project-content">
        <div className="project-head">
          <h3>{project.name}</h3>
          <span>{project.badge}</span>
        </div>
        <div className="project-details">
          <div>
            <h4>{labels.problem}</h4>
            <p>{project.problem}</p>
          </div>
          <div>
            <h4>{labels.role}</h4>
            <p>{project.role}</p>
          </div>
          <div>
            <h4>{labels.result}</h4>
            <p>{project.result}</p>
          </div>
          <div>
            <h4>{labels.stack}</h4>
            <p>{project.stack.join(', ')}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

function ImpactCard({ item }: { item: Impact }) {
  const Icon = impactIcons[item.icon]

  return (
    <article className="impact-card">
      <Icon aria-hidden="true" />
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </article>
  )
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const resume = resumes[language]

  useEffect(() => {
    document.documentElement.lang = resume.meta.lang
    document.title = resume.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', resume.meta.description)
    window.localStorage.setItem(languageStorageKey, language)
  }, [language, resume.meta.description, resume.meta.lang, resume.meta.title])

  return (
    <main className="resume-shell">
      <section className="hero" aria-labelledby="resume-title">
        <div className="hero-main">
          <h1 id="resume-title">{resume.profile.name}</h1>
          <p className="role">{resume.profile.title}</p>
          <p className="headline">{resume.profile.headline}</p>
          <ul className="stack-list" aria-label={resume.labels.coreStack}>
            {resume.profile.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <aside className="hero-aside" aria-label={resume.labels.contactDetails}>
          <div className="hero-controls">
            <p className="availability">
              <span aria-hidden="true"></span>
              {resume.profile.availability}
            </p>
            <LanguageSwitch
              label={resume.labels.language}
              language={language}
              onChange={setLanguage}
            />
          </div>
          <div className="contact-actions">
            {resume.contacts.map((link) => (
              <ContactButton key={link.href} link={link} />
            ))}
          </div>
          <p className="location">
            <MapPin aria-hidden="true" />
            {resume.profile.location}
          </p>
        </aside>
      </section>

      <section className="metrics" aria-label={resume.labels.resumeMetrics}>
        {resume.metrics.map((metric) => (
          <MetricCard key={metric.value} metric={metric} />
        ))}
      </section>

      <section className="section-block" id="projects" aria-labelledby="projects-title">
        <SectionTitle id="projects-title">{resume.labels.sections.projects}</SectionTitle>
        <div className="project-list">
          {resume.projects.map((project) => (
            <ProjectRow
              key={project.name}
              labels={resume.labels.projectColumns}
              project={project}
            />
          ))}
        </div>
      </section>

      <section className="section-block" id="experience" aria-labelledby="experience-title">
        <SectionTitle id="experience-title">{resume.labels.sections.experience}</SectionTitle>
        <div className="experience-list">
          {resume.experience.map((item) => (
            <article className="experience-item" key={item.period}>
              <div className="experience-period">{item.period}</div>
              <div className="experience-body">
                <h3>
                  {item.role}
                  <span>•</span>
                  <em>{item.company}</em>
                </h3>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" aria-labelledby="impact-title">
        <SectionTitle id="impact-title">{resume.labels.sections.impact}</SectionTitle>
        <div className="impact-grid">
          {resume.impact.map((item) => (
            <ImpactCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="section-block" id="skills" aria-labelledby="skills-title">
        <SectionTitle id="skills-title">{resume.labels.sections.skills}</SectionTitle>
        <div className="skills-grid">
          {resume.skills.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.items.join(', ')}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bottom-grid" aria-label={resume.labels.aboutAndLinks}>
        <article className="about-card">
          <h2>{resume.labels.sections.about}</h2>
          <p>{resume.about.text}</p>
          <div className="focus-row" aria-label="Focus areas">
            <strong>{resume.labels.focus}</strong>
            {resume.about.focus.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>

        <article className="links-card">
          <h2>{resume.labels.sections.links}</h2>
          <div className="links-grid">
            {resume.links.map((link) => (
              <a key={link.href} href={link.href}>
                <ContactIcon kind={link.kind} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </article>
      </section>

      <footer className="contact-strip" aria-label={resume.labels.contactCta}>
        <Mail aria-hidden="true" />
        <p>{resume.labels.footerText}</p>
        <div>
          {resume.contacts.slice(0, 2).map((link) => (
            <ContactButton key={link.href} link={link} />
          ))}
        </div>
      </footer>
    </main>
  )
}

export default App
