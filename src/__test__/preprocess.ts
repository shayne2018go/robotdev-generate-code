import { ICodeSchema, IDBSchema } from '@/types';

function preprocess(dbSchema: IDBSchema.Project): Partial<ICodeSchema> {
  return {};
}

export default preprocess;
