interface ISkill {
  text: string;
  value: number;
}

const languages: ISkill[] = [
  { text: 'TypeScript', value: 2 },
  { text: 'Javascript', value: 3 },
  { text: 'Ruby', value: 2 },
  { text: 'SQL', value: 2 },
  { text: 'GraphQL', value: 2 },
  { text: 'HTML', value: 2 },
  { text: 'CSS', value: 2 },
  { text: 'C++', value: 1 },
  { text: 'Processing', value: 1 }
];

const frameworks: ISkill[] = [
  { text: 'ReactJs', value: 2 },
  { text: 'NestJs', value: 1 },
  { text: 'Serverless', value: 2 }
];

const infra: ISkill[] = [
  { text: 'AWS', value: 2 },
  { text: 'Heroku', value: 1 }
];

const tests: ISkill[] = [
  { text: 'Mocha', value: 2 },
  { text: 'Cypress', value: 2 }
];

const monitoring: ISkill[] = [
  { text: 'Sumologic', value: 2 },
  { text: 'Sentry', value: 1 }
];

const libraries: ISkill[] = [
  { text: 'Bulma', value: 2 },
  { text: 'Apollo', value: 1 }
];

const others: ISkill[] = [
  { text: 'TouchDesigner', value: 2 },
  { text: 'Arduino', value: 1 },
  { text: 'Kinect', value: 1 }
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
