import { DBSchema } from '@/types';
import translateWords from './translate-words';
import preprocess from './code-schema';

export interface TranslateOptions {
  translateFn: (name: string, isPlural?: boolean) => Promise<string>;
}

async function translate(dbschema: DBSchema.Project, options: TranslateOptions) {
  // 1， 翻译
  const translationSchema = await translateWords(dbschema, options);
  // 2， 预处理

  const schema = preprocess(translationSchema);

  return schema;
}

export default translate;
