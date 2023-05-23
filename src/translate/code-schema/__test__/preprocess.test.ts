import webData from '../../../__test__/__fixture__/DBWSchema';
import preprocess from '../';
import codeSchemaTarget from '../../../__test__/__fixture__/CodeSchema';

describe('preprocess', () => {
  it('code schema', () => {
    const codeSchema = preprocess(webData);
    const target = codeSchemaTarget;

    debugger;
    expect(codeSchema).toMatchSnapshot();
    expect(codeSchema).toMatchObject(target);
  });
});
