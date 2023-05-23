import { IJson_Array, IJson_Boolean, IJson_Null, IJson_Number, IJson_Object, IJson_String } from '../types';
import { generateJson } from '../core';

const schema_boolean1: IJson_Boolean = { type: 'boolean', value: false };
const schema_boolean2: IJson_Boolean = { type: 'boolean', value: true };
const schema_number1: IJson_Number = { type: 'number', value: 15 };
const schema_number2: IJson_Number = { type: 'number', value: -14 };
const schema_string1: IJson_String = { type: 'string', value: 'test_1' };
const schema_string2: IJson_String = { type: 'string', value: 'test_2' };
const schema_null: IJson_Null = { type: 'null' };
const schema_object1: IJson_Object = {
  type: 'object',
  value: [
    {
      key: 'h',
      value: schema_boolean2,
    },
    {
      key: 'i',
      value: schema_number2,
    },
    {
      key: 'j',
      value: schema_string2,
    },
  ],
};
const schema_array1: IJson_Array = {
  type: 'array',
  value: [schema_boolean1, schema_number1, schema_string1],
};
const schema_array2: IJson_Array = {
  type: 'array',
  value: [schema_boolean2, schema_number2, schema_string2, schema_array1, schema_object1],
};
const schema_object2: IJson_Object = {
  type: 'object',
  value: [
    {
      key: 'a',
      value: schema_boolean1,
    },
    {
      key: 'b',
      value: schema_string1,
    },
    {
      key: 'c',
      value: schema_number1,
    },
    {
      key: 'd',
      value: schema_array2,
    },
    {
      key: 'e',
      value: schema_object1,
    },
  ],
};
describe('generateJson', () => {
  describe('generateJson boolean', () => {
    it('false', () => {
      const code = generateJson(schema_boolean1);
      expect(`false`).toEqual(code);
    });
    it('true', () => {
      const code = generateJson(schema_boolean2);
      expect(`true`).toEqual(code);
    });
  });
  describe('generateJson string', () => {
    it('string1', () => {
      const code = generateJson(schema_string1);
      expect(`"test_1"`).toEqual(code);
    });
    it('string2', () => {
      const code = generateJson(schema_string2);
      expect(`"test_2"`).toEqual(code);
    });
  });
  describe('generateJson number', () => {
    it('number', () => {
      const code = generateJson(schema_number1);
      expect(`15`).toEqual(code);
    });
    it('number', () => {
      const code = generateJson(schema_number2);
      expect(`-14`).toEqual(code);
    });
  });
  describe('generateJson null', () => {
    it('null', () => {
      const code = generateJson(schema_null);
      expect(`null`).toEqual(code);
    });
  });
  describe('generateJson array', () => {
    it('array1', () => {
      const code = generateJson(schema_array1);
      expect(`[false,15,"test_1"]`).toEqual(code);
    });
    it('array2', () => {
      const code = generateJson(schema_array2);
      expect(`[true,-14,"test_2",[false,15,"test_1"],{"h":true,"i":-14,"j":"test_2"}]`).toEqual(code);
    });
  });
  describe('generateJson object', () => {
    it('object1', () => {
      const code = generateJson(schema_object1);
      expect(`{"h":true,"i":-14,"j":"test_2"}`).toEqual(code);
    });
    it('object2', () => {
      const code = generateJson(schema_object2);
      expect(
        `{"a":false,"b":"test_1","c":15,"d":[true,-14,"test_2",[false,15,"test_1"],{"h":true,"i":-14,"j":"test_2"}],"e":{"h":true,"i":-14,"j":"test_2"}}`
      ).toEqual(code);
    });
  });
});
