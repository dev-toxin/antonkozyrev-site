// Site copy. Source of every fact: Anton's notebook (06 Карьера: resume, LinkedIn draft,
// cover letters, portfolio plan). Do not add numbers or skills that are not there.
// Empty link = not rendered (resume = hh.ru URL from Anton).

export type Lang = 'en' | 'ru';

export const links = {
  github: 'https://github.com/dev-toxin',
  terroir: 'https://github.com/dev-toxin/terroir-monorepo',
  sitefarm: 'https://github.com/dev-toxin/sitefarm-showcase',
  tapreply: 'https://www.tapreply.net',
  terroirSite: 'https://www.terroir-app.com',
  email: 'hello@antonkozyrev.dev',
  telegram: 'https://t.me/tokc_a',
  linkedin: 'https://www.linkedin.com/in/tokc/',
  resume: 'https://kaliningrad.hh.ru/resume/d6422a11ff0994ce8a0039ed1f546d58714a71',
};

type LinkRef = { href: string; label: string };

type Case = {
  id: string;
  title: string;
  tag: string;
  summary: string;
  facts: string[];
  stack: string;
  link?: LinkRef;
  live?: LinkRef;
  shot?: 'tapreply' | 'terroir';
};

type StackGroup = { group: string; items: string; where: LinkRef[] };

export type AppId = 'gsr' | 'lk' | 'zhabby' | 'jobline' | 'qworking' | 'mealhub' | 'greenfeed';

type App = {
  id: AppId;
  name: string;
  years: string;
  what: string;
  role: string;
  links: LinkRef[];
  badge?: string;
};

type ConsoleLine = { kind: 'cmd' | 'plan' | 'file' | 'ask' | 'ok'; text: string };

export type Copy = {
  htmlLang: string;
  path: string;
  title: string;
  description: string;
  nav: { cases: string; apps: string; stack: string; ai: string; contact: string };
  switchLabel: string;
  switchTitle: string;
  switchHref: string;
  hero: { name: string; role: string; lead: string; meta: string[]; stats: string[]; ctaPrimary: string; ctaSecondary: string };
  help: { title: string; nav: string; items: { title: string; text: string }[]; format: string; clientLink: { href: string; label: string } };
  casesTitle: string;
  cases: Case[];
  appsTitle: string;
  appsLead: string;
  apps: App[];
  stackTitle: string;
  stackLead: string;
  stack: StackGroup[];
  aiTitle: string;
  aiLead: string;
  ai: { title: string; text: string }[];
  toolsTitle: string;
  tools: { name: string; note: string; main?: boolean }[];
  console: { title: string; approve: string; reject: string; lines: ConsoleLine[] };
  contactTitle: string;
  contactLead: string;
  contactItems: { label: string; value: string; href: string }[];
  resumeLabel: string;
  footer: string;
};

export const copy: Record<Lang, Copy> = {
  en: {
    htmlLang: 'en',
    path: '/',
    title: 'Anton Kozyrev — Senior Flutter Developer · Go · LLM integrations',
    description:
      'Senior Flutter developer: 4.5+ years of commercial mobile development, sole mobile developer behind three products. Go backends and LLM features with guardrails. Open to projects and full-time offers.',
    nav: { cases: 'Work', apps: 'Apps', stack: 'Stack', ai: 'AI workflow', contact: 'Contact' },
    switchLabel: 'RU',
    switchTitle: 'Русская версия',
    switchHref: '/ru/',
    hero: {
      name: 'Anton Kozyrev',
      role: 'Senior Flutter Developer · Go · LLM integrations',
      lead:
        "Flutter developer with 4.5+ years of commercial mobile development. For the last three years I've been the sole mobile developer behind three products: architecture, stack, API contracts, releases. I build my own products end to end — Go backend, web, LLM integration, deployment.",
      meta: ['Kaliningrad, Russia · Remote', 'Open to projects and full-time offers'],
      stats: ['4.5+ yrs Flutter', '10 apps in the stores', '3 products solo'],
      ctaPrimary: 'See the work',
      ctaSecondary: 'Get in touch',
    },
    help: {
      title: 'What I can help with',
      nav: 'Services',
      items: [
        { title: 'Flutter features and releases', text: 'New screens and flows from Figma to the App Store and Google Play: state, API integration, push notifications, crash reporting.' },
        { title: 'Taking over Flutter code', text: "Picking up someone else's codebase, refactoring legacy code without stopping feature work, covering key logic with tests." },
        { title: 'Go backend and MVP API', text: 'REST API in Go with PostgreSQL and CI on GitHub Actions — enough to launch a product and validate the idea.' },
        { title: 'LLM features with guardrails', text: 'Budget limits, fact-checking and fallbacks: the model does not invent data and does not burn the budget.' },
      ],
      format: "Part-time project, long-term contract or a full-time role — tell me about the task, and I'll come back with a clear plan and estimate.",
      clientLink: { href: '/custom-development/', label: 'Custom development' },
    },
    casesTitle: 'Selected work',
    cases: [
      {
        id: 'mobile',
        title: 'Commercial mobile apps',
        tag: 'Flutter · 4.5+ years',
        summary:
          'Apps for contractors of a staffing service — GSR Rabota and Contractor Account (Личный кабинет исполнителя): onboarding, documents with SMS signing, shift booking, payouts and tax receipts. Sole mobile developer in the product team; the code is under NDA, the apps are in the stores — see Apps below.',
        facts: [
          '10 mobile apps in the stores — from greenfield launches to taking over code from other teams',
          'GSR Rabota — built from scratch: architecture, stack, API contracts with the backend, releases',
          'Contractor Account — migrated from native Android (Java) to Flutter at full feature parity, shipped on iOS and Android, new design; now maintaining version 3.x',
          'Feature-first Clean Architecture, Riverpod for state, API contracts co-designed with the backend team, real-time chat on Socket.IO, FCM push, Crashlytics, Remote Config',
          'Key logic covered with unit and integration tests; legacy refactoring without stopping feature work',
        ],
        stack: 'Flutter · Dart · Riverpod · GoRouter · Dio · Socket.IO · Firebase · AppMetrica · Drift/SQLite',
        link: { href: '#apps', label: 'Apps and screenshots' },
      },
      {
        id: 'sitefarm',
        title: 'sitefarm — data-driven site pipeline',
        tag: 'Go · LLM · static sites',
        summary:
          'A Go pipeline that turns open data into a content site: collect data (NOAA, PRISM) → generate text with an LLM → fact-check with a second model → build a static site.',
        facts: [
          'Pilot of ~2,100 pages; generation costs about 0.5 RUB (under one US cent) per page',
          'Numbers come from the data, never from the model; a second model fact-checks every text',
          '42 of 50 pages (84%) passed the automated fact check in the pilot run; a rejected page gets one automatic retry, and if it fails again it goes to a manual review queue and is never published',
          'Budget guard: the model is not called if the worst case would exceed the monthly limit',
          'Models compared on the real task — a reasoning model spent the whole token limit on reasoning and returned no answer, so it was rejected',
        ],
        stack: 'Go · Yandex AI Studio (gpt-oss-120b) · Hugo · Cloudflare',
        link: { href: links.sitefarm, label: 'Code: sitefarm-showcase' },
      },
      {
        id: 'terroir',
        title: 'Terroir — personal wine assistant',
        tag: 'Go · PostgreSQL · PWA · LLM',
        summary:
          'An assistant with memory: cellar, taste profile, wine matched to your own recipes. Retrieval-grounded answers: the code picks the data, the model only explains it.',
        facts: [
          'Answers are validated: the model cannot reference a bottle that is not in the cellar',
          'Monthly token budget and a fallback when the LLM fails',
          '90+ tests, CI on GitHub Actions',
        ],
        stack: 'Go · PostgreSQL/SQLite · PWA · OpenAI-compatible LLM client · site: Astro, EN/RU',
        link: { href: links.terroir, label: 'Code: terroir-monorepo' },
        live: { href: links.terroirSite, label: 'Live site ↗' },
        shot: 'terroir',
      },
      {
        id: 'tapreply',
        title: 'TapReply — replies to customer reviews',
        tag: 'B2B SaaS · in development',
        summary:
          'AI replies to reviews from several platforms for venues, in local languages. A Go core with platform adapters: a new review platform is a new adapter, not a rewrite.',
        facts: ['Go core + platform adapters', 'Flutter / PWA client', 'PostgreSQL'],
        stack: 'Go · Flutter · PWA · PostgreSQL · site: Astro, EN/RU',
        live: { href: links.tapreply, label: 'Live site ↗' },
        shot: 'tapreply',
      },
    ],
    appsTitle: 'Apps I built',
    appsLead: "The first two are my current role. The rest were built in parallel with it — I'm used to running several projects at once: separate repos, clear scopes, every app released to the stores.",
    apps: [
      {
        id: 'gsr', name: 'GSR Rabota', years: '2026', badge: 'Current role',
        what: 'New app for contractors of a staffing service: sign-up and documents, SMS signing, finding tasks and booking shifts, wallet and payouts, tax receipts for the self-employed, real-time support chat.',
        role: 'Sole mobile developer, built from scratch: feature-first Clean Architecture on Riverpod, choice of stack, API contracts with the backend, releases. Flutter · Riverpod · GoRouter · Dio · Socket.IO · Firebase · AppMetrica · Drift/SQLite.',
        links: [{ href: 'https://apps.apple.com/ru/app/id6771076516', label: 'App Store' }],
      },
      {
        id: 'lk', name: 'Contractor Account (Личный кабинет исполнителя)', years: '2025', badge: 'Current role',
        what: 'Contractor app of the same service: shift self-booking, documents with e-signing and receipts, profile and bank cards.',
        role: 'Migrated the native Android (Java) app to Flutter, shipped it on iOS and Android with a new design; maintaining and developing it — major version 3.x, moving the architecture to Riverpod.',
        links: [{ href: 'https://apps.apple.com/ru/app/id6748441402', label: 'App Store' }],
      },
      {
        id: 'zhabby', name: 'Zhabby', years: '2025',
        what: 'Short-video social network that rewards activity: personal feed, video upload, points for views, likes and comments, rewards exchange.',
        role: 'Second developer on the team: built every screen from Figma designs, connected API requests and state management in several sections. Published on the App Store and Google Play.',
        links: [{ href: 'https://apps.apple.com/ru/app/id6758106499', label: 'App Store' }, { href: 'https://zhabby.info/', label: 'zhabby.info' }],
      },
      {
        id: 'jobline', name: 'Jobline', years: '2023–2024',
        what: 'Platform for working with external contractors: contractor onboarding, documents and receipts, payouts with tax (NPD) withholding.',
        role: 'Built the mobile app from scratch.',
        links: [{ href: 'https://teleport.run/projects/jobline', label: 'Case study' }, { href: 'https://jobline.one/', label: 'jobline.one' }],
      },
      {
        id: 'qworking', name: 'Q-Working', years: '2023–2024',
        what: 'Service that finds contractors, handles deals and pays them.',
        role: 'Built the worker mobile app from scratch: onboarding, profile and services, orders and payouts.',
        links: [{ href: 'https://teleport.run/projects/q-working', label: 'Case study' }],
      },
      {
        id: 'mealhub', name: 'Mealhub', years: '2022–2023',
        what: 'Restaurant search on a map, table booking and food ordering.',
        role: 'Second developer: responsive UI from Figma, Google Maps API, state management, REST API integration, bug fixing and feature work.',
        links: [{ href: 'https://apps.apple.com/ru/app/mealhub/id1640713837', label: 'App Store' }],
      },
      {
        id: 'greenfeed', name: 'GreenFeed', years: '2022–2023',
        what: 'Feed product catalog and animal diet calculator for farmers.',
        role: 'Second developer: UI from Figma, state management, REST API integration, bug fixing and feature work.',
        links: [{ href: 'https://apps.apple.com/ru/app/greenfeed/id6453763960', label: 'App Store' }],
      },
    ],
    stackTitle: 'Stack',
    stackLead: 'Each skill points to where it is used — not a tag cloud.',
    stack: [
      {
        group: 'Mobile',
        items: 'Flutter, Dart, Riverpod, GoRouter, Dio, Socket.IO, Firebase (FCM, Crashlytics, Remote Config), Drift/SQLite',
        where: [{ href: '#mobile', label: 'Commercial apps' }, { href: '#tapreply', label: 'TapReply' }],
      },
      {
        group: 'Backend',
        items: 'Go, REST API, PostgreSQL, SQLite, CI/CD (GitHub Actions)',
        where: [{ href: links.terroir, label: 'terroir-monorepo' }, { href: links.sitefarm, label: 'sitefarm-showcase' }],
      },
      {
        group: 'LLM',
        items: 'OpenAI-compatible APIs, Yandex AI Studio, second-model fact-checking, budget limits, fallbacks',
        where: [{ href: '#sitefarm', label: 'sitefarm' }, { href: '#terroir', label: 'Terroir' }],
      },
      {
        group: 'Web & infra',
        items: 'Astro, Hugo, PWA, Cloudflare (Pages, DNS), Linux VPS',
        where: [{ href: '#sitefarm', label: 'sitefarm' }, { href: '#top', label: 'this site' }],
      },
      {
        group: 'Architecture & quality',
        items: 'Clean Architecture, feature-first, unit and integration tests, legacy code',
        where: [{ href: '#mobile', label: 'Commercial apps' }, { href: links.terroir, label: 'Terroir tests' }],
      },
    ],
    aiTitle: 'How I work with AI agents',
    aiLead: 'Agents take on the volume of work; responsibility for the result stays with me.',
    ai: [
      {
        title: 'Agent in the IDE, plan first',
        text: 'My daily driver is Veai (AI coding agent for JetBrains IDEs), in IntelliJ. It reads the project, edits code, runs tests and commands. Plan and decomposition come first, code second; the agent keeps project memory, my own skills and rules. I have also worked with Cursor and GitHub Copilot; Claude Code and OpenAI Codex follow the same agentic workflow — plan → diff → tests — so switching between them is quick.',
      },
      {
        title: 'Parallel agents, review before merge',
        text: 'One session: 6 agents in parallel, each in its own repo (Astro/Hugo sites, PWA clients, Go backend), ~2 hours of staged work with acceptance criteria. Then I review: tests, builds, commit authorship, secret scan. Within one repo, parallel agents get separate git worktrees. Nothing lands in main without this review.',
      },
      {
        title: 'LLMs inside the product, with guardrails',
        text: 'In sitefarm texts are generated through Yandex AI Studio and checked by a second model; in Terroir code picks the data and every answer is validated against the database. Both have hard monthly budgets.',
      },
    ],
    toolsTitle: 'Agent toolchain',
    tools: [
      { name: 'Veai', note: 'daily driver', main: true },
      { name: 'Cursor', note: 'used' },
      { name: 'GitHub Copilot', note: 'used' },
      { name: 'Claude Code', note: 'same workflow' },
      { name: 'OpenAI Codex', note: 'same workflow' },
    ],
    console: {
      title: 'agent · session',
      approve: 'Approve',
      reject: 'Reject',
      lines: [
        { kind: 'cmd', text: 'task: add a monthly budget guard to the LLM client' },
        { kind: 'plan', text: 'plan: check worst-case cost before each call → fail fast → test' },
        { kind: 'file', text: '~ internal/llm/client.go' },
        { kind: 'file', text: '+ internal/llm/budget.go' },
        { kind: 'file', text: '+ internal/llm/budget_test.go' },
        { kind: 'ask', text: '3 files to change. Approve?' },
        { kind: 'ok', text: 'go test ./... — ok' },
        { kind: 'ok', text: 'diff reviewed · secrets scan clean' },
      ],
    },
    contactTitle: 'Contact',
    contactLead:
      "Tell me about your task — a project, a long-term contract or a full-time role. Before moving into development I spent 5 years running projects and led a department of 6.",
    contactItems: [
      { label: 'Email', value: links.email, href: `mailto:${links.email}` },
      { label: 'Telegram', value: '@tokc_a', href: links.telegram },
      { label: 'GitHub', value: 'github.com/dev-toxin', href: links.github },
      ...(links.linkedin ? [{ label: 'LinkedIn', value: 'linkedin.com/in/tokc', href: links.linkedin }] : []),
    ],
    resumeLabel: 'Résumé on hh.ru',
    footer: 'Anton Kozyrev',
  },
  ru: {
    htmlLang: 'ru',
    path: '/ru/',
    title: 'Антон Козырев — Senior Flutter Developer · Go · LLM-интеграции',
    description:
      'Senior Flutter-разработчик: 4,5+\u00A0года коммерческой мобильной разработки, единственный мобильный разработчик трёх продуктов. Go-бэкенд и LLM-фичи с ограничителями. Открыт к проектам и предложениям о работе.',
    nav: { cases: 'Проекты', apps: 'Приложения', stack: 'Стек', ai: 'Работа с AI', contact: 'Контакты' },
    switchLabel: 'EN',
    switchTitle: 'English version',
    switchHref: '/',
    hero: {
      name: 'Антон Козырев',
      role: 'Senior Flutter Developer · Go · LLM-интеграции',
      lead:
        'Flutter-разработчик, 4,5+\u00A0года коммерческой мобильной разработки. Последние три года — единственный мобильный разработчик трёх продуктов: архитектура, стек, API-контракты, релизы. Свои продукты делаю целиком: Go-бэкенд, веб, LLM-интеграции, деплой.',
      meta: ['Калининград · удалённо', 'Открыт к проектам и предложениям о работе'],
      stats: ['4,5+\u00A0года Flutter', '10\u00A0приложений в сторах', '3\u00A0продукта в одиночку'],
      ctaPrimary: 'Смотреть проекты',
      ctaSecondary: 'Связаться',
    },
    help: {
      title: 'С чем могу помочь',
      nav: 'Услуги',
      items: [
        { title: 'Фичи и релизы на Flutter', text: 'Новые экраны и сценарии от макета в Figma до App Store и Google Play: состояние, интеграция с API, push-уведомления, отчёты о сбоях.' },
        { title: 'Подхват чужого Flutter-кода', text: 'Разберусь в чужой кодовой базе, проведу рефакторинг легаси-кода без остановки разработки, покрою ключевую логику тестами.' },
        { title: 'Go-бэкенд и MVP API', text: 'REST API на Go с PostgreSQL и CI на GitHub Actions — достаточно, чтобы запустить продукт и проверить идею.' },
        { title: 'LLM-фичи с ограничителями', text: 'Лимит бюджета, проверка фактов и запасной сценарий: модель не выдумывает данные и не сжигает бюджет.' },
      ],
      format: 'Проект, долгий контракт или работа в штат — расскажите о задаче, а я вернусь с понятным планом и оценкой.',
      clientLink: { href: '/ru/razrabotka-saytov-i-prilozheniy-kaliningrad/', label: 'Разработка на заказ' },
    },
    casesTitle: 'Проекты',
    cases: [
      {
        id: 'mobile',
        title: 'Коммерческие мобильные приложения',
        tag: 'Flutter · 4,5+ года',
        summary:
          'Приложения для исполнителей сервиса подбора персонала — GSR Работа и Личный кабинет исполнителя: регистрация, документы с подписью по SMS, запись на смены, выплаты, налоговые чеки. Единственный мобильный разработчик в продуктовой команде; код под NDA, приложения — в сторах, см. блок «Приложения» ниже.',
        facts: [
          '10\u00A0мобильных приложений в сторах — от запуска с нуля до доработки после других команд',
          'GSR Работа — с нуля: архитектура, стек, API-контракты с бэкендом, релизы',
          'Личный кабинет исполнителя — перенёс с нативного Android (Java) на Flutter без потери функциональности, выпустил на iOS и Android с новым дизайном; сейчас веду версию 3.x',
          'Feature-first и Clean Architecture, состояние на Riverpod, API-контракты вместе с бэкендом, чат в реальном времени на Socket.IO, push (FCM), Crashlytics, Remote Config',
          'Ключевая логика покрыта unit- и integration-тестами; рефакторинг легаси-кода без остановки разработки',
        ],
        stack: 'Flutter · Dart · Riverpod · GoRouter · Dio · Socket.IO · Firebase · AppMetrica · Drift/SQLite',
        link: { href: '#apps', label: 'Приложения и скриншоты' },
      },
      {
        id: 'sitefarm',
        title: 'sitefarm — конвейер сайтов на данных',
        tag: 'Go · LLM · статические сайты',
        summary:
          'Go-конвейер, который превращает открытые данные в контентный сайт: сбор данных (NOAA, PRISM) → генерация текстов через LLM → проверка фактов второй моделью → сборка статического сайта.',
        facts: [
          'Пилот — около 2\u00A0100 страниц, генерация стоит примерно 0,5\u00A0₽ за страницу',
          'Числа берутся только из данных, а не от модели; вторая модель сверяет каждый текст с фактами',
          '42 из 50 страниц (84%) прошли автоматическую проверку фактов в пилоте; отклонённая страница получает один автоповтор, а при повторном отказе уходит в ручную очередь и не публикуется',
          'Защита бюджета: модель не вызывается, если худший сценарий выходит за месячный лимит',
          'Модели сравнивал на своей задаче — рассуждающая модель потратила весь лимит токенов на рассуждения и не вернула ответа, поэтому отбракована',
        ],
        stack: 'Go · Yandex AI Studio (gpt-oss-120b) · Hugo · Cloudflare',
        link: { href: links.sitefarm, label: 'Код: sitefarm-showcase' },
      },
      {
        id: 'terroir',
        title: 'Terroir — персональный винный помощник',
        tag: 'Go · PostgreSQL · PWA · LLM',
        summary:
          'Помощник с памятью: погреб, вкусовой профиль, подбор вина к своим рецептам. Ответы с опорой на данные: данные подбирает код, модель только объясняет.',
        facts: [
          'Ответ проверяется: модель не может сослаться на бутылку, которой нет в погребе',
          'Месячный бюджет на токены и запасной сценарий при сбое LLM',
          '90+ тестов, CI на GitHub Actions',
        ],
        stack: 'Go · PostgreSQL/SQLite · PWA · OpenAI-совместимый клиент LLM · сайт: Astro, EN/RU',
        link: { href: links.terroir, label: 'Код: terroir-monorepo' },
        live: { href: links.terroirSite, label: 'Сайт ↗' },
        shot: 'terroir',
      },
      {
        id: 'tapreply',
        title: 'TapReply — ответы на отзывы',
        tag: 'B2B SaaS · в разработке',
        summary:
          'AI-ответы на отзывы с нескольких площадок для заведений на локальных языках. Ядро на Go с адаптерами площадок: новая площадка — это новый адаптер, а не переписывание.',
        facts: ['Ядро на Go + адаптеры площадок', 'Клиент на Flutter / PWA', 'PostgreSQL'],
        stack: 'Go · Flutter · PWA · PostgreSQL · сайт: Astro, EN/RU',
        live: { href: links.tapreply, label: 'Сайт ↗' },
        shot: 'tapreply',
      },
    ],
    appsTitle: 'Приложения, которые я делал',
    appsLead: 'Первые два — моя текущая роль, остальные сделаны параллельно с ней: привык вести несколько проектов одновременно — отдельные репозитории, понятные границы задач, каждое приложение дошло до стора.',
    apps: [
      {
        id: 'gsr', name: 'GSR Работа', years: '2026', badge: 'Текущая роль',
        what: 'Новое приложение для исполнителей сервиса подбора персонала: регистрация и документы, подписание по SMS, поиск заданий и запись на смены, кошелёк и выплаты, налоговые чеки самозанятых, чат с поддержкой в реальном времени.',
        role: 'Единственный мобильный разработчик, с нуля: архитектура feature-first и Clean Architecture на Riverpod, выбор стека, API-контракты с бэкендом, релизы. Flutter · Riverpod · GoRouter · Dio · Socket.IO · Firebase · AppMetrica · Drift/SQLite.',
        links: [{ href: 'https://apps.apple.com/ru/app/id6771076516', label: 'App Store' }],
      },
      {
        id: 'lk', name: 'Личный кабинет исполнителя', years: '2025', badge: 'Текущая роль',
        what: 'Приложение исполнителя того же сервиса: самозапись на смены, документы с электронной подписью и чеки, профиль и банковские карты.',
        role: 'Перенёс нативное Android-приложение (Java) на Flutter, выпустил на iOS и Android с новым дизайном; развиваю и поддерживаю — мажорная версия 3.x, перевожу архитектуру на Riverpod.',
        links: [{ href: 'https://apps.apple.com/ru/app/id6748441402', label: 'App Store' }],
      },
      {
        id: 'zhabby', name: 'Zhabby', years: '2025',
        what: 'Социальная сеть коротких видео с вознаграждением за активность: персональная лента, загрузка видео, баллы за просмотры, лайки и комментарии, обмен баллов на награды.',
        role: 'Второй разработчик в команде: сверстал все экраны по макетам Figma, в ряде разделов подключал API и управление состоянием. Опубликовано в App Store и Google Play.',
        links: [{ href: 'https://apps.apple.com/ru/app/id6758106499', label: 'App Store' }, { href: 'https://zhabby.info/', label: 'zhabby.info' }],
      },
      {
        id: 'jobline', name: 'Jobline', years: '2023–2024',
        what: 'Платформа для работы с внешними исполнителями: регистрация исполнителей, документы и чеки по сделкам, выплаты с уплатой НПД.',
        role: 'Мобильное приложение с нуля.',
        links: [{ href: 'https://teleport.run/projects/jobline', label: 'Кейс' }, { href: 'https://jobline.one/', label: 'jobline.one' }],
      },
      {
        id: 'qworking', name: 'Q-Working', years: '2023–2024',
        what: 'Сервис для поиска исполнителей, заключения сделок и выплат исполнителям.',
        role: 'Мобильное приложение исполнителя с нуля: регистрация, профиль и услуги, заказы и выплаты.',
        links: [{ href: 'https://teleport.run/projects/q-working', label: 'Кейс' }],
      },
      {
        id: 'mealhub', name: 'Mealhub', years: '2022–2023',
        what: 'Поиск ресторанов на карте, бронирование столов и заказ еды.',
        role: 'Второй разработчик: адаптивная вёрстка по Figma, Google Maps API, состояние приложения, интеграция с REST API, исправление ошибок и доработки.',
        links: [{ href: 'https://apps.apple.com/ru/app/mealhub/id1640713837', label: 'App Store' }],
      },
      {
        id: 'greenfeed', name: 'GreenFeed', years: '2022–2023',
        what: 'Каталог кормовой продукции и расчёт рациона для животных для фермеров.',
        role: 'Второй разработчик: вёрстка по Figma, состояние приложения, интеграция с REST API, исправление ошибок и доработки.',
        links: [{ href: 'https://apps.apple.com/ru/app/greenfeed/id6453763960', label: 'App Store' }],
      },
    ],
    stackTitle: 'Стек',
    stackLead: 'У каждого навыка — ссылка на то, где он применён, а не облако тегов.',
    stack: [
      {
        group: 'Мобайл',
        items: 'Flutter, Dart, Riverpod, GoRouter, Dio, Socket.IO, Firebase (FCM, Crashlytics, Remote Config), Drift/SQLite',
        where: [{ href: '#mobile', label: 'Коммерческие приложения' }, { href: '#tapreply', label: 'TapReply' }],
      },
      {
        group: 'Бэкенд',
        items: 'Go, REST API, PostgreSQL, SQLite, CI/CD (GitHub Actions)',
        where: [{ href: links.terroir, label: 'terroir-monorepo' }, { href: links.sitefarm, label: 'sitefarm-showcase' }],
      },
      {
        group: 'LLM',
        items: 'OpenAI-совместимые API, Yandex AI Studio, проверка фактов второй моделью, лимиты бюджета, запасные сценарии',
        where: [{ href: '#sitefarm', label: 'sitefarm' }, { href: '#terroir', label: 'Terroir' }],
      },
      {
        group: 'Веб и инфраструктура',
        items: 'Astro, Hugo, PWA, Cloudflare (Pages, DNS), Linux VPS',
        where: [{ href: '#sitefarm', label: 'sitefarm' }, { href: '#top', label: 'этот сайт' }],
      },
      {
        group: 'Архитектура и качество',
        items: 'Clean Architecture, feature-first, unit- и integration-тесты, легаси-код',
        where: [{ href: '#mobile', label: 'Коммерческие приложения' }, { href: links.terroir, label: 'тесты Terroir' }],
      },
    ],
    aiTitle: 'Как я работаю с AI-агентами',
    aiLead: 'На агента можно переложить объём работы, но не ответственность за результат.',
    ai: [
      {
        title: 'Агент в IDE, сначала план',
        text: 'Основной ежедневный инструмент — Veai (AI-агент для IDE JetBrains), в IntelliJ. Он читает проект, правит код, запускает тесты и команды. Сначала план и декомпозиция, потом код; у агента память о проекте, мои навыки (skills) и правила. Работал также с Cursor и GitHub Copilot; Claude Code и OpenAI Codex устроены по тому же агентному циклу — план → дифф → тесты, — так что переключаюсь между ними без проблем.',
      },
      {
        title: 'Параллельные агенты, ревью до слияния',
        text: 'За одну сессию — 6\u00A0агентов параллельно, каждый в своём репозитории (сайты на Astro/Hugo, PWA-клиенты, Go-бэкенд), около 2\u00A0часов работы по этапам с критериями готовности. Потом проверяю сам: тесты, сборки, авторство коммитов, поиск секретов. Внутри одного репозитория параллельные агенты получают отдельные git worktree. Без этой проверки в main ничего не попадает.',
      },
      {
        title: 'LLM внутри продукта — с ограничителями',
        text: 'В sitefarm тексты генерируются через Yandex AI Studio и проверяются второй моделью; в Terroir данные подбирает код, а каждый ответ сверяется с базой. В обоих — жёсткий месячный бюджет.',
      },
    ],
    toolsTitle: 'Агентный инструментарий',
    tools: [
      { name: 'Veai', note: 'каждый день', main: true },
      { name: 'Cursor', note: 'работал' },
      { name: 'GitHub Copilot', note: 'работал' },
      { name: 'Claude Code', note: 'тот же цикл' },
      { name: 'OpenAI Codex', note: 'тот же цикл' },
    ],
    console: {
      title: 'агент · сессия',
      approve: 'Подтвердить',
      reject: 'Отклонить',
      lines: [
        { kind: 'cmd', text: 'задача: месячный лимит бюджета в LLM-клиенте' },
        { kind: 'plan', text: 'план: оценить худший случай до вызова → остановиться → тест' },
        { kind: 'file', text: '~ internal/llm/client.go' },
        { kind: 'file', text: '+ internal/llm/budget.go' },
        { kind: 'file', text: '+ internal/llm/budget_test.go' },
        { kind: 'ask', text: '3 файла к изменению. Подтверждаешь?' },
        { kind: 'ok', text: 'go test ./... — ok' },
        { kind: 'ok', text: 'дифф проверен · секретов нет' },
      ],
    },
    contactTitle: 'Контакты',
    contactLead:
      'Расскажите о задаче — проект, долгий контракт или работа в штат. До разработки 5\u00A0лет вёл проекты и руководил отделом из 6\u00A0человек.',
    contactItems: [
      { label: 'Email', value: links.email, href: `mailto:${links.email}` },
      { label: 'Telegram', value: '@tokc_a', href: links.telegram },
      { label: 'GitHub', value: 'github.com/dev-toxin', href: links.github },
      ...(links.linkedin ? [{ label: 'LinkedIn', value: 'linkedin.com/in/tokc', href: links.linkedin }] : []),
    ],
    resumeLabel: 'Резюме на hh.ru',
    footer: 'Антон Козырев',
  },
};
