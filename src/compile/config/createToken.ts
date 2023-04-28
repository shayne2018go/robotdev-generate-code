import { Compile } from '@/types/compile/token';

function createToken(path: string, token: string): Compile.Token {
  return { path, token };
}

export default createToken;
