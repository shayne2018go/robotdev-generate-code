import { DBWSchema } from '@/types';
import { DirectoryBuilder } from './directory';

interface ApiBuilder {}

function preprocessApis(
  dbwSchema: DBWSchema.Project,
  directoryBuilder: DirectoryBuilder
): { apis: CodeSchema.Api_Protocol[] } {
  const { directories } = directoryBuilder;

  function preprocessApi(api: DBWSchema.Api): CodeSchema.Api_Protocol {
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

function getApiPath(api: DBWSchema.Api, directories: CodeSchema.Directory[]) {}

export default preprocessApis;
