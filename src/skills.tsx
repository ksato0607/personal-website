interface ISkill {
  text: string;
  value: number;
}

const languages: ISkill[] = [
  { text: 'TypeScript', value: 2 },
  { text: 'Javascript', value: 4 },
  { text: 'Ruby', value: 2 },
  { text: 'SQL', value: 3 },
  { text: 'GraphQL', value: 2 },
  { text: 'HTML', value: 2 },
  { text: 'CSS', value: 2 },
  { text: 'C++', value: 1 },
  { text: 'Processing', value: 2 },
  { text: 'Python', value: 1 }
];

const frameworks: ISkill[] = [
  { text: 'ReactJs', value: 3 },
  { text: 'NestJs', value: 2 },
  { text: 'Serverless', value: 2 }
];

const infra: ISkill[] = [
  { text: 'AWS', value: 3 },
  { text: 'Heroku', value: 3 }
];

const tests: ISkill[] = [
  { text: 'Mocha', value: 3 },
  { text: 'Cypress', value: 4 }
];

const monitoring: ISkill[] = [
  { text: 'Sumologic', value: 3 },
  { text: 'Sentry', value: 3 }
];

const libraries: ISkill[] = [
  { text: 'Bulma', value: 2 },
  { text: 'Apollo', value: 2 }
];

const others: ISkill[] = [
  { text: 'TouchDesigner', value: 3 },
  { text: 'Arduino', value: 1 },
  { text: 'Kinect', value: 2 }
];

/**
 * Skills Levels
 * 5 - Achieved
 * 4 - Proficient
 * 3 - Experienced
 * 2 - Begineer
 * 1 - Learning
 */
export const skills: ISkill[] = [
  ...languages,
  ...frameworks,
  ...infra,
  ...monitoring,
  ...tests,
  ...libraries,
  ...others
];
