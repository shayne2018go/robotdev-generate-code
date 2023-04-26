import { describe, it, expect } from 'vitest';
import { GenerateTypeScript } from '../core';
import { mock_export, mock_export_all, mock_export_all_as, mock_export_default, mock_export_without_path } from './fixtures/export';

describe('generateExport', () => {
  it('export', () => {
    const code = new GenerateTypeScript().export(mock_export);
    expect(`export{temp}from'./core'`).toEqual(code);
  });
  it('export default', () => {
    const code = new GenerateTypeScript().export(mock_export_default);
    expect(`export{default as defaultTemp,temp,temp1}from'./core'`).toEqual(code);
  });
  it('export *', () => {
    const code = new GenerateTypeScript().export(mock_export_all);
    expect(`export*from'./core'`).toEqual(code);
  });
  it('export * as', () => {
    const code = new GenerateTypeScript().export(mock_export_all_as);
    expect(`export * as all from'./core'`).toEqual(code);
  });
  it('export no path', () => {
    const code = new GenerateTypeScript().export(mock_export_without_path);
    expect(`export{temp,temp1}`).toEqual(code);
  });
});