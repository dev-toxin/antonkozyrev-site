// Copy for the client-facing service page (draft, branch client-page).
// Full-spectrum positioning (decision 2026-10-26): apps, websites, PWAs, internal tools, Go backends, AI.
// Facts only from the main site copy and Anton's resume. No prices, no deadlines,
// no client names, no reviews, no phone number.

import { links, type Lang } from './content';

type Item = { title: string; text: string; proof?: { href: string; label: string }[] };

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
    lead: `Создаю сайты, мобильные и веб-приложения, автоматизирую процессы бизнеса, подключаю ИИ и${NB}пишу бэкенд. Беру задачу от идеи до запуска и поддержки — и${NB}большой проект, и${NB}небольшую доработку.`,
    meet: `Можно встретиться в${NB}Калининграде или работать удалённо.`,
    meta: [`4,5+${NB}года коммерческой разработки`, `10${NB}приложений в сторах`, `3${NB}своих сайта онлайн`],
    ctaPrimary: 'Описать задачу',
    ctaSecondary: 'Посмотреть работы',
    servicesTitle: 'Что делаю',
    services: [
      {
        title: 'Сайты и лендинги',
        text: 'Сайт компании или организации, корпоративный сайт, лендинг под продукт или акцию. Быстрые статические сайты на Astro и Hugo: несколько языков, базовая настройка для поисковиков, домен и хостинг.',
        proof: [
          { href: links.tapreply, label: 'tapreply.net' },
          { href: links.terroirSite, label: 'terroir-app.com' },
          { href: '/ru/', label: 'этот сайт' },
        ],
      },
      {
        title: 'Мобильные приложения',
        text: 'Одно приложение на Flutter для iOS и Android: экраны по макетам, работа с API, push-уведомления, аналитика, публикация в сторах.',
        proof: [{ href: '/ru/#apps', label: `10${NB}приложений в сторах` }],
      },
      {
        title: 'Веб-приложения и PWA',
        text: 'Приложение, которое работает в браузере и ставится на телефон как обычное, — без публикации в сторах. Подходит для внутренних инструментов и первых версий продукта.',
        proof: [{ href: '/ru/#terroir', label: 'PWA в Terroir и TapReply' }],
      },
      {
        title: 'Автоматизация бизнеса и внутренние сервисы',
        text: 'Автоматизация бизнес-процессов: админки, учёт, отчёты, чат-боты, интеграции между системами, перенос процессов из таблиц и переписки в понятный сервис.',
        proof: [{ href: links.sitefarm, label: 'конвейер обработки данных на Go' }],
      },
      {
        title: 'Интеграция ИИ',
        text: 'Чат-ассистенты, генерация и проверка текстов, обработка данных языковыми моделями — с лимитом бюджета и проверкой ответов, чтобы модель не выдумывала.',
        proof: [
          { href: '/ru/#sitefarm', label: 'sitefarm' },
          { href: '/ru/#terroir', label: 'Terroir' },
        ],
      },
      {
        title: 'Бэкенд и API на Go',
        text: 'REST API на Go с PostgreSQL, автоматические проверки и сборка на GitHub Actions — основа для приложения, сайта или сервиса.',
        proof: [{ href: links.terroir, label: 'код Terroir' }],
      },
    ],
    processTitle: 'Как работаю',
    process: [
      { title: 'Бриф', text: 'Вы рассказываете о задаче — письмом, в Telegram или через форму ниже. Я задаю уточняющие вопросы.' },
      { title: 'План и оценка', text: 'Возвращаюсь с понятным планом: что входит в первую версию, этапы и оценка.' },
      { title: 'Итерации с демо', text: 'Работаю короткими этапами и показываю результат вживую, а не в отчётах.' },
      { title: 'Запуск', text: 'Публикую приложение в сторах, сайт или сервис — на вашем домене и хостинге.' },
      { title: 'Поддержка', text: 'После запуска — исправления, обновления и новые функции по договорённости.' },
    ],
    small: `Берусь и${NB}за${NB}небольшие задачи: доработку, исправление, интеграцию.`,
    legal: 'Работаю официально, как самозанятый: чек на каждую оплату.',
    examplesTitle: 'Примеры работ',
    examplesLead: 'Всё опубликовано — можно открыть и посмотреть.',
    examples: [
      { kind: 'site', name: 'TapReply', text: `Сайт продукта: ответы на${NB}отзывы гостей на${NB}языке гостя. Astro, EN/RU.`, href: links.tapreply, label: 'Сайт ↗', shot: 'tapreply' },
      { kind: 'site', name: 'Terroir', text: `Сайт продукта: личный винный помощник с${NB}памятью. Astro, EN/RU.`, href: links.terroirSite, label: 'Сайт ↗', shot: 'terroir' },
      { kind: 'app', app: 'gsr', name: 'GSR Работа', text: 'Приложение для исполнителей сервиса подбора персонала: документы, подписание по SMS, запись на смены, выплаты, чат. С нуля, единственный мобильный разработчик.', href: 'https://apps.apple.com/ru/app/id6771076516', label: 'App Store ↗', more: [{ href: 'https://play.google.com/store/apps/details?id=ru.gsrrabota.mobile', label: 'Google Play ↗' }] },
      { kind: 'app', app: 'lk', name: 'Личный кабинет исполнителя', text: 'Перенос нативного Android-приложения на Flutter, выпуск на iOS, развитие версии 3.x.', href: 'https://apps.apple.com/ru/app/id6748441402', label: 'App Store ↗', more: [{ href: 'https://play.google.com/store/apps/details?id=com.crystalglaive.employee', label: 'Google Play ↗' }, { href: 'https://www.rustore.ru/catalog/app/com.crystalglaive.employee', label: 'RuStore ↗' }] },
      { kind: 'app', app: 'zhabby', name: 'Zhabby', text: 'Социальная сеть коротких видео с вознаграждением за активность.', href: 'https://apps.apple.com/ru/app/id6758106499', label: 'App Store ↗' },
      { kind: 'code', name: 'sitefarm', text: `Конвейер на Go: открытые данные → тексты через языковую модель → автоматическая проверка фактов → готовый сайт. Около 2${NB}100${NB}страниц в пилоте.`, href: links.sitefarm, label: 'Код на GitHub ↗' },
    ],
    examplesMore: 'Все приложения со скриншотами',
    faqTitle: 'Частые вопросы',
    faq: [
      { q: 'Сколько стоит и сколько времени займёт работа?', a: 'Зависит от задачи: объёма, интеграций, нужен ли бэкенд. Честную оценку даю после брифа — вместе с планом, что входит в первую версию.' },
      { q: 'Делаете ли вы сайты?', a: 'Да: лендинги, сайты компаний и продуктов, многоязычные сайты. Делаю быстрые статические сайты, настраиваю домен, хостинг и базу для поисковиков.' },
      { q: 'Можно ли заказать небольшую доработку?', a: 'Да. Исправить ошибку, добавить функцию, подключить интеграцию, обновить сайт — берусь и за такие задачи. Сначала разбираюсь в том, что уже есть, и говорю, сколько это займёт.' },
      { q: 'Можно ли встретиться лично?', a: 'Да, в Калининграде — обсудить задачу и показать результат. Остальное время работаем удалённо: созвоны, чат, демо по ссылке.' },
      { q: 'Можно ли подключить ИИ к нашему процессу?', a: 'Да, если задача это позволяет: ответы на типовые вопросы, обработка и проверка текстов, разбор заявок. Ставлю лимит бюджета и проверку ответов, а если ИИ для задачи не подходит — говорю об этом честно.' },
      { q: 'Опубликуете приложение в сторах?', a: 'Да: App Store, Google Play и RuStore — опыт публикации есть. Аккаунты разработчика лучше оформить на вас — тогда приложение принадлежит вам.' },
      { q: 'Кому принадлежит код?', a: 'Вам. Код хранится в вашем репозитории, права передаются по договору. Если нужно, подпишу NDA.' },
      { q: 'Что после запуска?', a: 'Поддержка по договорённости: исправление ошибок, обновления, новые функции.' },
    ],
    formTitle: 'Опишите задачу',
    formLead: 'Пары строк о том, что нужно сделать, достаточно, чтобы начать. Отвечу и задам уточняющие вопросы.',
    form: {
      name: 'Как к вам обращаться',
      contact: 'Как с вами связаться',
      contactHint: 'Email или Telegram',
      kind: 'Что нужно сделать',
      kinds: ['Сайт', 'Мобильное приложение', 'Веб-приложение или PWA', 'Автоматизация или внутренний сервис', 'Интеграция ИИ', 'Доработка существующего', 'Другое'],
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
    serviceTypes: ['Разработка сайтов', 'Разработка мобильных приложений', 'Веб-приложения и PWA', 'Автоматизация бизнеса', 'Интеграция ИИ', 'Бэкенд и API на Go'],
    footer: 'Антон Козырев',
  },
  en: {
    htmlLang: 'en',
    path: '/custom-development/',
    altPath: '/ru/razrabotka-saytov-i-prilozheniy-kaliningrad/',
    homePath: '/',
    title: 'Custom software development — apps, websites, services and AI · Anton Kozyrev',
    description: 'Full-cycle developer: iOS and Android apps, websites and PWAs, internal tools and automation, Go backends, AI integration. 4.5+ years of commercial development, 10 apps in the stores. Remote, worldwide.',
    eyebrow: 'Remote · worldwide',
    h1: 'Custom software development: apps, websites and services',
    lead: 'A full-cycle developer: mobile apps, websites and web apps, internal tools, backends and AI integration. I take a task from idea to launch and support — a large project or a small fix.',
    meta: ['4.5+ yrs of commercial development', '10 apps in the stores', '3 own websites live'],
    ctaPrimary: 'Describe your task',
    ctaSecondary: 'See the work',
    servicesTitle: 'What I do',
    services: [
      {
        title: 'Websites and landing pages',
        text: 'Fast static sites on Astro and Hugo: several languages, search-engine basics, domain and hosting set up.',
        proof: [
          { href: links.tapreply, label: 'tapreply.net' },
          { href: links.terroirSite, label: 'terroir-app.com' },
          { href: '/', label: 'this site' },
        ],
      },
      {
        title: 'Mobile apps',
        text: 'One Flutter app for iOS and Android: screens from your designs, API integration, push notifications, analytics, store release.',
        proof: [{ href: '/#apps', label: '10 apps in the stores' }],
      },
      {
        title: 'Web apps and PWAs',
        text: 'An app that runs in the browser and installs on a phone like a native one — no store release needed. Good for internal tools and first product versions.',
        proof: [{ href: '/#terroir', label: 'PWAs in Terroir and TapReply' }],
      },
      {
        title: 'Internal tools and automation',
        text: 'Admin panels, record keeping, reports, integrations between systems, moving processes from spreadsheets and chats into a clear service.',
        proof: [{ href: links.sitefarm, label: 'data pipeline in Go' }],
      },
      {
        title: 'AI integration',
        text: 'Chat assistants, generating and checking texts, processing data with language models — with budget limits and answer checks so the model does not make things up.',
        proof: [
          { href: '/#sitefarm', label: 'sitefarm' },
          { href: '/#terroir', label: 'Terroir' },
        ],
      },
      {
        title: 'Backends and APIs in Go',
        text: 'REST APIs in Go with PostgreSQL, automated checks and builds on GitHub Actions — the base for an app, a site or a service.',
        proof: [{ href: links.terroir, label: 'Terroir code' }],
      },
    ],
    processTitle: 'How I work',
    process: [
      { title: 'Brief', text: 'Tell me about the task — by email, on Telegram or via the form below. I ask follow-up questions.' },
      { title: 'Plan and estimate', text: 'I come back with a clear plan: what goes into the first version, the stages and an estimate.' },
      { title: 'Iterations with demos', text: 'Short stages, with results shown live rather than in reports.' },
      { title: 'Launch', text: 'I publish the app in the stores, or the site or service on your domain and hosting.' },
      { title: 'Support', text: 'After launch — fixes, updates and new features as agreed.' },
    ],
    small: 'Small tasks are welcome too: improvements, fixes, integrations.',
    legal: 'I work under a contract, with a receipt for every payment.',
    examplesTitle: 'Examples of work',
    examplesLead: 'Everything is published — open it and have a look.',
    examples: [
      { kind: 'site', name: 'TapReply', text: "Product site: replies to guest reviews in the guest's language. Astro, EN/RU.", href: links.tapreply, label: 'Live site ↗', shot: 'tapreply' },
      { kind: 'site', name: 'Terroir', text: 'Product site: a personal wine assistant with memory. Astro, EN/RU.', href: links.terroirSite, label: 'Live site ↗', shot: 'terroir' },
      { kind: 'app', app: 'gsr', name: 'GSR Rabota', text: 'App for contractors of a staffing service: documents, SMS signing, shift booking, payouts, chat. Built from scratch as the sole mobile developer.', href: 'https://apps.apple.com/ru/app/id6771076516', label: 'App Store ↗', more: [{ href: 'https://play.google.com/store/apps/details?id=ru.gsrrabota.mobile', label: 'Google Play ↗' }] },
      { kind: 'app', app: 'lk', name: 'Contractor Account', text: 'Migrated a native Android app to Flutter, shipped it on iOS, developing version 3.x.', href: 'https://apps.apple.com/ru/app/id6748441402', label: 'App Store ↗', more: [{ href: 'https://play.google.com/store/apps/details?id=com.crystalglaive.employee', label: 'Google Play ↗' }, { href: 'https://www.rustore.ru/catalog/app/com.crystalglaive.employee', label: 'RuStore ↗' }] },
      { kind: 'app', app: 'zhabby', name: 'Zhabby', text: 'A short-video social network that rewards activity.', href: 'https://apps.apple.com/ru/app/id6758106499', label: 'App Store ↗' },
      { kind: 'code', name: 'sitefarm', text: 'A Go pipeline: open data → texts from a language model → automated fact-checking → a ready site. About 2,100 pages in the pilot.', href: links.sitefarm, label: 'Code on GitHub ↗' },
    ],
    examplesMore: 'All apps with screenshots',
    faqTitle: 'FAQ',
    faq: [
      { q: 'How much does it cost and how long does it take?', a: 'It depends on the task: scope, integrations, whether a backend is needed. I give an honest estimate after the brief, together with a plan for the first version.' },
      { q: 'Do you build websites?', a: 'Yes: landing pages, company and product sites, multilingual sites. I build fast static sites and set up the domain, hosting and search-engine basics.' },
      { q: 'Can I order a small improvement?', a: 'Yes. Fixing a bug, adding a feature, connecting an integration, updating a site — I take on tasks like that too. First I look at what already exists and tell you how long it will take.' },
      { q: 'Can you add AI to our process?', a: 'Yes, if the task allows it: answering typical questions, processing and checking texts, sorting requests. I set a budget limit and answer checks — and if AI is not a good fit, I say so.' },
      { q: 'Will you publish the app in the stores?', a: 'Yes: App Store, Google Play and RuStore — I have published in all three. Developer accounts are best registered to you — then the app is yours.' },
      { q: 'Who owns the code?', a: 'You do. The code lives in your repository and the rights are transferred under the contract. I can sign an NDA if needed.' },
      { q: 'What happens after launch?', a: 'Support as agreed: bug fixes, updates, new features.' },
    ],
    formTitle: 'Describe your task',
    formLead: 'A couple of lines about what needs to be done is enough to start. I will reply with follow-up questions.',
    form: {
      name: 'Your name',
      contact: 'How to reach you',
      contactHint: 'Email or Telegram',
      kind: 'What do you need',
      kinds: ['Website', 'Mobile app', 'Web app or PWA', 'Automation or internal tool', 'AI integration', 'Improving an existing product', 'Other'],
      task: 'Task',
      taskHint: 'What is needed, for whom, what already exists',
      deadline: 'Desired timeline',
      deadlineHint: 'For example: by spring, no rush',
      submit: 'Send by email',
      note: `Opens your email app with the message to ${links.email} filled in — just press Send.`,
      subject: 'Task: custom development',
    },
    orWrite: 'Or write directly',
    switchLabel: 'RU',
    switchTitle: 'Русская версия',
    backHome: 'Home',
    areaServed: ['Worldwide'],
    serviceName: 'Custom software development: apps, websites, services and AI',
    serviceTypes: ['Website development', 'Mobile app development', 'Web apps and PWAs', 'Business automation', 'AI integration', 'Backend and API development in Go'],
    footer: 'Anton Kozyrev',
  },
};
