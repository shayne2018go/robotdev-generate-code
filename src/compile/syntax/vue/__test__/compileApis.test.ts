import codeSchema from '@/__test__/__fixture__/CodeSchema';
import { describe, expect, it } from 'vitest';
import apiTokens from './fixture/api-tokens.json';
import axiosTokens from './fixture/axios-tokens.json';
import compileApis, { compileRequestInstance } from '../compileApis';

describe('compile apis', () => {
  it('compileApis', () => {
    const { tokens } = compileApis(codeSchema);
    expect(tokens).toMatchSnapshot();
    expect(tokens).toMatchObject(apiTokens);
  });
  it('compileRequestInstance', () => {
    const tokens = compileRequestInstance({});
    expect(tokens).toMatchSnapshot();
    expect(tokens).toMatchObject(axiosTokens);
  });
});
