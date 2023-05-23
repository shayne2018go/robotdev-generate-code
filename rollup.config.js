import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import path from 'path';
import copy from 'rollup-plugin-copy';
import externals from 'rollup-plugin-node-externals';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import { fileURLToPath } from 'url';
import alias from '@rollup/plugin-alias';

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
    },
  ],

  plugins: [
    // polyfillNode(),
    copy({
      targets: [
        { src: './src/compile/framework/vite/templates/*', dest: './dist/templates' },
        { src: './src/compile/syntax/vue/templates/*', dest: './dist/templates' },
      ],
    }),
    externals(),
    resolve(),
    commonjs(),
    typescript({
      exclude: ['node_modules/**', '**/templates/**', '**/__test__/**', 'src/compile/tokens/programming/**'],
      tsconfigOverride: true,
      // typescript: import('typescript'),
      useTsconfigDeclarationDir: true,
    }),
    alias({
      '@/*': path.resolve(__dirname, './src/*'),
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    json(),
    terser(),
  ],
  external: ['**/templates/**', '**/__test__/**', 'src/compile/tokens/programming/**'],
};
