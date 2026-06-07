export type Language = 'ru' | 'en'

export type ContactLink = {
  label: string
  href: string
  kind: 'telegram' | 'email' | 'github' | 'link'
  primary?: boolean
}

export type Metric = {
  icon: 'users' | 'zap' | 'shield' | 'database'
  value: string
  label: string
}

export type Project = {
  icon: 'sparkles' | 'database' | 'code'
  name: string
  badge: string
  problem: string
  role: string
  result: string
  stack: string[]
}

export type Experience = {
  period: string
  role: string
  company: string
  bullets: string[]
}

export type Impact = {
  icon: 'trophy' | 'rocket' | 'chart' | 'shield'
  title: string
  text: string
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type ResumeContent = {
  meta: {
    lang: string
    title: string
    description: string
  }
  labels: {
    language: string
    coreStack: string
    contactDetails: string
    resumeMetrics: string
    projectColumns: {
      problem: string
      role: string
      result: string
      stack: string
    }
    sections: {
      projects: string
      experience: string
      impact: string
      skills: string
      about: string
      links: string
    }
    focus: string
    aboutAndLinks: string
    contactCta: string
    footerText: string
  }
  profile: {
    name: string
    title: string
    headline: string
    availability: string
    location: string
    stack: string[]
  }
  contacts: ContactLink[]
  metrics: Metric[]
  projects: Project[]
  experience: Experience[]
  impact: Impact[]
  skills: SkillGroup[]
  about: {
    text: string
    focus: string[]
  }
  links: ContactLink[]
}

export const languageOptions = [
  {
    code: 'ru',
    label: 'RU',
    name: 'Русский',
  },
  {
    code: 'en',
    label: 'EN',
    name: 'English',
  },
] satisfies Array<{ code: Language; label: string; name: string }>

const sharedContacts = {
  telegram: 'https://t.me/VladBigBrain',
  email: 'mailto:101448509+VladBigBrain@users.noreply.github.com',
  github: 'https://github.com/VladBigBrain',
  linkedin: 'https://linkedin.com/in/vladislav',
  linktree: 'https://linktr.ee/vladbigbrain_dev',
}

export const resumes = {
  ru: {
    meta: {
      lang: 'ru',
      title: 'Vlad | Java Backend Engineer',
      description: 'Резюме Java Backend Engineer с фокусом на AI-системы для банковских продуктов.',
    },
    labels: {
      language: 'Язык',
      coreStack: 'Ключевой стек',
      contactDetails: 'Контакты',
      resumeMetrics: 'Метрики резюме',
      projectColumns: {
        problem: 'Проблема',
        role: 'Роль',
        result: 'Результат',
        stack: 'Стек',
      },
      sections: {
        projects: 'Выбранные проекты',
        experience: 'Опыт',
        impact: 'Engineering Impact',
        skills: 'Навыки',
        about: 'Обо мне',
        links: 'Ссылки',
      },
      focus: 'Фокус:',
      aboutAndLinks: 'Обо мне и ссылки',
      contactCta: 'Контактный блок',
      footerText: 'Интересны роли в backend, AI-системах и автоматизации разработки.',
    },
    profile: {
      name: 'Vlad',
      title: 'Java Backend Engineer',
      headline: 'создаю AI-системы для банковских продуктов.',
      availability: 'Доступен для Backend / AI Engineer ролей',
      location: 'Москва, Россия',
      stack: ['Java 17', 'Spring Boot', 'Kafka', 'PostgreSQL', 'AI Agents', 'MCP', 'LLM Integration'],
    },
    contacts: [
      {
        label: 'Telegram',
        href: sharedContacts.telegram,
        kind: 'telegram',
        primary: true,
      },
      {
        label: 'Email',
        href: sharedContacts.email,
        kind: 'email',
      },
      {
        label: 'GitHub',
        href: sharedContacts.github,
        kind: 'github',
      },
    ],
    metrics: [
      {
        icon: 'users',
        value: '500k+',
        label: 'пользователей банковских сервисов',
      },
      {
        icon: 'zap',
        value: '3x',
        label: 'ускорение обработки запросов',
      },
      {
        icon: 'shield',
        value: '85%',
        label: 'покрытие критического кода тестами',
      },
      {
        icon: 'database',
        value: '70%',
        label: 'снижение нагрузки на БД',
      },
    ],
    projects: [
      {
        icon: 'sparkles',
        name: 'AI Banking Assistant',
        badge: 'AI / LLM',
        problem:
          'Банковской платформе нужен AI-помощник для обработки сложных пользовательских запросов и взаимодействия с внутренними сервисами.',
        role:
          'Интегрировал LLM с внутренними сервисами, построил агентный workflow, подключил MCP tools и feedback loop, реализовал систему оценки качества ответов.',
        result:
          'AI Assistant в production для корпоративных клиентов. Сокращение времени обработки запросов в 3 раза.',
        stack: ['Java', 'Python', 'FastAPI', 'OpenAI API', 'MCP', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
      },
      {
        icon: 'database',
        name: 'History Operations Service',
        badge: 'Backend',
        problem:
          'Необходимо хранить и предоставлять историю операций для 500k+ клиентов с высокой производительностью и согласованностью данных.',
        role:
          'Спроектировал и реализовал микросервис с нуля, реализовал пагинацию, кэширование справочников и идемпотентную обработку обновлений.',
        result:
          'Снизил нагрузку на БД на 70% за счет оптимизации запросов и кэширования. Обеспечил высокую доступность и целостность данных.',
        stack: ['Java 17', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Redis', 'MapStruct', 'Docker', 'Kubernetes'],
      },
      {
        icon: 'code',
        name: 'Internal AI Platform',
        badge: 'AI Platform',
        problem:
          'Команде разработки нужны инструменты на основе AI для автоматизации задач и повышения качества кода.',
        role:
          'Исследовал и внедрил multi-agent архитектуру, разработал инструменты статического анализа и генерации кода, оркестрировал AI-агентов.',
        result:
          'Автоматизация рутинных задач разработки. Ускорение разработки и улучшение качества кода за счет AI-инструментов.',
        stack: ['Python', 'LangChain', 'FastAPI', 'OpenAI API', 'SonarQube API', 'GitLab API', 'PostgreSQL', 'Docker'],
      },
    ],
    experience: [
      {
        period: '2023 - Сейчас',
        role: 'Java Developer (AI направление)',
        company: 'Сбербанк',
        bullets: [
          'Разработка AI Assistant для корпоративной банковской платформы',
          'Интеграция LLM в бизнес-процессы и внутренние сервисы банка',
          'Проектирование агентных workflow и tool integrations',
          'Разработка FastAPI-сервисов для AI-компонентов и интеграции с Java backend',
          'Участие в проектировании масштабируемой архитектуры решений',
        ],
      },
      {
        period: '2021 - 2023',
        role: 'Java Developer',
        company: 'Сбербанк',
        bullets: [
          'Разработка высоконагруженных микросервисов на Java 17 и Spring Boot',
          'Работа с Kafka для асинхронного взаимодействия между сервисами',
          'Оптимизация запросов и внедрение кэширования справочников',
          'Настройка CI/CD через Jenkins и GitLab CI',
          'Обеспечение качества кода и покрытия через SonarQube и unit-тесты',
        ],
      },
    ],
    impact: [
      {
        icon: 'trophy',
        title: 'AI Assistant в production',
        text: 'Участник внедрения AI Assistant для банковской платформы. Проект в production, охват 500k+ пользователей.',
      },
      {
        icon: 'rocket',
        title: '3x faster processing',
        text: 'Сократил время обработки запросов с 15 до 3 секунд за счет оптимизации workflow и кэширования.',
      },
      {
        icon: 'chart',
        title: '70% less DB load',
        text: 'Снизил нагрузку на БД на 70% благодаря оптимизации запросов и кэшированию справочников.',
      },
      {
        icon: 'shield',
        title: '85% critical coverage',
        text: 'Повысил покрытие критического кода unit-тестами и интеграционными тестами через SonarQube.',
      },
    ],
    skills: [
      {
        title: 'Backend',
        items: ['Java 17', 'Spring Boot', 'Spring Data', 'REST', 'gRPC', 'JDBC', 'JUnit', 'Kafka', 'RabbitMQ', 'PostgreSQL', 'Redis', 'MapStruct'],
      },
      {
        title: 'AI / LLM',
        items: ['OpenAI API', 'LangChain', 'MCP', 'Agent Systems', 'RAG', 'Prompt Engineering', 'Evaluation Frameworks'],
      },
      {
        title: 'Data',
        items: ['PostgreSQL', 'ClickHouse', 'Redis', 'Elasticsearch'],
      },
      {
        title: 'DevOps',
        items: ['Docker', 'Kubernetes', 'Helm', 'Jenkins', 'GitLab CI', 'SonarQube', 'Nexus', 'Linux', 'Terraform basic'],
      },
      {
        title: 'Tools',
        items: ['IntelliJ IDEA', 'Git', 'Postman', 'Swagger', 'Confluence', 'Jira', 'DataGrip'],
      },
    ],
    about: {
      text:
        'Увлечен созданием систем на стыке Backend Engineering и AI. Постоянно исследую новые технологии и применяю их в реальных продуктах. Пишу статьи об AI, разработке, архитектуре и автоматизации.',
      focus: ['AI Engineering', 'Agent Systems', 'Developer Automation', 'Backend Architecture'],
    },
    links: [
      {
        label: 'github.com/VladBigBrain',
        href: sharedContacts.github,
        kind: 'github',
      },
      {
        label: 't.me/VladBigBrain',
        href: sharedContacts.telegram,
        kind: 'telegram',
      },
      {
        label: 'linkedin.com/in/vladislav',
        href: sharedContacts.linkedin,
        kind: 'link',
      },
      {
        label: 'linktr.ee/vladbigbrain_dev',
        href: sharedContacts.linktree,
        kind: 'link',
      },
    ],
  },
  en: {
    meta: {
      lang: 'en',
      title: 'Vlad | Java Backend Engineer',
      description: 'Java Backend Engineer resume focused on AI systems for banking products.',
    },
    labels: {
      language: 'Language',
      coreStack: 'Core stack',
      contactDetails: 'Contact details',
      resumeMetrics: 'Resume metrics',
      projectColumns: {
        problem: 'Problem',
        role: 'Role',
        result: 'Result',
        stack: 'Stack',
      },
      sections: {
        projects: 'Selected Projects',
        experience: 'Experience',
        impact: 'Engineering Impact',
        skills: 'Skills',
        about: 'About Me',
        links: 'Links',
      },
      focus: 'Focus:',
      aboutAndLinks: 'About and links',
      contactCta: 'Contact call to action',
      footerText: 'Interested in backend, AI systems, and developer automation roles.',
    },
    profile: {
      name: 'Vlad',
      title: 'Java Backend Engineer',
      headline: 'building AI systems for banking products.',
      availability: 'Available for Backend / AI Engineer roles',
      location: 'Moscow, Russia',
      stack: ['Java 17', 'Spring Boot', 'Kafka', 'PostgreSQL', 'AI Agents', 'MCP', 'LLM Integration'],
    },
    contacts: [
      {
        label: 'Telegram',
        href: sharedContacts.telegram,
        kind: 'telegram',
        primary: true,
      },
      {
        label: 'Email',
        href: sharedContacts.email,
        kind: 'email',
      },
      {
        label: 'GitHub',
        href: sharedContacts.github,
        kind: 'github',
      },
    ],
    metrics: [
      {
        icon: 'users',
        value: '500k+',
        label: 'banking service users',
      },
      {
        icon: 'zap',
        value: '3x',
        label: 'faster request processing',
      },
      {
        icon: 'shield',
        value: '85%',
        label: 'critical code test coverage',
      },
      {
        icon: 'database',
        value: '70%',
        label: 'lower database load',
      },
    ],
    projects: [
      {
        icon: 'sparkles',
        name: 'AI Banking Assistant',
        badge: 'AI / LLM',
        problem:
          'The banking platform needed an AI assistant for complex user requests and interaction with internal services.',
        role:
          'Integrated an LLM with internal services, designed the agent workflow, connected MCP tools and a feedback loop, and built answer quality evaluation.',
        result:
          'Delivered an AI Assistant to production for corporate clients and reduced request processing time by 3x.',
        stack: ['Java', 'Python', 'FastAPI', 'OpenAI API', 'MCP', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
      },
      {
        icon: 'database',
        name: 'History Operations Service',
        badge: 'Backend',
        problem:
          'The platform needed to store and serve operation history for 500k+ clients with high performance and data consistency.',
        role:
          'Designed and implemented the microservice from scratch, added pagination, reference-data caching, and idempotent update handling.',
        result:
          'Reduced database load by 70% through query optimization and caching while preserving availability and data integrity.',
        stack: ['Java 17', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Redis', 'MapStruct', 'Docker', 'Kubernetes'],
      },
      {
        icon: 'code',
        name: 'Internal AI Platform',
        badge: 'AI Platform',
        problem:
          'The engineering team needed AI-based tools to automate routine development tasks and improve code quality.',
        role:
          'Researched and introduced a multi-agent architecture, built tools for static analysis and code generation, and orchestrated AI agents.',
        result:
          'Automated repetitive engineering tasks and improved development speed and code quality through AI tooling.',
        stack: ['Python', 'LangChain', 'FastAPI', 'OpenAI API', 'SonarQube API', 'GitLab API', 'PostgreSQL', 'Docker'],
      },
    ],
    experience: [
      {
        period: '2023 - Present',
        role: 'Java Developer (AI direction)',
        company: 'Sberbank',
        bullets: [
          'Developing an AI Assistant for a corporate banking platform',
          'Integrating LLMs into business workflows and internal banking services',
          'Designing agent workflows and tool integrations',
          'Building FastAPI services for AI components and Java backend integration',
          'Contributing to scalable solution architecture',
        ],
      },
      {
        period: '2021 - 2023',
        role: 'Java Developer',
        company: 'Sberbank',
        bullets: [
          'Developed high-load microservices with Java 17 and Spring Boot',
          'Worked with Kafka for asynchronous service-to-service communication',
          'Optimized queries and introduced reference-data caching',
          'Configured CI/CD through Jenkins and GitLab CI',
          'Improved code quality and coverage with SonarQube and unit tests',
        ],
      },
    ],
    impact: [
      {
        icon: 'trophy',
        title: 'AI Assistant in production',
        text: 'Contributed to launching an AI Assistant for a banking platform. The project is in production and reaches 500k+ users.',
      },
      {
        icon: 'rocket',
        title: '3x faster processing',
        text: 'Reduced request processing time from 15 to 3 seconds through workflow optimization and caching.',
      },
      {
        icon: 'chart',
        title: '70% less DB load',
        text: 'Reduced database load by 70% through query optimization and reference-data caching.',
      },
      {
        icon: 'shield',
        title: '85% critical coverage',
        text: 'Raised coverage for critical code through unit and integration tests tracked in SonarQube.',
      },
    ],
    skills: [
      {
        title: 'Backend',
        items: ['Java 17', 'Spring Boot', 'Spring Data', 'REST', 'gRPC', 'JDBC', 'JUnit', 'Kafka', 'RabbitMQ', 'PostgreSQL', 'Redis', 'MapStruct'],
      },
      {
        title: 'AI / LLM',
        items: ['OpenAI API', 'LangChain', 'MCP', 'Agent Systems', 'RAG', 'Prompt Engineering', 'Evaluation Frameworks'],
      },
      {
        title: 'Data',
        items: ['PostgreSQL', 'ClickHouse', 'Redis', 'Elasticsearch'],
      },
      {
        title: 'DevOps',
        items: ['Docker', 'Kubernetes', 'Helm', 'Jenkins', 'GitLab CI', 'SonarQube', 'Nexus', 'Linux', 'Terraform basic'],
      },
      {
        title: 'Tools',
        items: ['IntelliJ IDEA', 'Git', 'Postman', 'Swagger', 'Confluence', 'Jira', 'DataGrip'],
      },
    ],
    about: {
      text:
        'I enjoy building systems at the intersection of Backend Engineering and AI. I continuously explore new technologies and apply them in real products. I write about AI, software development, architecture, and automation.',
      focus: ['AI Engineering', 'Agent Systems', 'Developer Automation', 'Backend Architecture'],
    },
    links: [
      {
        label: 'github.com/VladBigBrain',
        href: sharedContacts.github,
        kind: 'github',
      },
      {
        label: 't.me/VladBigBrain',
        href: sharedContacts.telegram,
        kind: 'telegram',
      },
      {
        label: 'linkedin.com/in/vladislav',
        href: sharedContacts.linkedin,
        kind: 'link',
      },
      {
        label: 'linktr.ee/vladbigbrain_dev',
        href: sharedContacts.linktree,
        kind: 'link',
      },
    ],
  },
} satisfies Record<Language, ResumeContent>
