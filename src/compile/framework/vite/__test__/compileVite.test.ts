import codeSchema from '@/__test__/__fixture__/CodeSchema';
import { describe, expect, it } from 'vitest';
import compileVite from '../compileVite';
import compileViteTokens from './fixture/compileViteTokens.json';

describe('compileVite', () => {
  it('compileVite', () => {
    const { tokens } = compileVite(codeSchema, { projectKey: codeSchema.key });

    debugger;
    expect(tokens).toMatchSnapshot();
    expect(tokens).toMatchObject(compileViteTokens);
  });
});
