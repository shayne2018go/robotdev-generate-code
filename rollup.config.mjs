import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const inputPath = path.resolve(__dirname, './src/index.ts');
const outputUmdPath = path.resolve(__dirname, './dist/index.umd.js');
const outputEsPath = path.resolve(__dirname, './dist/index.esm.js');
const outputCjsPath = path.resolve(__dirname, './dist/index.cjs.js');

export default {
  input: inputPath,
  output: [
    {
      file: outputUmdPath,
      format: 'umd', // umd、cjs、es
      name: 'index',
    },
    {
      file: outputEsPath,
      format: 'es',
      sourcemap: true,
    },
    {
      file: outputCjsPath,
      format: 'cjs',
      sourcemap: true,
    },
  ],

  plugins: [
    json(),
    typescript({
      exclude: ['node_modules/**', '**/templates/**', '**/__test__/**', 'src/compile/tokens/programming/**'],
    }),
    commonjs(),
    resolve(),
    babel({
      exclude: ['node_modules'],
    }),
    copy({
      targets: [
        {
          src: './src/compile/framework/vite/templates/*',
          dest: './dist/templates',
        },
        {
          src: './src/compile/syntax/vue/templates/*',
          dest: './dist/templates',
        },
      ],
    }),
  ],
  external: ['**/templates/**', '**/__test__/**', 'src/compile/tokens/programming/**', 'prettier'],
};
