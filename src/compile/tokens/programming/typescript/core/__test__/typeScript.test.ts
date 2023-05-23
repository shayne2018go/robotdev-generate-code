import { GenerateTypeScript } from '../typescript';

describe('GenerateTypeScript', () => {
  it('Scenario 1', () => {
    const code = new GenerateTypeScript().statements([]);
    expect(``).toEqual(code);
  });
});
