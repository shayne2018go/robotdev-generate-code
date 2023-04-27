import { describe, it, expect } from 'vitest';
import { statement } from '../statement';
import { mock_export, mock_export_all, mock_export_all_as, mock_export_default, mock_export_without_path } from './fixtures/stmtExport';

describe('statement export', () => {
  it('export', () => {
    const code = statement.export(mock_export);
    expect(`export{temp}from'module'`).toEqual(code);
  });
  it('export default', () => {
    const code = statement.export(mock_export_default);
    expect(`export{default as alias,temp,temp1}from'module'`).toEqual(code);
  });
  it('export *', () => {
    const code = statement.export(mock_export_all);
    expect(`export*from'module'`).toEqual(code);
  });
  it('export * as', () => {
    const code = statement.export(mock_export_all_as);
    expect(`export * as alias from'module'`).toEqual(code);
  });
  it('export no path', () => {
    const code = statement.export(mock_export_without_path);
    expect(`export{temp,temp1}`).toEqual(code);
  });
});