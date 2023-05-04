import { describe, it, test } from 'vitest';
import { resolve, join } from 'path';
import fileUtils from '../fileUtils';

describe('fileUtils', () => {
  const root = resolve(__dirname, '../../../../generate-code-test');

  it('create', () => {
    const file = join(root, './package.json');
    fileUtils.create(
      file,
      '{\n  "name": "vite-starter123",\n  "private": true,\n  "version": "0.0.0",\n  "type": "module",\n  "scripts": {\n    "dev": "vite",\n    "build": "vite build",\n    "preview": "vite preview"\n  },\n  "devDependencies": {\n    "vite": "^4.3.0-beta.2"\n  }\n}'
    );
  });
});
