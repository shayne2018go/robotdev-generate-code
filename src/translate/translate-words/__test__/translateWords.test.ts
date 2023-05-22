import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import DBSchema from '../../../__test__/__fixture__/DBSchema';
import DBWSchema from '../../../__test__/__fixture__/DBWSchema';
import axios from 'axios';
import * as Fxc from '@robotdev/fx-code';
import translateWords from '..';

/**
 * 翻译name为key
 */

const getTranlatedWord = async (name: string) => {
  return Fxc.toPinyin(name).replace(/\s/g, '');
};
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

    debugger;
    await translateWords(dbData, { translateFn: getTranlatedWord });

    vi.runAllTimers();

    debugger;
    expect(dbData).toMatchSnapshot();
    expect(dbData).toMatchObject(target);
  });
});
