import { describe, expect, it } from 'vitest';
import compileViteTemplate from '../compileViteTemplate';
import templateVueTsTokens from './fixture/template-vue-ts-tokens.json';

describe('compileViteTemplate', () => {
  it('code schema', () => {
    const { tokens } = compileViteTemplate('vue-ts');

    debugger;
    expect(tokens).toMatchSnapshot();
    expect(tokens).toMatchObject(templateVueTsTokens);
  });
});
