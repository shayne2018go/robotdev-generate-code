import { describe, expect, it } from 'vitest';
import { createExpression, updateObjectExpression } from '../object-expression';
import { ObjectExpression } from '@babel/types';

describe('object-expression', () => {
  it('createExpression', () => {
    const expression = createExpression(['a', 'b'], { d: 123 });

    expect(expression).toMatchSnapshot();
  });

  it('updateObjectExpression', () => {
    const expression = createExpression(['a', 'b'], { d: 123 });

    if (expression) {
      updateObjectExpression(expression as ObjectExpression, 'b.e', true);
    }
  });
});
