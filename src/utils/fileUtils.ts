import fse from 'fs-extra';

export default {
  create: (path: string, content?: string) => {
    const file = fse.ensureFileSync(path);
    if (content) {
      fse.writeFileSync(path, content);
    }
  },
};
