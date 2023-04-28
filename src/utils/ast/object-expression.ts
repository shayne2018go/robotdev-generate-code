import {
  ObjectExpression,
  Expression,
  ObjectProperty,
  ObjectMethod,
  SpreadElement,
  objectExpression,
  objectProperty,
  identifier,
  booleanLiteral,
  stringLiteral,
  numericLiteral,
  arrayExpression,
  functionExpression,
  callExpression,
} from '@babel/types';
import { isArray, isPlanObject } from '../is';
import { watch } from 'fs-extra';
import { d } from 'vitest/dist/types-e3c9754d';
import { generate } from '@/generate';

function getObjectExpressionKeys(node: ObjectExpression): string[] {
  const keys: string[] = [];
  for (const prop of node.properties) {
    if ((prop.type === 'ObjectProperty' || prop.type === 'ObjectMethod') && !prop.computed) {
      if (prop.key.type === 'Identifier') {
        keys.push(prop.key.name);
      } else if (prop.key.type === 'StringLiteral') {
        keys.push(prop.key.value);
      }
    }
  }
  return keys;
}

function getObjectPropertyByKey(node: ObjectExpression, key: string | string[]): ObjectProperty | null {
  const path = Array.isArray(key) ? key : key.split('.');
  let current: ObjectProperty | ObjectExpression | null = node;

  while (path.length) {
    const curKey = path.pop();
    if (!curKey) {
      current = null;
      break;
    }
    const objectKeys = getObjectExpressionKeys(node);
    if (objectKeys.includes(curKey)) {
      if (!current) {
        break;
      }
      if (current.type === 'ObjectExpression') {
        for (const prop of current.properties) {
          if (prop.type === 'ObjectProperty' && !prop.computed) {
            current = prop;
          }
        }
      }
    } else {
      current = null;
      break;
    }
  }
  return current as ObjectProperty | null;
}

function updateObjectExpression(node: ObjectExpression, key: string | string[], value: any) {
  const path = Array.isArray(key) ? key : key.split('.');
  let current: any = node;

  let pathIndex = 1;
  let updatePath = path.slice(0, pathIndex);

  while (updatePath.length < path.length) {
    debugger;

    const isExit = getObjectPropertyByKey(node, updatePath);

    pathIndex++;
    updatePath = path.slice(0, pathIndex);
    if (isExit) {
      continue;
    }
  }

  // while (path.length) {
  //   const curKey = path.shift();
  //   if (!curKey) {
  //     break;
  //   }
  //   const objectKeys = getObjectExpressionKeys(node);
  //   if (objectKeys.includes(curKey)) {
  //     if (current.type === 'ObjectExpression') {
  //       for (const prop of current.properties) {
  //         if (prop.type === 'ObjectProperty' && !prop.computed) {
  //           current = prop;
  //         }
  //       }
  //     }
  //   } else {
  //     current = createExpression(path, value);
  //     break;
  //   }
  // }
}

function createExpression(path: string[], value: any) {
  let current = null;

  const key = path.shift();

  if (!key) {
    return null;
  }

  if (path.length) {
    const property = createExpression(path, value);
    if (property) {
      if (property.type === 'ObjectExpression') {
        current = objectExpression([objectProperty(identifier(key), property)]);
      } else if (property.type === 'ObjectProperty') {
        current = objectExpression([property]);
      }
    }
  } else {
    current = objectProperty(identifier(key), getValueAstExpressionByType(value));
  }
  return current;
}

function getValueAstExpressionByType(value: unknown): any {
  if (typeof value === 'string') {
    return stringLiteral(value);
  } else if (typeof value === 'number') {
    return numericLiteral(value);
  } else if (typeof value === 'boolean') {
    return booleanLiteral(value);
  } else if (isArray(value)) {
    return arrayExpression(value.map(getValueAstExpressionByType));
  } else if (isPlanObject(value)) {
    const objectProperties = [] as (ObjectMethod | ObjectProperty | SpreadElement)[];
    Object.keys(value).forEach((key) => {
      const keyValue = value[key];
      const propertyValue = getValueAstExpressionByType(keyValue);
      objectProperties.push(objectProperty(identifier(key), propertyValue));
    });
    return objectExpression(objectProperties);
  }
  return null;
}

export { createExpression, updateObjectExpression };
