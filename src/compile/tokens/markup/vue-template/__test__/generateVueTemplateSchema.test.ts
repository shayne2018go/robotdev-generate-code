import { describe, it, expect } from 'vitest';
import * as g from '../generate-schema';

describe('generate vue template schema', () => {
  it('vue3 template', () => {
    const node = g.node(
      'template',
      [g.evt('click', undefined, ['stop', 'prevent'])],
      [
        g.node(
          'div',
          [
            g.prop('id', 'root_box'),
            g.prop('style', 'divStyle', true),
            g.prop('style', 'width:100px;height:40px;'),
            g.prop('disabled'),
            g.evt('click', 'submit'),
          ],
          [
            g.node('span', [g.directive('if', 'show')], [g.text('这是一个测试')]),
            g.node('span', [g.directive('else')], [g.text('message: '), g.insertText('msg')]),
            g.node(
              'img',
              [g.prop('src', '../images/xxx.jpg'), g.directive('example', undefined, 'foo', ['bar'])],
              [],
              true
            ),
          ]
        ),
      ]
    );
    const code = g.generate([node]);
    expect(
      `<template @click.stop.prevent><div id="root_box" :style="divStyle" style="width:100px;height:40px;" disabled @click="submit"><span v-if="show">这是一个测试</span><span v-else>message: {{msg}}</span><img src="../images/xxx.jpg" v-example:foo.bar /></div></template>`
    ).toEqual(code);
  });
});
