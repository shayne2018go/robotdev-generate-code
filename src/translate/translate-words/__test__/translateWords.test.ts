import * as Fxc from '@robotdev/fx-code';
import translateWords from '..';
import DBSchema from '../../../__test__/__fixture__/DBSchema';
import DBWSchema from '../../../__test__/__fixture__/DBWSchema';

/**
 * 翻译name为key
 */

const getTranlatedWord = async (name: string) => {
  return Fxc.toPinyin(name).replace(/\s/g, '');
};
describe('translateWords', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  it('start', async () => {
    const dbData = DBSchema;
    const target = DBWSchema;

    debugger;
    await translateWords(dbData, { translateFn: getTranlatedWord });

    jest.runAllTimers();

    debugger;
    expect(dbData).toMatchSnapshot();

    expect(dbData).toMatchObject(target);
  });
});
