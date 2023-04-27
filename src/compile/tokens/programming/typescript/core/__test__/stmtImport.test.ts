import { describe, it, expect } from 'vitest';
import { statement } from '../statement';
import { mock_import, mock_import_all, mock_import_default_all, mock_import_element, mock_import_element_as, mock_import_element_default, mock_import_elements, mock_import_elements_as, mock_import_only_path } from './fixtures/stmtImport';

describe('statement import', () => {
  it('import', () => {
    const code = statement.import(mock_import);
    expect(`import temp from'module'`).toEqual(code);
  });
  it('import all', () => {
    const code = statement.import(mock_import_all);
    expect(`import * as alias from'module'`).toEqual(code);
  });
  it('import element', () => {
    const code = statement.import(mock_import_element);
    expect(`import{temp}from'module'`).toEqual(code);
  });
  it('import as', () => {
    const code = statement.import(mock_import_element_as);
    expect(`import{temp as alias}from'module'`).toEqual(code);
  });
  it('import elements', () => {
    const code = statement.import(mock_import_elements);
    expect(`import{temp,temp1}from'module'`).toEqual(code);
  });
  it('import elements as', () => {
    const code = statement.import(mock_import_elements_as);
    expect(`import{temp,temp1 as alias}from'module'`).toEqual(code);
  });
  it('import default element', () => {
    const code = statement.import(mock_import_element_default);
    expect(`import defaultTemp,{temp}from'module'`).toEqual(code);
  });
  it('import default all', () => {
    const code = statement.import(mock_import_default_all);
    expect(`import defaultTemp,* as alias from'module'`).toEqual(code);
  });
  it('import path', () => {
    const code = statement.import(mock_import_only_path);
    expect(`import'module'`).toEqual(code);
  });
});
// import temp from'module'
// import * as alias from'module'
// import{temp}from'module'
// import{temp as alias}from'module'
// import{temp,temp1}from'module'
// import{temp,temp1 as alias}from'module'
// import defaultTemp,{temp}from'module'
// import defaultTemp,* as alias from'module'
// import'module'