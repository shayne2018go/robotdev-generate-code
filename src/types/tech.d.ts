import { tech } from '../const/tech';

type ITechKey = keyof typeof tech;
type ITech_<Key extends keyof typeof tech> = typeof tech[Key];

type Plugin = {
  name: string;
  version: string;
  config: {
    [key: string]: any;
  };
};

export interface Itech {
  syntax?: 'vue3' | 'react' | 'php' | 'express' | 'fastify';
  framework?: {
    name?: 'vite' | 'webpack' | 'larvel' | 'thinkphp' | 'nuxt' | 'nest' | 'express' | 'fastify';
    plugins: Array<Plugin>;
    config: {
      // ssr: boolean | Record<string, any>;
    };
  };
}
