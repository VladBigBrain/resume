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
  icon: 'history' | 'profile' | 'ai-agent' | 'fees' | 'account-lock'
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
  telegram: 'https://t.me/Vometelica',
  telegramChannel: 'https://t.me/+UGgerP1xfy4yZGQy',
  email: 'mailto:kykaru@outlook.com',
  github: 'https://github.com/VladBigBrain',
  linkedin: 'https://linkedin.com/in/vladislav',
  linktree: 'https://linktr.ee/vladmetelitsa',
}

export const resumes = {
  ru: {
    meta: {
      lang: 'ru',
      title: 'Vladislav Metelitsa | Java Backend Engineer',
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
      name: 'Vladislav Metelitsa',
      title: 'Java Backend Engineer',
      headline: 'создаю AI-системы для банковских продуктов.',
      availability: 'Доступен для Backend / AI Engineer ролей',
      location: 'Москва, Россия',
      stack: ['Java 17 / 8', 'Spring Boot/Data/Web', 'Kafka', 'PostgreSQL', 'AI Agents', 'MCP', 'LLM Integration'],
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
        icon: 'zap',
        value: '100 TPS',
        label: 'пропускная способность продуктовых сервисов',
      },
      {
        icon: 'users',
        value: '3',
        label: 'продукта с нуля до production',
      },
      {
        icon: 'shield',
        value: 'DDD/TDD',
        label: 'архитектура, тесты и agent-driven подход',
      },
      {
        icon: 'database',
        value: 'НТ',
        label: 'оптимизация и нагрузочное тестирование',
      },
    ],
    projects: [
      {
        icon: 'history',
        name: 'История операций',
        badge: 'Backend',
        problem:
          'Клиентам и внутренним системам нужен быстрый доступ к истории операций с фильтрами, пагинацией и консистентными данными по счетам и картам.',
        role:
          'Написал сервис с нуля: архитектура, DDD, Clean Architecture, модульный монолит, TDD, API-контракты, Spring backend, Kafka-интеграции, DevOps-настройки, release и production support.',
        result:
          'Довел решение от прототипа до production и ускорил вывод истории операций с двух кварталов до одного. Сервис выдерживает высокую нагрузку и снижает нагрузку на БД за счет оптимизации запросов.',
        stack: ['Java 17', 'Spring Boot', 'Spring Data', 'Spring Web', 'Kafka', 'PostgreSQL', 'MapStruct', 'Docker', 'OpenShift', 'TDD'],
      },
      {
        icon: 'profile',
        name: 'Профиль клиента',
        badge: 'Backend',
        problem:
          'Банковским каналам нужен единый профиль клиента с актуальными персональными данными, статусами, связями с продуктами и быстрым доступом для смежных сервисов.',
        role:
          'Собрал сервис с нуля: архитектура, DDD-модель, Clean Architecture, модульный монолит, Spring backend, API-контракты, TDD, DevOps pipeline и production release.',
        result:
          'Профиль прошел путь от прототипа до production и стал единой точкой доступа к клиентским данным для продуктовых команд.',
        stack: ['Java 17', 'Spring Boot', 'Spring Data', 'Spring Web', 'REST', 'Kafka', 'PostgreSQL', 'OpenAPI', 'JUnit', 'Mockito'],
      },
      {
        icon: 'ai-agent',
        name: 'AI Агент Транзакционный',
        badge: 'AI / Agents',
        problem:
          'Пользователям и операторам нужен интеллектуальный помощник, который понимает вопросы по транзакциям и безопасно обращается к внутренним банковским сервисам.',
        role:
          'Вел решение от прототипа до production: агентная архитектура, Clean Architecture, LLM-интеграция со Spring backend-сервисами, tool-calling, DevOps, release и TDD-подход к проверкам.',
        result:
          'AI-агент помогает разбирать транзакционные кейсы быстрее, снижает ручную нагрузку и поддерживает контролируемый доступ к банковским данным.',
        stack: ['Java 17', 'Spring Boot', 'Spring Data', 'Spring Web', 'Python', 'FastAPI', 'OpenAI API', 'MCP', 'PostgreSQL', 'Docker', 'OpenShift'],
      },
      {
        icon: 'fees',
        name: 'Корректировка комиссий',
        badge: 'Debit / Credit',
        problem:
          'Дебетовым и кредитным продуктам нужен надежный механизм перерасчета и корректировки комиссий с прозрачной историей изменений и контролем повторной обработки.',
        role:
          'Разрабатывал сервисную логику корректировок на Java 8 и Spring, модульный монолит, идемпотентные операции, DDD-бизнес-правила, интеграции с продуктовыми сервисами и TDD-тесты.',
        result:
          'Сервис снизил количество ручных операций, обеспечил контролируемую корректировку комиссий и повысил прозрачность обработки спорных начислений.',
        stack: ['Java 8', 'Spring Boot', 'Spring Data', 'Spring Web', 'Kafka', 'PostgreSQL', 'JUnit', 'Mockito', 'MapStruct', 'OpenAPI'],
      },
      {
        icon: 'account-lock',
        name: 'Сервис блокировки расчетных счетов',
        badge: 'Core Banking',
        problem:
          'Банковским процессам нужен централизованный сервис для блокировки и разблокировки расчетных счетов с учетом статусов, оснований и интеграций с внешними системами.',
        role:
          'Проектировал backend-процессы блокировок на Java 17 и Spring, Clean Architecture, модульный монолит, статусы жизненного цикла, DDD-агрегаты, аудит операций, интеграционные события и API для внутренних потребителей.',
        result:
          'Сервис унифицировал процесс блокировки счетов, повысил надежность операций и упростил контроль статусов для смежных банковских систем.',
        stack: ['Java 17', 'Spring Boot', 'Spring Data', 'Spring Web', 'Kafka', 'PostgreSQL', 'REST', 'Docker', 'OpenShift'],
      },
    ],
    experience: [
      {
        period: '2023 - Сейчас',
        role: 'Java Developer',
        company: 'Сбербанк',
        bullets: [
          'Около 2 лет коммерческого опыта в Сбере: backend-разработка банковских сервисов на Java и Spring',
          'За этот период реализовал основные проекты: История операций, Профиль клиента, AI Агент Транзакционный, Корректировка комиссий и сервис блокировки расчетных счетов',
          'Вел задачи полным циклом: прототип, архитектура, разработка, TDD-тесты, DevOps-настройки, release и production support',
          'Применял DDD, Clean Architecture и модульный монолит для сервисов с банковской бизнес-логикой',
          'Интегрировал Kafka, PostgreSQL, OpenShift, CI/CD и внутренние банковские сервисы',
        ],
      },
    ],
    impact: [
      {
        icon: 'trophy',
        title: '3 продукта с нуля до production',
        text: 'Полностью провел 3 продукта от прототипа и архитектуры до разработки, DevOps-настроек, release и production support.',
      },
      {
        icon: 'rocket',
        title: '100 TPS на продуктовых сервисах',
        text: 'Выводил банковские сервисы на целевую производительность до 100 TPS и проверял стабильность под продуктовой нагрузкой.',
      },
      {
        icon: 'chart',
        title: 'Оптимизация и нагрузочное тестирование',
        text: 'Самостоятельно настроил и провел НТ, оптимизировал работу сервисов, SQL-запросы, индексы и read-модели, фиксировал узкие места до release.',
      },
      {
        icon: 'shield',
        title: 'DDD, TDD и AI-агенты',
        text: 'Успешно применил DDD, TDD, Clean Architecture и агентный подход для сервисов с банковской бизнес-логикой и AI-интеграциями.',
      },
    ],
    skills: [
      {
        title: 'Backend',
        items: ['Java 17', 'Java 8', 'Spring Boot', 'Spring Data', 'Spring Web', 'Spring Test', 'REST', 'gRPC', 'JDBC', 'JUnit', 'Mockito', 'Kafka', 'RabbitMQ', 'PostgreSQL', 'MapStruct'],
      },
      {
        title: 'AI / LLM',
        items: ['OpenAI API', 'LangChain', 'MCP', 'Agent Systems', 'RAG', 'Prompt Engineering', 'Evaluation Frameworks'],
      },
      {
        title: 'Data',
        items: ['PostgreSQL', 'ClickHouse', 'Elasticsearch', 'SQL optimization', 'Indexes'],
      },
      {
        title: 'DevOps',
        items: ['Docker', 'OpenShift', 'Helm', 'Jenkins', 'GitLab CI', 'SonarQube', 'Nexus', 'Linux', 'Terraform basic'],
      },
      {
        title: 'Tools',
        items: ['IntelliJ IDEA', 'Git', 'Postman', 'Swagger', 'Confluence', 'Jira', 'DataGrip', 'TDD', 'DDD', 'Clean Architecture', 'Modular Monolith'],
      },
    ],
    about: {
      text:
        'Увлечен созданием систем на стыке Backend Engineering и AI. Постоянно исследую новые технологии и применяю их в реальных продуктах. Пишу статьи об AI, разработке, архитектуре и автоматизации.',
      focus: ['AI Engineering', 'Agent Systems', 'DDD', 'Clean Architecture', 'Modular Monolith'],
    },
    links: [
      {
        label: 'github.com/VladBigBrain',
        href: sharedContacts.github,
        kind: 'github',
      },
      {
        label: 'Telegram канал',
        href: sharedContacts.telegramChannel,
        kind: 'telegram',
      },
      {
        label: 'linkedin.com/in/vladislav',
        href: sharedContacts.linkedin,
        kind: 'link',
      },
      {
        label: 'linktr.ee/vladmetelitsa',
        href: sharedContacts.linktree,
        kind: 'link',
      },
    ],
  },
  en: {
    meta: {
      lang: 'en',
      title: 'Vladislav Metelitsa | Java Backend Engineer',
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
      name: 'Vladislav Metelitsa',
      title: 'Java Backend Engineer',
      headline: 'building AI systems for banking products.',
      availability: 'Available for Backend / AI Engineer roles',
      location: 'Moscow, Russia',
      stack: ['Java 17 / 8', 'Spring Boot/Data/Web', 'Kafka', 'PostgreSQL', 'AI Agents', 'MCP', 'LLM Integration'],
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
        icon: 'zap',
        value: '100 TPS',
        label: 'product service throughput',
      },
      {
        icon: 'users',
        value: '3',
        label: 'products built from scratch to production',
      },
      {
        icon: 'shield',
        value: 'DDD/TDD',
        label: 'architecture, tests, and agent-driven approach',
      },
      {
        icon: 'database',
        value: 'Load tests',
        label: 'optimization and performance validation',
      },
    ],
    projects: [
      {
        icon: 'history',
        name: 'Operation History',
        badge: 'Backend',
        problem:
          'Customers and internal systems needed fast access to operation history with filters, pagination, and consistent account and card data.',
        role:
          'Built the service from scratch: architecture, DDD, Clean Architecture, modular monolith, TDD, API contracts, Spring backend implementation, Kafka integrations, DevOps setup, release, and production support.',
        result:
          'Took the solution from prototype to production and reduced the Operation History delivery timeline from two quarters to one. The service handles high load and reduces database pressure through query optimization.',
        stack: ['Java 17', 'Spring Boot', 'Spring Data', 'Spring Web', 'Kafka', 'PostgreSQL', 'MapStruct', 'Docker', 'OpenShift', 'TDD'],
      },
      {
        icon: 'profile',
        name: 'Client Profile',
        badge: 'Backend',
        problem:
          'Banking channels needed a unified client profile with current personal data, statuses, product links, and fast access for dependent services.',
        role:
          'Built the service from scratch: architecture, DDD model, Clean Architecture, modular monolith, Spring backend, API contracts, TDD, DevOps pipeline, and production release.',
        result:
          'Took the profile from prototype to production and made it a single access point for client data across product teams.',
        stack: ['Java 17', 'Spring Boot', 'Spring Data', 'Spring Web', 'REST', 'Kafka', 'PostgreSQL', 'OpenAPI', 'JUnit', 'Mockito'],
      },
      {
        icon: 'ai-agent',
        name: 'Transactional AI Agent',
        badge: 'AI / Agents',
        problem:
          'Users and operators needed an intelligent assistant that understands transaction questions and safely works with internal banking services.',
        role:
          'Led the solution from prototype to production: agent architecture, Clean Architecture, LLM integration with Spring backend services, tool-calling, DevOps, release, and TDD-based checks.',
        result:
          'The AI agent helps resolve transaction cases faster, reduces manual workload, and keeps access to banking data controlled.',
        stack: ['Java 17', 'Spring Boot', 'Spring Data', 'Spring Web', 'Python', 'FastAPI', 'OpenAI API', 'MCP', 'PostgreSQL', 'Docker', 'OpenShift'],
      },
      {
        icon: 'fees',
        name: 'Fee Adjustment Service',
        badge: 'Debit / Credit',
        problem:
          'Debit and credit products needed a reliable mechanism for recalculating and adjusting fees with transparent history and safe reprocessing.',
        role:
          'Built adjustment service logic with Java 8 and Spring, modular monolith, idempotent operations, DDD business rules, product-service integrations, and TDD tests.',
        result:
          'The service reduced manual operations, enabled controlled fee adjustments, and improved transparency for disputed charges.',
        stack: ['Java 8', 'Spring Boot', 'Spring Data', 'Spring Web', 'Kafka', 'PostgreSQL', 'JUnit', 'Mockito', 'MapStruct', 'OpenAPI'],
      },
      {
        icon: 'account-lock',
        name: 'Settlement Account Blocking Service',
        badge: 'Core Banking',
        problem:
          'Banking workflows needed a centralized service for blocking and unblocking settlement accounts with statuses, reasons, and external integrations.',
        role:
          'Designed Java 17 and Spring backend blocking workflows, Clean Architecture, modular monolith, lifecycle statuses, DDD aggregates, operation audit, integration events, and APIs for internal consumers.',
        result:
          'The service unified account-blocking workflows, improved operation reliability, and simplified status control for related banking systems.',
        stack: ['Java 17', 'Spring Boot', 'Spring Data', 'Spring Web', 'Kafka', 'PostgreSQL', 'REST', 'Docker', 'OpenShift'],
      },
    ],
    experience: [
      {
        period: '2023 - Present',
        role: 'Java Developer',
        company: 'Sberbank',
        bullets: [
          'About 2 years of commercial experience at Sberbank, focused on Java and Spring backend for banking products',
          'Delivered the main projects during this period: Operation History, Client Profile, Transactional AI Agent, Fee Adjustment Service, and Settlement Account Blocking Service',
          'Owned the full cycle: prototype, architecture, development, TDD tests, DevOps setup, release, and production support',
          'Applied DDD, Clean Architecture, and modular monolith patterns to banking-domain services',
          'Integrated Kafka, PostgreSQL, OpenShift, CI/CD, and internal banking services',
        ],
      },
    ],
    impact: [
      {
        icon: 'trophy',
        title: '3 products from scratch to production',
        text: 'Owned 3 products end to end: prototype, architecture, development, DevOps setup, release, and production support.',
      },
      {
        icon: 'rocket',
        title: '100 TPS on product services',
        text: 'Brought banking services to target throughput up to 100 TPS and validated stability under product load.',
      },
      {
        icon: 'chart',
        title: 'Optimization and load testing',
        text: 'Independently set up and ran load tests, optimized service behavior, SQL queries, indexes, and read models, and fixed bottlenecks before release.',
      },
      {
        icon: 'shield',
        title: 'DDD, TDD, and AI agents',
        text: 'Successfully applied DDD, TDD, Clean Architecture, and agent-based patterns for banking-domain services and AI integrations.',
      },
    ],
    skills: [
      {
        title: 'Backend',
        items: ['Java 17', 'Java 8', 'Spring Boot', 'Spring Data', 'Spring Web', 'Spring Test', 'REST', 'gRPC', 'JDBC', 'JUnit', 'Mockito', 'Kafka', 'RabbitMQ', 'PostgreSQL', 'MapStruct'],
      },
      {
        title: 'AI / LLM',
        items: ['OpenAI API', 'LangChain', 'MCP', 'Agent Systems', 'RAG', 'Prompt Engineering', 'Evaluation Frameworks'],
      },
      {
        title: 'Data',
        items: ['PostgreSQL', 'ClickHouse', 'Elasticsearch', 'SQL optimization', 'Indexes'],
      },
      {
        title: 'DevOps',
        items: ['Docker', 'OpenShift', 'Helm', 'Jenkins', 'GitLab CI', 'SonarQube', 'Nexus', 'Linux', 'Terraform basic'],
      },
      {
        title: 'Tools',
        items: ['IntelliJ IDEA', 'Git', 'Postman', 'Swagger', 'Confluence', 'Jira', 'DataGrip', 'TDD', 'DDD', 'Clean Architecture', 'Modular Monolith'],
      },
    ],
    about: {
      text:
        'I enjoy building systems at the intersection of Backend Engineering and AI. I continuously explore new technologies and apply them in real products. I write about AI, software development, architecture, and automation.',
      focus: ['AI Engineering', 'Agent Systems', 'DDD', 'Clean Architecture', 'Modular Monolith'],
    },
    links: [
      {
        label: 'github.com/VladBigBrain',
        href: sharedContacts.github,
        kind: 'github',
      },
      {
        label: 'Telegram channel',
        href: sharedContacts.telegramChannel,
        kind: 'telegram',
      },
      {
        label: 'linkedin.com/in/vladislav',
        href: sharedContacts.linkedin,
        kind: 'link',
      },
      {
        label: 'linktr.ee/vladmetelitsa',
        href: sharedContacts.linktree,
        kind: 'link',
      },
    ],
  },
} satisfies Record<Language, ResumeContent>
