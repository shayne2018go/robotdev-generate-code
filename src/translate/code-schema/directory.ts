import { DBWSchema } from '@/types';

type PreprocessDir = DBWSchema.ProjectIndexPage | DBWSchema.ProjectIndexFlowchart | DBWSchema.ProjectIndexApi;

export interface DirectoryBuilder {
  directories: CodeSchema.Directory[];
}

function preprocessDirectories(dbwSchema: DBWSchema.Project): { directoryBuilder: DirectoryBuilder } {
  function preprocessDirectory(dir: PreprocessDir): CodeSchema.Directory {
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

  const directories: CodeSchema.Directory[] = page
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

function getResourceType(type: PreprocessDir['type']): CodeSchema.Directory['resourceType'] {
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
