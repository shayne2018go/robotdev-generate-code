import { Compile } from '@/types/compile/token';
import { Options, format } from 'prettier';

const fileNameSuffix_parser_map: Record<string, string | boolean> = {
  ts: 'typescript',
  md: 'markdown',
  babel: true,
  'babel-flow': true,
  'babel-ts': true,
  flow: true,
  espree: true,
  meriyah: true,
  acorn: true,
  css: true,
  scss: true,
  less: true,
  json: true,
  json5: true,
  'json-stringify': true,
  graphql: true,
  mdx: true,
  html: true,
  vue: true,
  angular: true,
  lwc: true,
  yaml: true,
};

const FORMAT_OPTION_DEFAULT: Options = {
  semi: false,
  printWidth: 120,
};

function optimize(tokens: Compile.Token[]): Compile.Token[] {
  return tokens.map((token) => {
    const fileName = token.path.split('.').pop() as string;
    if (!fileNameSuffix_parser_map[fileName]) {
      return token;
    }
    const parser =
      typeof fileNameSuffix_parser_map[fileName] === 'string' ? fileNameSuffix_parser_map[fileName] : fileName;

    const formatOptions = Object.assign(FORMAT_OPTION_DEFAULT, { parser });

    return {
      path: token.path,
      token: format(token.token, formatOptions),
    };
  });
}

export default optimize;
