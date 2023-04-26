import { DBWSchema } from '@/types';
import { ICS_Api } from '@/types/api';
import { DirectoryBuilder } from './directory';
import { ICS_Directory } from '@/types/directory';

interface ApiBuilder {}

function preprocessApis(dbwSchema: DBWSchema.Project, directoryBuilder: DirectoryBuilder): { apis: ICS_Api[] } {
  const { directories } = directoryBuilder;

  function preprocessApi(api: DBWSchema.Api): ICS_Api {
    // TODO: 未处理第三方API
    return {
      id: api.id,
      key: api.key,
      method: 'post',
      route: {
        path: '',
      },
      request: {
        body: api.request,
      },
      response: {
        body: api.response,
      },
    };
  }

  const apis = dbwSchema.apis.map(preprocessApi);

  return { apis };
}

function getApiPath(api: DBWSchema.Api, directories: ICS_Directory[]) {}

export default preprocessApis;
