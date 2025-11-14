export type CvArticle = {
  title: string;
  org?: string;
  location?: string;
  period?: string;
  bullets: string[];
  tags?: string[];
  type: 'work' | 'education';
};

export const cvArticles: CvArticle[] = [
  {
    title: 'Full-Stack QA Engineer / SDET Intern',
    org: 'Webeet.io',
    location: 'Remote',
    period: 'Aug 2025 – Present',
    bullets: [
      'Worked on full-stack feature development and automated testing using TypeScript, React, and Fastify.',
      'Developed and executed Playwright, Vitest, and Jest test suites covering UI, API, and service layers.',
      'Integrated automated checks into CI/CD pipelines and improved stability with smoke and regression testing.',
      'Participated in service integration and implementation across Fastify and Kafka microservices.',
      'Practiced TDD/BDD for new modules and maintained test data consistency across environments.',
      'Collaborated with developers during code reviews to ensure testability and clean architecture.',
      'Supported onboarding of new QA interns through documentation, pairing, explaining project structure, and tooling setup.',
    ],
    tags: [
      'TypeScript',
      'React',
      'Fastify',
      'Playwright',
      'Vitest',
      'Jest',
      'Zod',
      'Kafka',
      'PostgreSQL',
      'Docker',
      'CI/CD',
      'TDD/BDD',
    ],
    type: 'work',
  },

  {
    title: 'Software Engineering',
    org: 'Masterschool',
    location: 'Remote',
    period: 'Jul 2024 – Aug 2025',
    bullets: [
      'Intensive software engineering program with specialization in QA and test automation.',
      'Trained in software development (Python, OOP, databases, web applications) with practical QA through project-based learning.',
      'Focused on test case design, automation, debugging, and reporting in agile environments using modern frameworks and CI/CD workflows.',
    ],
    tags: ['Python', 'QA', 'Test Automation', 'Agile', 'CI/CD'],
    type: 'education',
  },
  {
    title: 'Electrical Technician',
    org: 'Persona Service',
    location: 'Lehrte, Germany',
    period: 'Apr 2023 – Dec 2023',
    bullets: [
      'Performed preventive and corrective maintenance on industrial systems.',
      'Diagnosed PLC-controlled machinery and optimized technical documentation.',
    ],
    tags: ['Maintenance', 'PLC', 'Diagnostics', 'Process Optimization'],
    type: 'work',
  },
  {
    title: 'Service Technician (Wind Power)',
    org: 'BWTS GmbH',
    location: 'Germany',
    period: 'Jan 2022 – Apr 2023',
    bullets: [
      'Maintained and diagnosed wind-power systems, reducing downtime by 20%.',
      'Improved process documentation and trained new technicians.',
    ],
    tags: ['Wind Power', 'Technical Service', 'Documentation', 'Team Training'],
    type: 'work',
  },
  {
    title: 'Customer Support Agent',
    org: 'Cloudworkers LTD',
    location: 'Remote',
    period: 'Aug 2018 – Feb 2020',
    bullets: [
      'Provided technical support for software and hardware clients.',
      'Improved customer satisfaction and reduced resolution time by 25%.',
    ],
    tags: ['Technical Support', 'Customer Communication', 'Problem Solving'],
    type: 'work',
  },
  {
    title: 'Electromechanic / Machine Builder',
    org: 'Stöcklin Logistics Switzerland',
    location: 'Basel, Switzerland',
    period: 'Oct 2016 – Feb 2017',
    bullets: [
      'Assembled industrial vehicles and performed technical quality checks.',
      'Documented deviations and proposed process improvements.',
    ],
    tags: ['Assembly', 'Quality Control', 'Documentation'],
    type: 'work',
  },
  {
    title: 'Elevator Service Technician',
    org: 'Schindler Elevators AG Switzerland',
    location: 'Kanton ZH – AG, Switzerland',
    period: 'Jul 2013 – Dec 2015',
    bullets: [
      'Maintained and repaired elevator systems, meeting 97% service targets.',
      'Produced maintenance documentation and optimized service schedules.',
    ],
    tags: ['Maintenance', 'Repair', 'Elevators', 'Process Optimization'],
    type: 'work',
  },
  {
    title: 'Bar Manager – MS Swiss Ruby',
    org: 'Scylla River Cruises AG',
    location: 'Europe',
    period: 'Feb 2011 – Feb 2012',
    bullets: [
      'Managed day-to-day bar operations aboard a 5-star river cruise ship.',
      'Led a multicultural team and increased turnover by 15%.',
    ],
    tags: ['Hospitality', 'Team Management', 'Service Optimization'],
    type: 'work',
  },
  {
    title: 'ISTQB Certified Tester – Foundation Level (Expected Nov 2025)',
    org: 'ISTQB',
    location: 'Remote',
    period: '2025',
    bullets: [
      'Preparing for CTFL exam to formalize software testing principles and terminology.',
    ],
    tags: ['ISTQB', 'Software Testing', 'Quality Assurance'],
    type: 'education',
  },
];
