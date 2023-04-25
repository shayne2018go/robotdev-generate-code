import { describe, it, expect } from 'vitest';
import { generateBlock, generateAttr } from '../core';
import { IBlock, IAttr } from '../types';

const schema_block1: IBlock = [
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
const schema_attr1: IAttr = [
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
const schema_common1: IBlock = [
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
describe('generate', () => {
  describe('generateJson schema_block', () => {
    it('block', () => {
      const code = generateBlock(schema_block1);
      expect(
        `@media screen and (min-width: 900px){body{background-color:#000;}}@font-face{font-family:"Open Sans";}body{background-color:#fff;}body{div{background-color:#000;}}`
      ).toEqual(code);
    });
  });
  describe('generateJson schema_attr', () => {
    it('attr', () => {
      const code = generateAttr(schema_attr1);
      expect(`background-color:#ffffff;font-size:14px;color:rgba(0, 0, 0, .6);`).toEqual(code);
    });
    it('common', () => {
      const code = generateBlock(schema_common1);
      expect(`@charset "UTF-8";@import "../../index.block";`).toEqual(code);
    });
  });
});
