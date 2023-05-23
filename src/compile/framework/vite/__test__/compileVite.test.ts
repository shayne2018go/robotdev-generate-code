import codeSchema from '@/__test__/__fixture__/CodeSchema';
import compileVite from '../compileVite';
import compileViteTokens from './fixture/vite-tokens.json';

describe('compileVite', () => {
  it('compileVite', () => {
    const { tokens } = compileVite(codeSchema, { projectKey: codeSchema.key, syntax: 'vue3' });

    debugger;
    expect(tokens).toMatchSnapshot();
    expect(tokens).toMatchObject(compileViteTokens);
  });
});
