import codeSchema from '@/__test__/__fixture__/CodeSchema';
import { describe, expect, it } from 'vitest';
import apiTokens from './fixture/api-tokens.json';
import axiosTokens from './fixture/axios-tokens.json';
import compileApis, { compileRequestInstance, parsingApis } from '../compileApis';

describe('compile apis', () => {
  it('compileApis', () => {
    const { apis } = parsingApis(codeSchema);
    const { tokens } = compileApis(codeSchema, apis);
    expect(tokens).toMatchSnapshot();
    expect(tokens).toMatchObject(apiTokens);
  });
  it('compileRequestInstance', () => {
    const tokens = compileRequestInstance({});
    expect(tokens).toMatchSnapshot();
    expect(tokens).toMatchObject(axiosTokens);
  });
});
