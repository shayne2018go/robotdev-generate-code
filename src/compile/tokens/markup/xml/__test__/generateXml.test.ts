import { describe, it, expect } from 'vitest';
import { generateXml } from '../generate';

describe('generate Xml', () => {
  it('html', () => {
    const code = generateXml.xml({
      doctype: 'HTML 5',
      nodes: [
        {
          tag: 'div',
          props: [
            {
              key: 'id',
              value: 'root_box',
            },
            {
              key: 'style',
              value: 'width:100px;height:40px;',
            },
          ],
          childNodes: [
            {
              tag: 'span',
              childNodes: ['这是一个测试'],
            },
            {
              tag: 'img',
              isSelfClosing: true,
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
    });

    expect(
      `<!DOCTYPE html><div id="root_box" style="width:100px;height:40px;"><span>这是一个测试</span><img src="../images/xxx.jpg" /></div>`
    ).toEqual(code);
  });
  it('vue3 template', () => {
    const code = generateXml.xml({
      nodes: [
        {
          tag: 'div',
          props: [
            {
              key: 'id',
              value: 'root_box',
            },
            {
              key: ':style',
              value: `{display:'none',background:'#f00'}`,
            },
            {
              key: 'style',
              value: 'width:100px;height:40px;',
            },
            {
              key: '@click',
              value: "()=>{alert('你好')}",
            },
          ],
          childNodes: [
            {
              tag: 'span',
              childNodes: ['这是一个测试'],
            },
            {
              tag: 'img',
              isSelfClosing: true,
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
    });

    expect(
      `<div id="root_box" :style="{display:\'none\',background:\'#f00\'}" style="width:100px;height:40px;" @click="()=>{alert(\'你好\')}"><span>这是一个测试</span><img src="../images/xxx.jpg" /></div>`
    ).toEqual(code);
  });
});
