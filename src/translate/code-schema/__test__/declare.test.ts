import { DBWSchema } from '@/types';
import { describe, expect, it } from 'vitest';
import { preprocessDeclare } from '../shared/declare';

describe('declare', () => {
  it('preprocessDeclare text', () => {
    const rdProp = {
      id: '641a7052cf44f6204642b6bf',
      key: 'class',
      types: [
        {
          type: 'text',
        },
      ],
      name: '布局样式',
      desc: '容器class',
    } as DBWSchema.RdDefineProp;

    const declare = preprocessDeclare(rdProp);

    expect(declare).toMatchSnapshot();
    expect(declare).toMatchObject({
      desc: '容器class',
      id: '641a7052cf44f6204642b6bf',
      key: 'class',
      name: '布局样式',
      types: [
        {
          type: 'text',
        },
      ],
    });
  });

  it('preprocessDeclare text', () => {
    const rdProp = {
      id: '641a7052cf44f6204642b6bf',
      key: 'class',
      types: [
        {
          type: 'text',
        },
      ],
      name: '布局样式',
      desc: '容器class',
    } as DBWSchema.RdDefineProp;

    const declare = preprocessDeclare(rdProp);

    expect(declare).toMatchSnapshot();
    expect(declare).toMatchObject({
      desc: '容器class',
      id: '641a7052cf44f6204642b6bf',
      key: 'class',
      name: '布局样式',
      types: [
        {
          type: 'text',
        },
      ],
    });
  });
});
