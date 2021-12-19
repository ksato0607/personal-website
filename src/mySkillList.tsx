export interface ISkill {
  text: string;
  value: number;
  description?: string;
}

const languages: ISkill[] = [
  { text: 'Javascript', value: 3, description: 'Most proficient language' },
  { text: 'TypeScript', value: 2, description: 'Learning to become proficient' },
  { text: 'SQL', value: 2, description: 'Be able to query the necessary data from the database' },
  { text: 'GraphQL', value: 2, description: 'Be able to add endpoints and write simple code' },
  { text: 'HTML', value: 2, description: 'Be able to write simple code' },
  { text: 'CSS', value: 2, description: 'Be able to write simple code' },
  { text: 'Processing', value: 1, description: 'Used in some personal projects' }
];

const frameworks: ISkill[] = [
  { text: 'ReactJs', value: 2, description: 'Most proficient frontend framework' },
  { text: 'NestJs', value: 1, description: 'Be able to maintain and write simple code' },
  { text: 'Serverless', value: 2, description: 'Be able to maintain and deploy aws lambda' }
];

const infra: ISkill[] = [
  { text: 'AWS', value: 2, description: 'Most proficient infrastructure service' },
  { text: 'Heroku', value: 1, description: 'Be able to use CLI and deploy' }
];

const tests: ISkill[] = [
  { text: 'Mocha', value: 2, description: 'Be able to write tests in general' },
  { text: 'Cypress', value: 2, description: 'Be able to write tests in general' }
];

const monitoring: ISkill[] = [
  { text: 'Sumologic', value: 2, description: 'Be able to analyze logs, make dashboards and send alerts' },
  { text: 'Sentry', value: 1, description: 'Be able to implement, monitor the performance and catch errors' }
];

const libraries: ISkill[] = [
  { text: 'Bulma', value: 2, description: 'Most familiar css framework' },
  { text: 'Apollo', value: 1, description: 'Be able to fetch, cache and modify data with GraphQL' }
];

const others: ISkill[] = [
  { text: 'TouchDesigner', value: 2, description: 'Most proficient software for interactive projects' },
  { text: 'Unity', value: 1, description: 'Learning to build more advanced interactive projects' },
  { text: 'Arduino', value: 1, description: 'Be able to connect with various sensors' },
  { text: 'Kinect', value: 1, description: 'Have used in multiple interactive projects' }
];

/**
 * Skills Levels
 * 4 - Advanced
 * 3 - Proficient
 * 2 - Devoping
 * 1 - Novice
 */
export const mySkills: ISkill[] = [
  ...languages,
  ...frameworks,
  ...infra,
  ...monitoring,
  ...tests,
  ...libraries,
  ...others
];
