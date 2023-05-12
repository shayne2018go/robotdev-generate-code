import { Compile } from '@/types/compile/token';
import { format } from 'prettier';

function optimize(tokens: Compile.Token[]): Compile.Token[] {
  return tokens.map((token) => {
    if (token.path.match(/.vue/)) {
      return {
        path: token.path,
        token: format(token.token, {
          semi: false,
          parser: 'vue',
          bracketSameLine: true,
          printWidth: 120,
        }),
      };
    }
    return {
      path: token.path,
      token: format(token.token, {
        semi: false,
        bracketSameLine: true,
        printWidth: 120,
      }),
    };
  });
}

export default optimize;
