import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import translateWords from '../translateWords';
import DBSchema from '../../../__test__/__fixture__/DBSchema';
import DBWSchema from '../../../__test__/__fixture__/DBWSchema';

/**
 * 翻译name为key
 */
describe('translateWords', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('start', async () => {
    const dbData = DBSchema;
    const target = DBWSchema;
    await translateWords(dbData);

    vi.runAllTimers();

    debugger;
    expect(dbData).toMatchSnapshot();
    expect(dbData).toMatchObject(target);
  });
});
