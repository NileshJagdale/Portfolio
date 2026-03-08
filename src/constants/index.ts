import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  deavnet,
  ScriptLanes,
  carrent,
  jobit,
  tripguide,
  angular,
  bitbucket,
  firebase,
  postgress,
  mysql,
  next,
  aws,
  github,
  postman,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Web Application Developer',
    icon: web,
    name: 'React.js | Next.js | Angular.js',
  },
  {
    title: 'Mobile Application Developer',
    icon: mobile,
    name: 'React-Native',
  },
  {
    title: 'Backend Developer',
    icon: backend,
    name: 'Node.js',
  },
];

const technologies: TTechnology[] = [
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Next JS',
    icon: next,
  },
  {
    name: 'angular',
    icon: angular,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'postgress',
    icon: postgress,
  },
  {
    name: 'mysql',
    icon: mysql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'github',
    icon: github,
  },
  {
    name: 'bitbucket',
    icon: bitbucket,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'aws',
    icon: aws,
  },
  {
    name: 'firebase',
    icon: firebase,
  },
  {
    name: 'postman',
    icon: postman,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Full Stack Web Developer',
    companyName: 'Deavnet Solutions',
    icon: deavnet,
    iconBg: '#382E56',
    date: 'Dec 2017 - Apr 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full Stack Web Developer',
    companyName: 'Script Lanes',
    icon: ScriptLanes,
    iconBg: '#4A3B66',
    date: 'May 2021 - Present',
    points: [
      'Developing and scaling high-performance web and mobile applications using React.js, Next.js, and React Native to deliver seamless cross-platform user experiences.',
      'Architecting and managing automated CI/CD pipelines on AWS to streamline deployment processes, ensuring rapid, reliable, and secure production releases.',
      'Collaborating with cross-functional teams to translate complex business requirements into scalable technical solutions with a focus on responsive design and performance optimization.',
      'Driving code quality through rigorous peer reviews, TypeScript implementation, and mentorship to maintain clean, maintainable, and efficient codebases.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Ticketalay',
    description:
      'Ticketalay is an online event ticket booking platform where users can discover and book tickets for entertainment events such as Marathi natak, cinema, musical  concerts, folk and cultural programs. It provides information about upcoming shows and allows users to book tickets online without standing in queues.',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'Node.js',
        color: 'green-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeLink: 'https://www.ticketalay.com/',
  },
  {
    name: 'Flourish Ai',
    description:
      'Flourish AI is an AI-powered nutrition and health tracking platform that helps users understand how their food choices affect their health and digestion. The platform uses artificial intelligence and research-based data to provide personalized nutrition insights, meal recommendations, and symptom tracking.',
    tags: [
      {
        name: 'React-Native',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'Node.js',
        color: 'green-text-gradient',
      },
    ],
    image: jobit,
    sourceCodeLink: 'https://www.tryflourish.ai/',
  },
  {
    name: 'FormFlash',
    description:
      'FormFlash is a healthcare management and patient information platform designed for a health system that includes hospitals, a children’s medical center, behavioral health services provider group. The platform helps manage patient information, hospital services, and healthcare workflows in one centralized system.',
    tags: [
      {
        name: 'React.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'Node.js',
        color: 'green-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink: 'https://formflash.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
