import { translate } from '@/index';
import dbschema from '@/__test__/__fixture__/DBSchema';
import axios from 'axios';
import * as Fxc from '@robotdev/fx-code';

describe('translate', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  it('all', async () => {
    debugger;
    const tranlateSchema = await translate(dbschema, {
      async translateFn(name: string) {
        const regex = new RegExp(/\s*[-|\/|\(|\)|\（|\）]\s*/, 'gi');
        name = name.replace(regex, '');

        try {
          const response: any = await axios.get(
            `http://6219dc51c1edd6d0f0229f09.server.robodev.cn/words/${encodeURI(name)}`
          );

          if (response.data) {
            return response.data.translations[0].wordClassTranslations;
          } else {
            const text = Fxc.toPinyin(name);
            return { text: text, plural: `${text}s` };
          }
        } catch (err) {
          const text = Fxc.toPinyin(name);
          return { text: text, plural: `${text}` };
        }
      },
    });

    console.log(tranlateSchema);
    debugger;
  });
});
