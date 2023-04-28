import { fileURLToPath, resolve, dirname } from '@/utils/node';

const __dirname = dirname(fileURLToPath(import.meta.url));

const defaultRootPath = resolve(__dirname, '../../');

const defaultProjectName = 'code-test';

export { defaultRootPath, defaultProjectName };
