import codeSchema from '@/__test__/__fixture__/CodeSchema';
import { describe, expect, it } from 'vitest';
import apiTokens from './fixture/api-tokens.json';
import compileApis from '../compileApis';

describe('compile apis', () => {
  it('compileApis', () => {
    const { tokens } = compileApis(codeSchema);
    expect(tokens).toMatchSnapshot();
    expect(tokens).toMatchObject(apiTokens);
  });
});
