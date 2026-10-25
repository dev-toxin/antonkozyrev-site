// Copy for the client-facing service page (draft, branch client-page).
// Facts only from the main site copy and Anton's resume. No prices, no deadlines,
// no client names, no reviews, no phone number.

import { links, type Lang } from './content';

type Item = { title: string; text: string };

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
  meta: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  servicesTitle: string;
  services: Item[];
  processTitle: string;
  process: Item[];
  legal: string;
  examplesTitle: string;
  examplesLead: string;
  examples: { name: string; text: string; href: string }[];
  examplesMore: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  formTitle: string;
  formLead: string;
  form: {
    name: string;
    contact: string;
    contactHint: string;
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
  footer: string;
};

const NB = '\u00A0';

export const client: Record<Lang, ClientCopy> = {
  ru: {
    htmlLang: 'ru',
    path: '/ru/razrabotka-prilozheniy-kaliningrad/',
    altPath: '/custom-app-development/',
    homePath: '/ru/',
    title: 'Разработка мобильных приложений на заказ в Калининграде — iOS и Android на Flutter',
    description: `Создание мобильных приложений для iOS и Android на заказ: Flutter-разработчик в Калининграде, 4,5+${NB}года коммерческой разработки, 10${NB}приложений в сторах. MVP, доработка чужого кода, бэкенд на Go, AI-функции.`,
    eyebrow: 'Калининград и область · удалённо по России',
    h1: `Разработка мобильных приложений на заказ в${NB}Калининграде`,
    lead: `Делаю приложения для iOS и Android на Flutter — от идеи и MVP до публикации в сторах и поддержки. 4,5+${NB}года коммерческой мобильной разработки, 10${NB}приложений в App Store и Google Play. Бэкенд и API — на Go.`,
    meta: [`4,5+${NB}года Flutter`, `10${NB}приложений в сторах`, 'iOS и Android из одного кода'],
    ctaPrimary: 'Описать задачу',
    ctaSecondary: 'Посмотреть приложения',
    servicesTitle: 'Что делаю',
    services: [
      { title: 'Приложение для iOS и Android', text: 'Одно приложение на Flutter для обеих платформ: экраны по макетам в Figma, работа с API, push-уведомления, аналитика и отчёты о сбоях.' },
      { title: 'MVP для проверки идеи', text: 'Минимальная версия продукта, которую можно показать пользователям, — без лишних функций, но с нормальной архитектурой, чтобы потом не переписывать.' },
      { title: 'Доработка и подхват чужого кода', text: `Разберусь в существующем приложении, доведу до релиза, проведу рефакторинг без остановки разработки. Опыт есть: перенёс нативное Android-приложение на Flutter и${NB}выпустил на${NB}iOS.` },
      { title: 'Бэкенд и API на Go', text: 'REST API на Go с PostgreSQL и автоматическими проверками на GitHub Actions — достаточно, чтобы запустить продукт.' },
      { title: 'AI-функции в приложении', text: 'Подключение языковых моделей с лимитом бюджета и проверкой ответов: модель не выдумывает данные и не тратит лишнего.' },
    ],
    processTitle: 'Как работаю',
    process: [
      { title: 'Бриф', text: 'Вы рассказываете о задаче — письмом, в Telegram или через форму ниже. Я задаю уточняющие вопросы.' },
      { title: 'План и оценка', text: 'Возвращаюсь с понятным планом: что входит в первую версию, этапы и оценка.' },
      { title: 'Итерации с демо', text: 'Работаю короткими этапами и показываю результат на устройстве, а не в отчётах.' },
      { title: 'Публикация в сторах', text: 'Готовлю сборки и выпускаю приложение в App Store, Google Play и при необходимости в RuStore.' },
      { title: 'Поддержка', text: 'После запуска — исправления, обновления и новые функции по договорённости.' },
    ],
    legal: 'Работаю официально, как самозанятый: чек на каждую оплату.',
    examplesTitle: 'Приложения, которые я делал',
    examplesLead: 'Опубликованы в сторах — их можно открыть и посмотреть.',
    examples: [
      { name: 'GSR Работа', text: 'Приложение для исполнителей сервиса подбора персонала: документы, подписание по SMS, запись на смены, выплаты, чат. С нуля, единственный мобильный разработчик.', href: 'https://apps.apple.com/ru/app/id6771076516' },
      { name: 'Личный кабинет исполнителя', text: 'Перенос нативного Android-приложения на Flutter, выпуск на iOS, развитие версии 3.x.', href: 'https://apps.apple.com/ru/app/id6748441402' },
      { name: 'Zhabby', text: 'Социальная сеть коротких видео с вознаграждением за активность.', href: 'https://apps.apple.com/ru/app/id6758106499' },
      { name: 'Mealhub', text: 'Поиск ресторанов на карте, бронирование столов и заказ еды.', href: 'https://apps.apple.com/ru/app/mealhub/id1640713837' },
    ],
    examplesMore: 'Все приложения со скриншотами',
    faqTitle: 'Частые вопросы',
    faq: [
      { q: 'Сколько стоит и сколько времени займёт разработка?', a: 'Зависит от задачи: количества экранов, интеграций, нужен ли бэкенд. Честную оценку даю после брифа — вместе с планом, что входит в первую версию.' },
      { q: 'Почему Flutter, а не отдельные приложения для iOS и Android?', a: 'Один код для двух платформ: дешевле в разработке и поддержке, функции выходят одновременно на iOS и Android. Для большинства бизнес-приложений этого достаточно.' },
      { q: 'Опубликуете приложение в сторах?', a: 'Да, подготовлю сборки и выпущу в App Store и Google Play. Публиковал и в RuStore. Аккаунты разработчика лучше оформить на вас — тогда приложение принадлежит вам.' },
      { q: 'Кому принадлежит код?', a: 'Вам. Код хранится в вашем репозитории, права передаются по договору. Если нужно, подпишу NDA.' },
      { q: 'Можно ли доработать уже существующее приложение?', a: 'Да. Сначала разбираюсь в коде и честно говорю, что стоит исправить, а что можно оставить. Затем — доработки и релизы без остановки приложения.' },
      { q: 'Что после запуска?', a: 'Поддержка по договорённости: исправление ошибок, обновления под новые версии iOS и Android, новые функции.' },
    ],
    formTitle: 'Опишите задачу',
    formLead: 'Пары строк о том, что нужно сделать, достаточно, чтобы начать. Отвечу и задам уточняющие вопросы.',
    form: {
      name: 'Как к вам обращаться',
      contact: 'Как с вами связаться',
      contactHint: 'Email или Telegram',
      task: 'Задача',
      taskHint: 'Что за приложение, для кого, что уже есть',
      deadline: 'Желаемый срок',
      deadlineHint: 'Например: к весне, не горит',
      submit: 'Отправить письмом',
      note: `Откроется почта с готовым письмом на ${links.email} — останется нажать «Отправить».`,
      subject: 'Задача: разработка приложения',
    },
    orWrite: 'Или напишите напрямую',
    switchLabel: 'EN',
    switchTitle: 'English version',
    backHome: 'Главная',
    areaServed: ['Калининград', 'Калининградская область', 'Россия'],
    serviceName: 'Разработка мобильных приложений на заказ',
    footer: 'Антон Козырев',
  },
  en: {
    htmlLang: 'en',
    path: '/custom-app-development/',
    altPath: '/ru/razrabotka-prilozheniy-kaliningrad/',
    homePath: '/',
    title: 'Custom mobile app development — iOS and Android with Flutter · Anton Kozyrev',
    description: 'Custom iOS and Android apps built with Flutter: 4.5+ years of commercial mobile development, 10 apps in the stores. MVPs, taking over existing code, Go backends, AI features. Remote, worldwide.',
    eyebrow: 'Remote · worldwide',
    h1: 'Custom mobile app development for iOS and Android',
    lead: 'I build iOS and Android apps with Flutter — from an idea and MVP to the store release and support. 4.5+ years of commercial mobile development, 10 apps in the App Store and Google Play. Backend and APIs in Go.',
    meta: ['4.5+ yrs Flutter', '10 apps in the stores', 'iOS and Android from one codebase'],
    ctaPrimary: 'Describe your task',
    ctaSecondary: 'See the apps',
    servicesTitle: 'What I do',
    services: [
      { title: 'An app for iOS and Android', text: 'One Flutter app for both platforms: screens from your Figma designs, API integration, push notifications, analytics and crash reporting.' },
      { title: 'An MVP to test the idea', text: 'A minimal version you can show to users — no extra features, but a sound architecture so it does not need a rewrite later.' },
      { title: 'Taking over existing code', text: "I'll get into an existing app, bring it to release and refactor it without stopping development. I've migrated a native Android app to Flutter and shipped it on iOS." },
      { title: 'Backend and APIs in Go', text: 'A REST API in Go with PostgreSQL and automated checks on GitHub Actions — enough to launch a product.' },
      { title: 'AI features in your app', text: 'Language models with budget limits and answer checks: the model does not invent data and does not overspend.' },
    ],
    processTitle: 'How I work',
    process: [
      { title: 'Brief', text: 'Tell me about the task — by email, on Telegram or via the form below. I ask follow-up questions.' },
      { title: 'Plan and estimate', text: 'I come back with a clear plan: what goes into the first version, the stages and an estimate.' },
      { title: 'Iterations with demos', text: 'Short stages, with results shown on a device rather than in reports.' },
      { title: 'Store release', text: 'I prepare the builds and publish the app in the App Store and Google Play.' },
      { title: 'Support', text: 'After launch — fixes, updates and new features as agreed.' },
    ],
    legal: 'I work under a contract, with a receipt for every payment.',
    examplesTitle: 'Apps I have built',
    examplesLead: 'Published in the stores — open them and have a look.',
    examples: [
      { name: 'GSR Rabota', text: 'App for contractors of a staffing service: documents, SMS signing, shift booking, payouts, chat. Built from scratch as the sole mobile developer.', href: 'https://apps.apple.com/ru/app/id6771076516' },
      { name: 'Contractor Account', text: 'Migrated a native Android app to Flutter, shipped it on iOS, developing version 3.x.', href: 'https://apps.apple.com/ru/app/id6748441402' },
      { name: 'Zhabby', text: 'A short-video social network that rewards activity.', href: 'https://apps.apple.com/ru/app/id6758106499' },
      { name: 'Mealhub', text: 'Restaurant search on a map, table booking and food ordering.', href: 'https://apps.apple.com/ru/app/mealhub/id1640713837' },
    ],
    examplesMore: 'All apps with screenshots',
    faqTitle: 'FAQ',
    faq: [
      { q: 'How much does it cost and how long does it take?', a: 'It depends on the task: the number of screens, integrations, whether a backend is needed. I give an honest estimate after the brief, together with a plan for the first version.' },
      { q: 'Why Flutter rather than separate iOS and Android apps?', a: 'One codebase for two platforms: cheaper to build and maintain, and features ship on iOS and Android at the same time. For most business apps that is enough.' },
      { q: 'Will you publish the app in the stores?', a: 'Yes, I prepare the builds and release the app in the App Store and Google Play. Developer accounts are best registered to you — then the app is yours.' },
      { q: 'Who owns the code?', a: 'You do. The code lives in your repository and the rights are transferred under the contract. I can sign an NDA if needed.' },
      { q: 'Can you work on an existing app?', a: 'Yes. First I get into the code and tell you honestly what is worth fixing and what can stay. Then improvements and releases without stopping the app.' },
      { q: 'What happens after launch?', a: 'Support as agreed: bug fixes, updates for new iOS and Android versions, new features.' },
    ],
    formTitle: 'Describe your task',
    formLead: 'A couple of lines about what needs to be built is enough to start. I will reply with follow-up questions.',
    form: {
      name: 'Your name',
      contact: 'How to reach you',
      contactHint: 'Email or Telegram',
      task: 'Task',
      taskHint: 'What kind of app, for whom, what already exists',
      deadline: 'Desired timeline',
      deadlineHint: 'For example: by spring, no rush',
      submit: 'Send by email',
      note: `Opens your email app with the message to ${links.email} filled in — just press Send.`,
      subject: 'Task: app development',
    },
    orWrite: 'Or write directly',
    switchLabel: 'RU',
    switchTitle: 'Русская версия',
    backHome: 'Home',
    areaServed: ['Worldwide'],
    serviceName: 'Custom mobile app development',
    footer: 'Anton Kozyrev',
  },
};
