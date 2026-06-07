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

export const resume = {
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
      href: 'https://t.me/VladBigBrain',
      kind: 'telegram',
      primary: true,
    },
    {
      label: 'Email',
      href: 'mailto:101448509+VladBigBrain@users.noreply.github.com',
      kind: 'email',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/VladBigBrain',
      kind: 'github',
    },
  ] satisfies ContactLink[],
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
  ] satisfies Metric[],
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
  ] satisfies Project[],
  experience: [
    {
      period: '2023 - Present',
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
  ] satisfies Experience[],
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
  ] satisfies Impact[],
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
  ] satisfies SkillGroup[],
  about: {
    text:
      'Увлечен созданием систем на стыке Backend Engineering и AI. Постоянно исследую новые технологии и применяю их в реальных продуктах. Пишу статьи об AI, разработке, архитектуре и автоматизации.',
    focus: ['AI Engineering', 'Agent Systems', 'Developer Automation', 'Backend Architecture'],
  },
  links: [
    {
      label: 'github.com/VladBigBrain',
      href: 'https://github.com/VladBigBrain',
      kind: 'github',
    },
    {
      label: 't.me/VladBigBrain',
      href: 'https://t.me/VladBigBrain',
      kind: 'telegram',
    },
    {
      label: 'linkedin.com/in/vladislav',
      href: 'https://linkedin.com/in/vladislav',
      kind: 'link',
    },
    {
      label: 'linktr.ee/vladbigbrain_dev',
      href: 'https://linktr.ee/vladbigbrain_dev',
      kind: 'link',
    },
  ] satisfies ContactLink[],
}
