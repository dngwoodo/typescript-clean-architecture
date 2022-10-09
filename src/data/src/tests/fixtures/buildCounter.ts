import { faker } from '@faker-js/faker';
import * as core from '../../../../core/src';

export const buildCounter = (): core.Counter => ({
  id: faker.datatype.uuid(),
  currentCount: faker.datatype.number(),
  incrementAmount: faker.datatype.number(),
  decrementAmount: faker.datatype.number(),
  label: faker.lorem.words(),
});
