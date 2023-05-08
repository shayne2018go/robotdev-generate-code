import { describe, it, expect } from 'vitest';
import { generateVueTemplate } from '../index';

describe('generate vue template', () => {
  it('vue3 template', () => {
    const code = generateVueTemplate({
      nodes: [
        {
          tag: 'template',
          events: [
            {
              key: 'click',
              modifiers: ['stop', 'prevent'],
            },
          ],
          childNodes: [
            {
              tag: 'div',
              props: [
                {
                  key: 'id',
                  value: 'root_box',
                },
                {
                  key: 'style',
                  isDynamic: true,
                  value: 'divStyle',
                },
                {
                  key: 'style',
                  value: 'width:100px;height:40px;',
                },
                {
                  key: 'disabled',
                },
              ],
              events: [
                {
                  key: 'click',
                  value: 'submit',
                },
              ],
              childNodes: [
                {
                  tag: 'span',
                  directives: [
                    {
                      key: 'if',
                      value: 'show',
                    },
                  ],
                  childNodes: [{ text: '这是一个测试' }],
                },
                {
                  tag: 'span',
                  directives: [
                    {
                      key: 'else',
                    },
                  ],
                  childNodes: [{ text: 'message: ' }, { expression: 'msg' }],
                },
                {
                  tag: 'img',
                  isSelfClosing: true,
                  directives: [
                    {
                      key: 'example',
                      arg: 'foo',
                      modifiers: ['bar'],
                    },
                  ],
                  props: [
                    {
                      key: 'src',
                      value: '../images/xxx.jpg',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    expect(
      `<template @click.stop.prevent><div id="root_box" :style="divStyle" style="width:100px;height:40px;" disabled @click="submit"><span v-if="show">这是一个测试</span><span v-else>message: {{msg}}</span><img src="../images/xxx.jpg" v-example:foo.bar /></div></template>`
    ).toEqual(code);
  });
});
