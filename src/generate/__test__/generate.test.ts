import tokens from '@/compile/framework/vite/__test__/fixture/compileViteTokens.json';
import { describe } from 'vitest';
import generate from '../generate';

describe('generate', () => {
  // const { compile } = compilerFactory({});

  // const tokens = compile();

  generate(tokens);
});
