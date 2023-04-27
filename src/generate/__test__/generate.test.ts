import compilerFactory from '@/compile/compilerFactory';
import { describe } from 'vitest';
import generate from '../generate';
import tokens from '@/compile/framework/vite/__test__/fixture/compileViteTokens.json';

describe('generate', () => {
  // const { compile } = compilerFactory({});

  // const tokens = compile();

  generate(tokens);
});
