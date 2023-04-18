import fse from "fs-extra";

export default {
  create: async (path: string, content?: string) => {
    const file = fse.ensureFileSync(path);
    if (content) {
      fse.writeFile(path, content);
    }
  },
};
