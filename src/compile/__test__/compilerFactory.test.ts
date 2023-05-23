import codeSchema from '@/__test__/__fixture__/CodeSchema';
import compilerFactory from '@/compile/compilerFactory';

describe('compilerFactory', () => {
  it('compile', () => {
    const { compiler } = compilerFactory(codeSchema);

    const tokens = compiler();

    debugger;
    expect(tokens).toMatchSnapshot();
  });
});
