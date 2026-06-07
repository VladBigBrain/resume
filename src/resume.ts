type ProfileLink = {
  label: string
  href: string
  primary?: boolean
}

type ExperienceItem = {
  role: string
  company: string
  location: string
  start: string
  end?: string
  highlights: string[]
}

type ProjectItem = {
  name: string
  description: string
  tech: string[]
}

type EducationItem = {
  school: string
  degree: string
  period: string
}

type ContactItem = {
  label: string
  href: string
}

export const resume = {
  profile: {
    name: 'Vladislav',
    initials: 'VM',
    title: 'JavaScript / TypeScript Developer',
    location: 'Novosibirsk, Russia',
    focus: 'Frontend engineering',
    stack: 'React, TypeScript, Vercel',
    availability: 'Open to remote work',
    summary:
      'I build fast, practical web interfaces with a focus on clean TypeScript, reusable components, and simple deployment workflows.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/VladBigBrain',
        primary: true,
      },
      {
        label: 'Email',
        href: 'mailto:101448509+VladBigBrain@users.noreply.github.com',
      },
    ] satisfies ProfileLink[],
  },
  experience: [
    {
      role: 'Frontend Developer',
      company: 'Your Company',
      location: 'Remote',
      start: '2024',
      highlights: [
        'Built production UI with React and TypeScript.',
        'Improved component structure, accessibility, and maintainability.',
        'Shipped static and SPA projects with Vercel-friendly build pipelines.',
      ],
    },
    {
      role: 'JavaScript Developer',
      company: 'Personal Projects',
      location: 'Remote',
      start: '2023',
      end: '2024',
      highlights: [
        'Created reusable project templates for portfolio and resume pages.',
        'Worked with modern frontend tooling, linting, and typed data models.',
      ],
    },
  ] satisfies ExperienceItem[],
  projects: [
    {
      name: 'Resume Website',
      description: 'A clean personal resume site built with React, TypeScript, Vite, and Vercel.',
      tech: ['React', 'TypeScript', 'Vite', 'Vercel'],
    },
    {
      name: 'GitHub Portfolio',
      description: 'A lightweight profile hub for public projects, skills, and contact links.',
      tech: ['JavaScript', 'CSS', 'GitHub'],
    },
  ] satisfies ProjectItem[],
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Vite',
    'CSS',
    'HTML',
    'Git',
    'GitHub',
    'Vercel',
    'ESLint',
  ],
  education: [
    {
      school: 'Self-directed learning',
      degree: 'Frontend development, JavaScript, TypeScript',
      period: 'Ongoing',
    },
  ] satisfies EducationItem[],
  contact: [
    {
      label: 'github.com/VladBigBrain',
      href: 'https://github.com/VladBigBrain',
    },
    {
      label: 'Email',
      href: 'mailto:101448509+VladBigBrain@users.noreply.github.com',
    },
  ] satisfies ContactItem[],
}
