import { DBWSchema } from '@/types';
import { ICS_Directory } from '@/types/directory';

type PreprocessDir = DBWSchema.ProjectIndexPage | DBWSchema.ProjectIndexFlowchart | DBWSchema.ProjectIndexApi;

export interface DirectoryBuilder {
  directories: ICS_Directory[];
}

function preprocessDirectories(dbwSchema: DBWSchema.Project): { directoryBuilder: DirectoryBuilder } {
  function preprocessDirectory(dir: PreprocessDir): ICS_Directory {
    return {
      id: dir.id,
      key: dir.key,
      name: dir.name,
      parentId: dir.parentId,
      isDirectory: dir.type === 'directory',
      resourceType: getResourceType(dir.type),
    };
  }

  const { page = [], flowchart = [], api = [] } = dbwSchema.projectIndex;

  const directories: ICS_Directory[] = page
    .map(preprocessDirectory)
    .concat(flowchart.map(preprocessDirectory))
    .concat(api.map(preprocessDirectory));

  const directoryBuilder = {
    directories,
  };

  return {
    directoryBuilder,
  };
}

function getResourceType(type: PreprocessDir['type']): ICS_Directory['resourceType'] {
  switch (type) {
    case 'directory':
      return;
    case 'api':
    case 'flowchart':
      return 'api';
    case 'page':
      return 'page';
    default:
      return;
  }
}

export default preprocessDirectories;
