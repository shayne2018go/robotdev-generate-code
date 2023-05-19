import { CompileCurrentCtx } from '../compilePages';

function compileStyle<T extends CodeSchema.Page | CodeSchema.Component>(
  page: T,
  compileCtx: CompileCurrentCtx
): { token: string } {
  const token = '';

  return { token };
}

export default compileStyle;
