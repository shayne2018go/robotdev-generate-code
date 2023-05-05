import { ICodeSchema } from '@/types/ICodeSchema';
import { Compile } from '@/types/compile/token';
import { INode } from '@/types/view';
import t from '@babel/types';
import { reduce } from 'lodash-es';

const WHITE_TAG = ['each', 'cond', 'slot', 'tpl'];

interface CompileTemplateOptions {}

function compileTemplate(nodes: Array<INode>): { tokens: Compile.Token[] } {
  const tokens = [] as Compile.Token[];

  // const

  // nodes.forEach((node) => {});
  return { tokens };
}

// const listToTree = (
//   list: Array<INode>,
//   parentId: string | null = null,
//   opts = { parentKey: 'parentId', key: 'id', childrenKey: 'children' }
// ) => {
//   return treeData;
// };

export default compileTemplate;
