import { DBSchema, DBWSchema } from '@/types';
import { eachDBSchema } from './eachDBSchema';
import multipleTranslateKey from './multipleTranslateKey';
import { TranslateOptions } from '../tanslate';

const translateWords = async (db: DBSchema.Project, options: TranslateOptions): Promise<DBWSchema.Project> => {
  const dbData = db;
  const translateWords = [] as Record<string, any>[][];

  eachDBSchema(dbData, (data, config) => {
    if (config?.translated) {
      translateWords.push(data);
    }
    return true;
  });

  await multipleTranslateKey(translateWords, options);
  return dbData as DBWSchema.Project;
};

export default translateWords;
