import tokens from '@/compile/framework/vite/__test__/fixture/vite-tokens.json';
import { describe } from 'vitest';
import generate from '../generate';

describe('generate', () => {
  generate(tokens);
});
