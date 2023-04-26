import { describe, it, expect } from 'vitest';
import { generateCss, generateStyle } from '../core';
import { ICss, IStyle } from '../types';

const schema_block1: ICss = [
  {
    type: 'block',
    key: '@media screen and (min-width: 900px)',
    value: [
      {
        type: 'block',
        key: 'body',
        value: [
          {
            type: 'attr',
            key: 'background-color',
            value: '#000',
          },
        ],
      },
    ],
  },
  {
    type: 'block',
    key: '@font-face',
    value: [
      {
        type: 'attr',
        key: 'font-family',
        value: '"Open Sans"',
      },
    ],
  },
  {
    type: 'block',
    key: 'body',
    value: [
      {
        type: 'attr',
        key: 'background-color',
        value: '#fff',
      },
    ],
  },
  {
    type: 'block',
    key: 'body',
    value: [
      {
        type: 'block',
        key: 'div',
        value: [
          {
            type: 'attr',
            key: 'background-color',
            value: '#000',
          },
        ],
      },
    ],
  },
];
const schema_attr1: IStyle = [
  {
    key: 'background-color',
    value: '#ffffff',
  },
  {
    key: 'font-size',
    value: '14px',
  },
  {
    key: 'color',
    value: 'rgba(0, 0, 0, .6)',
  },
];
const schema_common1: ICss = [
  {
    type: 'common',
    key: '@charset',
    value: '"UTF-8"',
  },
  {
    type: 'common',
    key: '@import',
    value: '"../../index.block"',
  },
];
describe('generateCss', () => {
  describe('generateCss schema_block', () => {
    it('block', () => {
      const code = generateCss(schema_block1);
      expect(
        `@media screen and (min-width: 900px){body{background-color:#000;}}@font-face{font-family:"Open Sans";}body{background-color:#fff;}body{div{background-color:#000;}}`
      ).toEqual(code);
    });
  });
  describe('generateCss schema_attr', () => {
    it('attr', () => {
      const code = generateStyle(schema_attr1);
      expect(`background-color:#ffffff;font-size:14px;color:rgba(0, 0, 0, .6);`).toEqual(code);
    });
    it('common', () => {
      const code = generateCss(schema_common1);
      expect(`@charset "UTF-8";@import "../../index.block";`).toEqual(code);
    });
  });
});
