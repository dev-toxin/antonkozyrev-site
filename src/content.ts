// Site copy. Source of every fact: Anton's notebook (06 Карьера: resume, LinkedIn draft,
// cover letters, portfolio plan). Do not add numbers or skills that are not there.
// Empty link = not rendered (linkedin until the profile is ready; resume = "coming soon").

export type Lang = 'en' | 'ru';

export const links = {
  github: 'https://github.com/dev-toxin',
  terroir: 'https://github.com/dev-toxin/terroir-monorepo',
  sitefarm: 'https://github.com/dev-toxin/sitefarm-showcase',
  tapreply: 'https://www.tapreply.net',
  email: 'hello@antonkozyrev.dev',
  linkedin: '',
  resume: '',
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
};

type StackGroup = { group: string; items: string; where: LinkRef[] };

export type AppId = 'zhabby' | 'jobline' | 'qworking' | 'mealhub' | 'greenfeed';

type App = {
  id: AppId;
  name: string;
  years: string;
  what: string;
  role: string;
  links: LinkRef[];
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
  hero: { name: string; role: string; lead: string; meta: string[]; ctaPrimary: string; ctaSecondary: string };
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
  resumeNote: string;
  footer: string;
};

export const copy: Record<Lang, Copy> = {
  en: {
    htmlLang: 'en',
    path: '/',
    title: 'Anton Kozyrev — Senior Flutter Developer · Go · LLM integrations',
    description:
      'Senior Flutter developer (4.5+ years, 10 apps) building Go backends and LLM features in his own products. Open to project and part-time work.',
    nav: { cases: 'Work', apps: 'Apps', stack: 'Stack', ai: 'AI workflow', contact: 'Contact' },
    switchLabel: 'RU',
    switchTitle: 'Русская версия',
    switchHref: '/ru/',
    hero: {
      name: 'Anton Kozyrev',
      role: 'Senior Flutter Developer · Go · LLM integrations',
      lead:
        'Flutter developer with 4.5+ years of commercial experience and 10 mobile apps behind me. For the last three years I have been the only mobile developer in a product team: architecture, stack, API contracts, releases. My own products I build end to end — Go backend, web, LLM integration, deployment.',
      meta: ['Kaliningrad, Russia · Remote', 'Open to project and part-time work', 'Self-employed contracts'],
      ctaPrimary: 'See the work',
      ctaSecondary: 'Get in touch',
    },
    casesTitle: 'Selected work',
    cases: [
      {
        id: 'mobile',
        title: 'Commercial mobile apps',
        tag: 'Flutter · 4.5+ years',
        summary:
          'Platforms for self-employed and external workers: onboarding, documents, deals, payouts and tax receipts. The code is under NDA, so this is what I did rather than the code itself.',
        facts: [
          '10 mobile apps — from greenfield launches to taking over code from other teams',
          'Migrated a native Android (Java) app to Flutter with no loss of functionality and shipped it on iOS and Android; now maintaining version 3.x',
          'Feature-first Clean Architecture with Riverpod, API contracts co-designed with the backend, real-time chat on Socket.IO, FCM push, Crashlytics, Remote Config',
          'Key logic covered with unit and integration tests; legacy refactoring without stopping feature work',
        ],
        stack: 'Flutter · Dart · Riverpod · GoRouter · Dio · Socket.IO · Firebase · Drift/SQLite',
      },
      {
        id: 'sitefarm',
        title: 'sitefarm — data-driven site pipeline',
        tag: 'Go · LLM · static sites',
        summary:
          'A Go pipeline that turns open data into a content site: collect data (NOAA, PRISM) → generate text with an LLM → fact-check with a second model → build a static site.',
        facts: [
          'Pilot of ~2,100 pages; generation costs about 0.5 RUB per page',
          'Numbers come from the data, never from the model; a reviewer model checks texts against the facts — 84% of pages pass automatically',
          'Budget guard: the model is not called if the worst case would exceed the monthly limit',
          'Models compared on the real task — one was rejected because it did not fit the response limit',
        ],
        stack: 'Go · Yandex AI Studio (gpt-oss-120b) · Hugo · Cloudflare',
        link: { href: links.sitefarm, label: 'Code: sitefarm-showcase' },
      },
      {
        id: 'terroir',
        title: 'Terroir — personal wine assistant',
        tag: 'Go · PostgreSQL · PWA · LLM',
        summary:
          'An assistant with memory: cellar, taste profile, wine matched to your own recipes. Code selects the data, the LLM only phrases the answer.',
        facts: [
          'Answers are validated: the model cannot reference a bottle that is not in the cellar',
          'Monthly token budget and a fallback when the LLM fails',
          '90+ tests, CI on GitHub Actions',
        ],
        stack: 'Go · PostgreSQL/SQLite · PWA · OpenAI-compatible LLM client',
        link: { href: links.terroir, label: 'Code: terroir-monorepo' },
      },
      {
        id: 'tapreply',
        title: 'TapReply — replies to customer reviews',
        tag: 'B2B SaaS · in development',
        summary:
          'AI replies to reviews from several platforms for venues, in local languages. A Go core with platform adapters: a new review platform is a new adapter, not a rewrite.',
        facts: ['Go core + platform adapters', 'Flutter / PWA client', 'PostgreSQL'],
        stack: 'Go · Flutter · PWA · PostgreSQL',
        link: { href: links.tapreply, label: 'tapreply.net' },
      },
    ],
    appsTitle: 'Apps I built',
    appsLead: 'Published apps I worked on before my current product team — store pages and screenshots are public.',
    apps: [
      {
        id: 'zhabby', name: 'Zhabby', years: '2025',
        what: 'Short-video social network that rewards activity: personal feed, video upload, points for views, likes and comments, rewards exchange.',
        role: 'Second developer on the team: built every screen from Figma designs, connected API requests and state management in several sections. Published on the App Store and Google Play.',
        links: [{ href: 'https://apps.apple.com/ru/app/id6758106499', label: 'App Store' }, { href: 'https://zhabby.info/', label: 'zhabby.info' }],
      },
      {
        id: 'jobline', name: 'Jobline', years: '2023–2024',
        what: 'Platform for working with external contractors: self-employed onboarding, documents and receipts, payouts with tax (NPD) withholding.',
        role: 'Built the mobile app from scratch.',
        links: [{ href: 'https://teleport.run/projects/jobline', label: 'Case study' }, { href: 'https://jobline.one/', label: 'jobline.one' }],
      },
      {
        id: 'qworking', name: 'Q-Working', years: '2023–2024',
        what: 'Service that finds contractors, handles deals and pays self-employed workers.',
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
        items: 'Go, REST API, PostgreSQL, SQLite, Docker, CI/CD (GitHub Actions)',
        where: [{ href: links.terroir, label: 'terroir-monorepo' }, { href: links.sitefarm, label: 'sitefarm-showcase' }],
      },
      {
        group: 'LLM',
        items: 'OpenAI-compatible APIs, Yandex AI Studio, fact checking by a second model, budget limits, regression question sets',
        where: [{ href: '#sitefarm', label: 'sitefarm' }, { href: '#terroir', label: 'Terroir' }],
      },
      {
        group: 'Web & infra',
        items: 'Astro, Hugo, PWA, Cloudflare (Pages, DNS), Linux VPS',
        where: [{ href: '#sitefarm', label: 'sitefarm' }, { href: '#top', label: 'this site' }],
      },
      {
        group: 'Architecture & quality',
        items: 'Clean Architecture, feature-first, SOLID, unit and integration tests, legacy code',
        where: [{ href: '#mobile', label: 'Commercial apps' }, { href: links.terroir, label: 'Terroir tests' }],
      },
    ],
    aiTitle: 'How I work with AI agents',
    aiLead: 'Agents take on the volume of work; responsibility for the result stays with me.',
    ai: [
      {
        title: 'Agent in the IDE, plan first',
        text: 'My daily driver is an agent in the IDE (Veai in IntelliJ). It reads the project, edits code, runs tests and commands. Plan and decomposition come first, code second; the agent keeps project memory, my own skills and rules. I have also worked with Cursor and GitHub Copilot; Claude Code and OpenAI Codex follow the same agentic workflow — plan → diff → tests — so switching between them is quick.',
      },
      {
        title: 'Parallel work in git worktrees, review before merge',
        text: 'Sub-agents work in separate git worktrees — in one session 6 agents rebuilt 5 projects in about 2 hours. Nothing lands without tests, a diff review and a scan of git history for secrets before publishing.',
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
        { kind: 'ask', text: 'Change 3 files. Approve?' },
        { kind: 'ok', text: 'go test ./... — ok' },
        { kind: 'ok', text: 'diff reviewed · secrets scan clean' },
      ],
    },
    contactTitle: 'Contact',
    contactLead:
      'Open to project work and part-time engagement (up to 20 h/week) alongside my main job. Before development I spent 5 years running city projects and leading a team of 6.',
    contactItems: [
      { label: 'Email', value: links.email, href: `mailto:${links.email}` },
      { label: 'GitHub', value: 'github.com/dev-toxin', href: links.github },
      ...(links.linkedin ? [{ label: 'LinkedIn', value: links.linkedin, href: links.linkedin }] : []),
    ],
    resumeLabel: 'Résumé (PDF)',
    resumeNote: 'coming soon',
    footer: 'Anton Kozyrev',
  },
  ru: {
    htmlLang: 'ru',
    path: '/ru/',
    title: 'Антон Козырев — Senior Flutter Developer · Go · LLM-интеграции',
    description:
      'Senior Flutter-разработчик (4,5+ года, 10 приложений), в своих продуктах — Go-бэкенд и LLM-фичи. Открыт к проектной работе и частичной занятости.',
    nav: { cases: 'Проекты', apps: 'Приложения', stack: 'Стек', ai: 'Работа с AI', contact: 'Контакты' },
    switchLabel: 'EN',
    switchTitle: 'English version',
    switchHref: '/',
    hero: {
      name: 'Антон Козырев',
      role: 'Senior Flutter Developer · Go · LLM-интеграции',
      lead:
        'Flutter-разработчик с 4,5+ годами коммерческого опыта и 10 мобильными приложениями. Последние три года — единственный мобильный разработчик в продуктовой команде: архитектура, стек, API-контракты, релизы. Свои продукты делаю целиком: Go-бэкенд, веб, LLM-интеграции, деплой.',
      meta: ['Калининград · удалённо', 'Открыт к проектной работе и подработке', 'Самозанятый'],
      ctaPrimary: 'Смотреть проекты',
      ctaSecondary: 'Связаться',
    },
    casesTitle: 'Проекты',
    cases: [
      {
        id: 'mobile',
        title: 'Коммерческие мобильные приложения',
        tag: 'Flutter · 4,5+ года',
        summary:
          'Платформы для самозанятых и внешних исполнителей: регистрация, документы, сделки, выплаты, налоговые чеки. Код под NDA, поэтому здесь — что я делал, а не сам код.',
        facts: [
          '10 мобильных приложений — от запуска с нуля до доработки после других команд',
          'Перенёс нативное Android-приложение (Java) на Flutter без потери функциональности и выпустил на iOS и Android; сейчас веду версию 3.x',
          'Feature-first и Clean Architecture на Riverpod, API-контракты вместе с backend, realtime-чат на Socket.IO, push (FCM), Crashlytics, Remote Config',
          'Ключевая логика покрыта unit- и integration-тестами; рефакторинг legacy без остановки разработки',
        ],
        stack: 'Flutter · Dart · Riverpod · GoRouter · Dio · Socket.IO · Firebase · Drift/SQLite',
      },
      {
        id: 'sitefarm',
        title: 'sitefarm — конвейер сайтов на данных',
        tag: 'Go · LLM · статические сайты',
        summary:
          'Go-конвейер, который превращает открытые данные в контентный сайт: сбор данных (NOAA, PRISM) → генерация текстов через LLM → проверка фактов второй моделью → сборка статического сайта.',
        facts: [
          'Пилот — около 2 100 страниц, генерация стоит примерно 0,5 ₽ за страницу',
          'Числа берутся только из данных, а не от модели; проверяющая модель сверяет тексты с фактами — 84% страниц проходят автоматически',
          'Защита бюджета: модель не вызывается, если худший сценарий выходит за месячный лимит',
          'Модели сравнивал на своей задаче — одну отбраковал, потому что она не укладывалась в лимит ответа',
        ],
        stack: 'Go · Yandex AI Studio (gpt-oss-120b) · Hugo · Cloudflare',
        link: { href: links.sitefarm, label: 'Код: sitefarm-showcase' },
      },
      {
        id: 'terroir',
        title: 'Terroir — персональный винный помощник',
        tag: 'Go · PostgreSQL · PWA · LLM',
        summary:
          'Помощник с памятью: погреб, вкусовой профиль, подбор вина к своим рецептам. Данные подбирает код, LLM только формулирует ответ.',
        facts: [
          'Ответ проверяется: модель не может сослаться на бутылку, которой нет в погребе',
          'Месячный бюджет на токены и fallback при сбое LLM',
          '90+ тестов, CI на GitHub Actions',
        ],
        stack: 'Go · PostgreSQL/SQLite · PWA · OpenAI-совместимый клиент LLM',
        link: { href: links.terroir, label: 'Код: terroir-monorepo' },
      },
      {
        id: 'tapreply',
        title: 'TapReply — ответы на отзывы',
        tag: 'B2B SaaS · в разработке',
        summary:
          'AI-ответы на отзывы с нескольких площадок для заведений на локальных языках. Ядро на Go с адаптерами площадок: новая площадка — это новый адаптер, а не переписывание.',
        facts: ['Ядро на Go + адаптеры площадок', 'Клиент на Flutter / PWA', 'PostgreSQL'],
        stack: 'Go · Flutter · PWA · PostgreSQL',
        link: { href: links.tapreply, label: 'tapreply.net' },
      },
    ],
    appsTitle: 'Приложения, которые я делал',
    appsLead: 'Опубликованные приложения до нынешней продуктовой команды — страницы в сторах и скриншоты публичные.',
    apps: [
      {
        id: 'zhabby', name: 'Zhabby', years: '2025',
        what: 'Социальная сеть коротких видео с вознаграждением за активность: персональная лента, загрузка видео, баллы за просмотры, лайки и комментарии, обмен баллов на награды.',
        role: 'Второй разработчик в команде: сверстал все экраны по макетам Figma, в ряде разделов подключал API и управление состоянием. Опубликовано в App Store и Google Play.',
        links: [{ href: 'https://apps.apple.com/ru/app/id6758106499', label: 'App Store' }, { href: 'https://zhabby.info/', label: 'zhabby.info' }],
      },
      {
        id: 'jobline', name: 'Jobline', years: '2023–2024',
        what: 'Платформа для работы с внешними исполнителями: регистрация самозанятых, документы и чеки по сделкам, выплаты с уплатой НПД.',
        role: 'Мобильное приложение с нуля.',
        links: [{ href: 'https://teleport.run/projects/jobline', label: 'Кейс' }, { href: 'https://jobline.one/', label: 'jobline.one' }],
      },
      {
        id: 'qworking', name: 'Q-Working', years: '2023–2024',
        what: 'Сервис для поиска исполнителей, заключения сделок и выплат самозанятым.',
        role: 'Мобильное приложение исполнителя с нуля: регистрация, профиль и услуги, заказы и вознаграждения.',
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
        what: 'Каталог кормовой продукции и расчёт рациона питания животных для фермеров.',
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
        items: 'Go, REST API, PostgreSQL, SQLite, Docker, CI/CD (GitHub Actions)',
        where: [{ href: links.terroir, label: 'terroir-monorepo' }, { href: links.sitefarm, label: 'sitefarm-showcase' }],
      },
      {
        group: 'LLM',
        items: 'OpenAI-совместимые API, Yandex AI Studio, проверка фактов второй моделью, лимиты бюджета, эталонные вопросы для регрессии',
        where: [{ href: '#sitefarm', label: 'sitefarm' }, { href: '#terroir', label: 'Terroir' }],
      },
      {
        group: 'Веб и инфраструктура',
        items: 'Astro, Hugo, PWA, Cloudflare (Pages, DNS), Linux VPS',
        where: [{ href: '#sitefarm', label: 'sitefarm' }, { href: '#top', label: 'этот сайт' }],
      },
      {
        group: 'Архитектура и качество',
        items: 'Clean Architecture, feature-first, SOLID, unit- и integration-тесты, legacy-код',
        where: [{ href: '#mobile', label: 'Коммерческие приложения' }, { href: links.terroir, label: 'тесты Terroir' }],
      },
    ],
    aiTitle: 'Как я работаю с AI-агентами',
    aiLead: 'На агента можно переложить объём работы, но не ответственность за результат.',
    ai: [
      {
        title: 'Агент в IDE, сначала план',
        text: 'Основной ежедневный инструмент — агент в IDE (Veai в IntelliJ). Он читает проект, правит код, запускает тесты и команды. Сначала план и декомпозиция, потом код; у агента память о проекте, мои skills и правила. Работал также с Cursor и GitHub Copilot; Claude Code и OpenAI Codex устроены по тому же агентному циклу — план → дифф → тесты, — так что переключаюсь между ними без проблем.',
      },
      {
        title: 'Параллельная работа в git worktree, ревью до слияния',
        text: 'Субагенты работают в отдельных git worktree — в одной сессии 6 агентов пересобрали 5 проектов примерно за 2 часа. Без тестов, ревью диффа и проверки истории git на секреты перед публикацией ничего не попадает в main.',
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
        { kind: 'ask', text: 'Изменю 3 файла. Подтверждаешь?' },
        { kind: 'ok', text: 'go test ./... — ok' },
        { kind: 'ok', text: 'дифф проверен · секретов нет' },
      ],
    },
    contactTitle: 'Контакты',
    contactLead:
      'Открыт к проектной работе и частичной занятости (до 20 ч/нед) параллельно с основной работой. До разработки 5 лет вёл городские проекты и руководил отделом из 6 человек.',
    contactItems: [
      { label: 'Email', value: links.email, href: `mailto:${links.email}` },
      { label: 'GitHub', value: 'github.com/dev-toxin', href: links.github },
      ...(links.linkedin ? [{ label: 'LinkedIn', value: links.linkedin, href: links.linkedin }] : []),
    ],
    resumeLabel: 'Резюме (PDF)',
    resumeNote: 'скоро',
    footer: 'Антон Козырев',
  },
};
