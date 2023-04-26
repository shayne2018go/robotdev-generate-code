import { describe, expect, it } from 'vitest';
import { preprocessDependencies } from '../dependencies';
import DBWSchema from '../../../__test__/__fixture__/DBWSchema';

describe('dependencies', () => {
  it('preprocessDependencies', () => {
    const { dependencies, dependenciesPackages } = DBWSchema;

    const component = preprocessDependencies(dependencies, dependenciesPackages);

    expect(component).toMatchSnapshot();
  });
});
