import { DBSchema, DBWSchema } from '@/types';
import { eachDBSchema } from './eachDBSchema';
import multipleTranslateKey from './multipleTranslateKey';

const translateWords = async (db: DBSchema.Project): Promise<DBWSchema.Project> => {
  const dbData = db;
  const translateWords = [] as any[];

  eachDBSchema(dbData, (data) => {
    if (data.id && data.name) {
      translateWords.push(data);
    }
    return true;
  });

  await multipleTranslateKey(translateWords);
  return dbData as DBWSchema.Project;
};

export default translateWords;
