/**
 * 根据目录获取路径
 * @param directories 目录
 * @param id id
 * @returns
 */
export function getPathByDirectories(directories: CodeSchema.Directory[], id: string): CodeSchema.Directory[] {
  const dirPath: CodeSchema.Directory[] = [];

  let curId: string | null = id;

  while (curId) {
    const current = directories.find((d) => d.id === curId);
    if (current) {
      dirPath.unshift(current);
      curId = current.parentId;
    } else {
      break;
    }
  }

  return dirPath;
}
