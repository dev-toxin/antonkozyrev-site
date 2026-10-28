// Copy for the client-facing service page (draft, branch client-page).
// Full-spectrum positioning (decision 2026-10-26): apps, websites, PWAs, internal tools, Go backends, AI.
// Facts only from the main site copy and Anton's resume. No prices, no deadlines,
// no client names, no reviews, no phone number.

import { links, type Lang } from './content';

type Item = { title: string; text: string; icon?: string; tech?: string; proof?: { href: string; label: string }[] };

export type Example =
  | { kind: 'app'; app: 'gsr' | 'lk' | 'zhabby'; name: string; text: string; href: string; label: string; more?: { href: string; label: string }[] }
  | { kind: 'site'; name: string; text: string; href: string; label: string; shot: 'tapreply' | 'terroir' }
  | { kind: 'code'; name: string; text: string; href: string; label: string };

export type ClientCopy = {
  htmlLang: string;
  path: string;
  altPath: string;
  homePath: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  meet?: string;
  meta: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTelegram: string;
  servicesTitle: string;
  services: Item[];
  processTitle: string;
  process: Item[];
  small: string;
  legal: string;
  examplesTitle: string;
  examplesLead: string;
  examples: Example[];
  examplesMore: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  formTitle: string;
  formLead: string;
  form: {
    name: string;
    contact: string;
    contactHint: string;
    kind: string;
    kinds: string[];
    task: string;
    taskHint: string;
    deadline: string;
    deadlineHint: string;
    submit: string;
    note: string;
    subject: string;
  };
  orWrite: string;
  switchLabel: string;
  switchTitle: string;
  backHome: string;
  areaServed: string[];
  serviceName: string;
  serviceTypes: string[];
  footer: string;
};

const NB = '\u00A0';

export const client: Record<Lang, ClientCopy> = {
  ru: {
    htmlLang: 'ru',
    path: '/ru/razrabotka-saytov-i-prilozheniy-kaliningrad/',
    altPath: '/custom-development/',
    homePath: '/ru/',
    title: 'Разработка сайтов и приложений в Калининграде — сайты, мобильные приложения, автоматизация и ИИ',
    description: `Создание и разработка сайтов, мобильных и веб-приложений, автоматизация бизнеса в Калининграде и области. 4,5+${NB}года опыта, 10${NB}приложений в сторах.`,
    eyebrow: 'Калининград и область · удалённо по России',
    h1: `Разработка сайтов и${NB}приложений в${NB}Калининграде`,
    lead: `Сайт под ключ, Telegram-бот для заявок и${NB}записи, мобильное приложение, связка с${NB}учётной системой — чтобы заказы и${NB}остатки не${NB}переносились вручную. Беру задачу от${NB}идеи до${NB}запуска и${NB}поддержки — и${NB}большой проект, и${NB}небольшую доработку.`,
    meet: `Можно встретиться в${NB}Калининграде или работать удалённо.`,
    meta: [`4,5+${NB}года коммерческой разработки`, `10${NB}приложений в сторах`, `3${NB}своих сайта работают`],
    ctaPrimary: 'Обсудить задачу',
    ctaSecondary: 'Посмотреть работы',
    ctaTelegram: 'Написать в Telegram',
    servicesTitle: 'Что делаю',
    services: [
      {
        title: 'Сайты и лендинги',
        icon: 'globe',
        text: 'Сайт компании или организации, лендинг под продукт или акцию: несколько языков, базовая настройка для поисковиков, домен и хостинг.',
        tech: 'Astro, Hugo',
        proof: [
          { href: links.tapreply, label: 'tapreply.net' },
          { href: links.terroirSite, label: 'terroir-app.com' },
          { href: '/ru/', label: 'этот сайт' },
        ],
      },
      {
        title: 'Чат-боты и ИИ для бизнеса',
        icon: 'bot',
        text: 'Telegram-бот для заявок и записи, чат-ассистент, обработка и проверка текстов языковыми моделями — с лимитом бюджета и проверкой ответов, чтобы модель не выдумывала.',
        tech: 'Telegram Bot API, языковые модели',
        proof: [
          { href: '/ru/#sitefarm', label: 'sitefarm' },
          { href: '/ru/#terroir', label: 'Terroir' },
        ],
      },
      {
        title: 'Интеграции с учётными системами (1С и др.)',
        icon: 'cable',
        text: 'Связка сайта, приложения или бота с учётной системой — заказы, остатки, выгрузки, — чтобы данные не переносились вручную. Подход и сроки — после разбора вашей задачи.',
        tech: 'REST, HTTP-сервисы',
      },
      {
        title: 'Мобильные приложения',
        icon: 'smartphone',
        text: 'Одно приложение для iOS и Android: экраны по макетам, работа с API, push-уведомления, аналитика, публикация в App Store, Google Play и RuStore.',
        tech: 'Flutter',
        proof: [{ href: '/ru/#apps', label: `10${NB}приложений в сторах` }],
      },
      {
        title: 'Веб-приложения',
        icon: 'app-window',
        text: 'Приложение, которое работает в браузере и ставится на телефон как обычное, — без публикации в сторах. Подходит для внутренних инструментов и первых версий продукта.',
        tech: 'PWA',
        proof: [{ href: '/ru/#terroir', label: 'Terroir и TapReply' }],
      },
      {
        title: 'Автоматизация бизнеса и внутренние сервисы',
        icon: 'workflow',
        text: 'Админки, учёт, отчёты, перенос процессов из таблиц и переписки в понятный сервис.',
        proof: [{ href: links.sitefarm, label: 'конвейер обработки данных' }],
      },
      {
        title: 'Серверная часть и API',
        icon: 'server',
        text: 'Основа для приложения, сайта или сервиса: база данных, API, автоматические проверки и сборка.',
        tech: 'Go, PostgreSQL, REST, GitHub Actions',
        proof: [{ href: links.terroir, label: 'код Terroir' }],
      },
    ],
    processTitle: 'Как работаю',
    process: [
      { title: 'Бриф', text: 'Вы рассказываете о задаче — письмом, в Telegram или через форму ниже. Я задаю уточняющие вопросы.' },
      { title: 'План и оценка', text: 'Возвращаюсь с понятным планом: что входит в первую версию, этапы и оценка. Оценка — бесплатно.' },
      { title: 'Работа этапами', text: 'Работаю короткими этапами и после каждого показываю работающий результат, а не отчёт.' },
      { title: 'Запуск', text: 'Публикую приложение в сторах, сайт или сервис — на вашем домене и хостинге.' },
      { title: 'Поддержка', text: 'После запуска — исправления, обновления и новые функции по договорённости.' },
    ],
    small: `Работаю этапами, оценка — бесплатно, оплата поэтапно. Берусь и${NB}за${NB}небольшие задачи: доработку, исправление, интеграцию.`,
    legal: 'Работаю официально, как самозанятый: чек на каждую оплату.',
    examplesTitle: 'Примеры работ',
    examplesLead: 'Всё опубликовано — можно открыть и посмотреть.',
    examples: [
      { kind: 'site', name: 'TapReply', text: `Сайт продукта: ответы на${NB}отзывы гостей на${NB}языке гостя. Astro, EN/RU.`, href: links.tapreply, label: 'Сайт ↗', shot: 'tapreply' },
      { kind: 'site', name: 'Terroir', text: `Сайт продукта: личный винный помощник с${NB}памятью. Astro, EN/RU.`, href: links.terroirSite, label: 'Сайт ↗', shot: 'terroir' },
      { kind: 'app', app: 'gsr', name: 'GSR Работа', text: 'Приложение для исполнителей сервиса подбора персонала: документы, подписание по SMS, запись на смены, выплаты, чат. С нуля, единственный мобильный разработчик.', href: 'https://apps.apple.com/ru/app/id6771076516', label: 'App Store ↗', more: [{ href: 'https://play.google.com/store/apps/details?id=ru.gsrrabota.mobile', label: 'Google Play ↗' }] },
      { kind: 'app', app: 'lk', name: 'Личный кабинет исполнителя', text: 'Перенос нативного Android-приложения на Flutter, выпуск на iOS, развитие версии 3.x.', href: 'https://apps.apple.com/ru/app/id6748441402', label: 'App Store ↗', more: [{ href: 'https://play.google.com/store/apps/details?id=com.crystalglaive.employee', label: 'Google Play ↗' }, { href: 'https://www.rustore.ru/catalog/app/com.crystalglaive.employee', label: 'RuStore ↗' }] },
      { kind: 'app', app: 'zhabby', name: 'Zhabby', text: 'Социальная сеть коротких видео с вознаграждением за активность.', href: 'https://apps.apple.com/ru/app/id6758106499', label: 'App Store ↗', more: [{ href: 'https://play.google.com/store/apps/details?id=com.metaparadox.zhabby', label: 'Google Play ↗' }] },
      { kind: 'code', name: 'sitefarm', text: `Конвейер на Go: открытые данные → тексты через языковую модель → автоматическая проверка фактов → готовый сайт. Около 2${NB}100${NB}страниц в пилоте.`, href: links.sitefarm, label: 'Код на GitHub ↗' },
    ],
    examplesMore: 'Все приложения со скриншотами',
    faqTitle: 'Частые вопросы',
    faq: [
      { q: 'Сколько стоит и сколько времени займёт работа?', a: 'Зависит от задачи: объёма, интеграций, нужен ли бэкенд. Оценку даю бесплатно после брифа — вместе с планом, что входит в первую версию. Оплата — поэтапно.' },
      { q: 'Делаете ли вы сайты?', a: 'Да: лендинги, сайты компаний и продуктов, многоязычные сайты. Делаю быстрые статические сайты, настраиваю домен, хостинг и базу для поисковиков.' },
      { q: 'Можно ли заказать небольшую доработку?', a: 'Да. Исправить ошибку, добавить функцию, подключить интеграцию, обновить сайт — берусь и за такие задачи. Сначала разбираюсь в том, что уже есть, и говорю, сколько это займёт.' },
      { q: 'Можно ли встретиться лично?', a: 'Да, в Калининграде — обсудить задачу и показать результат. Остальное время работаем удалённо: созвоны, чат, демо по ссылке.' },
      { q: 'Можно ли подключить ИИ к нашему процессу?', a: 'Да, если задача это позволяет: ответы на типовые вопросы, обработка и проверка текстов, разбор заявок. Ставлю лимит бюджета и проверку ответов, а если ИИ для задачи не подходит — говорю об этом честно.' },
      { q: 'Опубликуете приложение в сторах?', a: 'Да: App Store, Google Play и RuStore — опыт публикации есть. Аккаунты разработчика лучше оформить на вас — тогда приложение принадлежит вам.' },
      { q: 'Кому принадлежит код?', a: 'Вам. Код хранится в вашем репозитории, права на него передаются вам. Если нужно, подпишу NDA.' },
      { q: 'Что после запуска?', a: 'Поддержка по договорённости: исправление ошибок, обновления, новые функции.' },
    ],
    formTitle: 'Опишите задачу',
    formLead: 'Пары строк о том, что нужно сделать, достаточно, чтобы начать. Отвечу и задам уточняющие вопросы.',
    form: {
      name: 'Как к вам обращаться',
      contact: 'Как с вами связаться',
      contactHint: 'Email или Telegram',
      kind: 'Что нужно сделать',
      kinds: ['Сайт', 'Telegram-бот', 'Интеграция с учётной системой (1С и др.)', 'Мобильное приложение', 'Веб-приложение', 'Автоматизация или внутренний сервис', 'Интеграция ИИ', 'Доработка существующего', 'Другое'],
      task: 'Задача',
      taskHint: 'Что нужно, для кого, что уже есть',
      deadline: 'Желаемый срок',
      deadlineHint: 'Например: к весне, не горит',
      submit: 'Отправить письмом',
      note: `Откроется почта с готовым письмом на ${links.email} — останется нажать «Отправить».`,
      subject: 'Задача: разработка',
    },
    orWrite: 'Или напишите напрямую',
    switchLabel: 'EN',
    switchTitle: 'English version',
    backHome: 'Главная',
    areaServed: ['Калининград', 'Калининградская область', 'Россия'],
    serviceName: 'Разработка сайтов и приложений в Калининграде',
    serviceTypes: ['Разработка сайтов', 'Telegram-боты', 'Интеграции с учётными системами', 'Разработка мобильных приложений', 'Веб-приложения', 'Автоматизация бизнеса', 'Интеграция ИИ', 'Бэкенд и API'],
    footer: 'Антон Козырев',
  },
  en: {
    htmlLang: 'en',
    path: '/custom-development/',
    altPath: '/ru/razrabotka-saytov-i-prilozheniy-kaliningrad/',
    homePath: '/',
    title: 'Custom software development — apps, websites, services and AI · Anton Kozyrev',
    description: 'Full-cycle developer: iOS and Android apps, websites and PWAs, internal tools and automation, Go backends, AI integration. 4.5+ years of commercial development, 10 apps in the stores. Remote.',
    eyebrow: 'Remote',
    h1: 'Custom software development: apps, websites and services',
    lead: "I'm a full-cycle developer: mobile apps, websites and web apps, internal tools, backends and AI integration — from idea through launch and ongoing support, big builds and small fixes alike.",
    meta: ['4.5+ yrs of commercial development', '10 apps in the stores', '3 of my own sites live'],
    ctaPrimary: 'Discuss a project',
    ctaSecondary: 'See my work',
    ctaTelegram: 'Message on Telegram',
    servicesTitle: 'What I do',
    services: [
      {
        title: 'Websites and landing pages',
        icon: 'globe',
        text: 'Company and product sites, landing pages: several languages, basic SEO setup, domain and hosting.',
        tech: 'Astro, Hugo',
        proof: [
          { href: links.tapreply, label: 'tapreply.net' },
          { href: links.terroirSite, label: 'terroir-app.com' },
          { href: '/', label: 'this site' },
        ],
      },
      {
        title: 'Chatbots and AI for business',
        icon: 'bot',
        text: 'Telegram bots for requests and bookings, chat assistants, generating and checking texts with language models — with budget limits and answer checks so the model does not make things up.',
        tech: 'Telegram Bot API, language models',
        proof: [
          { href: '/#sitefarm', label: 'sitefarm' },
          { href: '/#terroir', label: 'Terroir' },
        ],
      },
      {
        title: 'Integrations with accounting systems',
        icon: 'cable',
        text: 'Connecting a website, an app or a bot to your accounting system — 1C (Russian ERP) and others: orders, stock, exports, so data is not re-entered by hand. Approach and timeline after reviewing your task.',
        tech: 'REST, HTTP services',
      },
      {
        title: 'Mobile apps',
        icon: 'smartphone',
        text: 'One app for iOS and Android: screens from your designs, API integration, push notifications, analytics, App Store and Google Play release.',
        tech: 'Flutter',
        proof: [{ href: '/#apps', label: '10 apps in the stores' }],
      },
      {
        title: 'Web apps',
        icon: 'app-window',
        text: 'An app that runs in the browser and installs on a phone like a native app — no store release needed. Good for internal tools and first product versions.',
        tech: 'PWA',
        proof: [{ href: '/#terroir', label: 'Terroir and TapReply' }],
      },
      {
        title: 'Internal tools and automation',
        icon: 'workflow',
        text: 'Admin panels, record keeping, reports — moving processes from spreadsheets and chats into one purpose-built tool.',
        proof: [{ href: links.sitefarm, label: 'data pipeline' }],
      },
      {
        title: 'Backends and APIs',
        icon: 'server',
        text: 'The base for an app, a site or a service: database, API, automated checks and builds.',
        tech: 'Go, PostgreSQL, REST, GitHub Actions',
        proof: [{ href: links.terroir, label: 'Terroir code' }],
      },
    ],
    processTitle: 'How I work',
    process: [
      { title: 'Brief', text: 'Tell me about the task — by email, on Telegram or via the form below. I ask follow-up questions.' },
      { title: 'Plan and estimate', text: 'I come back with a clear plan: what goes into the first version, the stages and a free estimate.' },
      { title: 'Short iterations', text: 'I work in short iterations and demo working results, not status reports.' },
      { title: 'Launch', text: 'I release the app to the stores or deploy the site or service on your domain and hosting.' },
      { title: 'Support', text: 'After launch — fixes, updates and new features as agreed.' },
    ],
    small: 'I work in stages: free estimate, payment per stage. Small jobs are welcome too: improvements, fixes, integrations.',
    legal: 'I work officially as a self-employed developer, with a receipt for every payment.',
    examplesTitle: 'Selected work',
    examplesLead: 'Everything here is live — click through and see for yourself.',
    examples: [
      { kind: 'site', name: 'TapReply', text: "Product site: replies to guest reviews in the guest's language. Astro, EN/RU.", href: links.tapreply, label: 'Live site ↗', shot: 'tapreply' },
      { kind: 'site', name: 'Terroir', text: 'Product site: a personal wine assistant with memory. Astro, EN/RU.', href: links.terroirSite, label: 'Live site ↗', shot: 'terroir' },
      { kind: 'app', app: 'gsr', name: 'GSR Rabota', text: 'App for contractors of a staffing service: documents, SMS signing, shift booking, payouts, chat. Built from scratch as the sole mobile developer.', href: 'https://apps.apple.com/ru/app/id6771076516', label: 'App Store ↗', more: [{ href: 'https://play.google.com/store/apps/details?id=ru.gsrrabota.mobile', label: 'Google Play ↗' }] },
      { kind: 'app', app: 'lk', name: 'Contractor Portal', text: 'Migrated a native Android app to Flutter, shipped it on iOS, developing version 3.x.', href: 'https://apps.apple.com/ru/app/id6748441402', label: 'App Store ↗', more: [{ href: 'https://play.google.com/store/apps/details?id=com.crystalglaive.employee', label: 'Google Play ↗' }, { href: 'https://www.rustore.ru/catalog/app/com.crystalglaive.employee', label: 'RuStore ↗' }] },
      { kind: 'app', app: 'zhabby', name: 'Zhabby', text: 'A short-video social network that rewards activity.', href: 'https://apps.apple.com/ru/app/id6758106499', label: 'App Store ↗', more: [{ href: 'https://play.google.com/store/apps/details?id=com.metaparadox.zhabby', label: 'Google Play ↗' }] },
      { kind: 'code', name: 'sitefarm', text: 'A Go pipeline: open data → texts from a language model → automated fact-checking → a ready site. About 2,100 pages in the pilot.', href: links.sitefarm, label: 'Code on GitHub ↗' },
    ],
    examplesMore: 'All apps with screenshots',
    faqTitle: 'Common questions',
    faq: [
      { q: 'How much does it cost and how long does it take?', a: 'It depends on the task: scope, integrations, whether a backend is needed. I give a free estimate after the brief, together with a plan for the first version. Payment is per stage.' },
      { q: 'Do you build websites?', a: 'Yes: landing pages, company and product sites, multilingual sites. I build fast static sites and set up the domain, hosting and search-engine basics.' },
      { q: 'Do you take on small jobs?', a: 'Yes. Fixing a bug, adding a feature, connecting an integration, updating a site — I take on tasks like that too. First I look at what already exists and tell you how long it will take.' },
      { q: 'Can you add AI to our process?', a: 'Yes, if the task allows it: answering typical questions, processing and checking texts, triaging incoming requests. I set a budget limit and answer checks — and if AI is not a good fit, I say so.' },
      { q: 'Will you publish the app in the stores?', a: 'Yes: App Store, Google Play and RuStore — I have published in all three. Ideally, the developer accounts are in your name, so the app stays yours.' },
      { q: 'Who owns the code?', a: 'You do. The code lives in your repository, and the IP rights transfer to you. I can sign an NDA if needed.' },
      { q: 'What happens after launch?', a: 'Support as agreed: bug fixes, updates, new features.' },
    ],
    formTitle: 'Describe your task',
    formLead: 'A couple of lines about what needs to be done is enough to start. I will reply with follow-up questions.',
    form: {
      name: 'Your name',
      contact: 'How to reach you',
      contactHint: 'Email or Telegram',
      kind: 'What do you need',
      kinds: ['Website', 'Telegram bot', 'Accounting system integration (1C and others)', 'Mobile app', 'Web app', 'Automation or internal tool', 'AI integration', 'Improving an existing product', 'Other'],
      task: 'Task',
      taskHint: 'What is needed, for whom, what already exists',
      deadline: 'Desired timeline',
      deadlineHint: 'For example: by spring, no rush',
      submit: 'Send by email',
      note: `This opens your email app with a pre-filled message to ${links.email} — just hit Send.`,
      subject: 'Task: custom development',
    },
    orWrite: 'Or write directly',
    switchLabel: 'RU',
    switchTitle: 'Русская версия',
    backHome: 'Home',
    areaServed: ['Russia'],
    serviceName: 'Custom software development: apps, websites, services and AI',
    serviceTypes: ['Website development', 'Telegram bots', 'Accounting system integrations', 'Mobile app development', 'Web apps', 'Business automation', 'AI integration', 'Backend and API development'],
    footer: 'Anton Kozyrev',
  },
};
