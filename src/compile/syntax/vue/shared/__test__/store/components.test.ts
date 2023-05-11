import { describe, expect, it } from 'vitest';
import { componentsDataStore } from '../../store/components';

describe('components', () => {
  it('button', () => {
    const button = {
      id: 'a',
      key: 'a-button',
      protocol: {
        id: '123',
        name: '按钮',
        key: 'a-button',
        props: [
          {
            id: 'a1',
            key: 'align',
            types: [
              {
                type: 'text',
              },
            ],
          },
          {
            id: 'b',
            key: 'align',
            types: [
              {
                type: 'text',
              },
            ],
          },
        ],
        emits: [],
        slots: [],
        variables: [],
        nodes: [],
        lifeCycle: [],
        functions: [],
        classes: [],
      },
    } as GlobalContext.Component;
    const store = componentsDataStore([button]);
    expect(button).toEqual(store.getCmpt('a'));
  });
});
