type Plugin = {
  name: string;
  version: string;
  config: {
    [key: string]: any;
  };
};

export interface ITech {
  syntax?: 'vue3' | 'react' | 'php' | 'express' | 'fastify';
  framework?: {
    name?: 'vite' | 'webpack' | 'larvel' | 'thinkphp' | 'nuxt' | 'nest' | 'express' | 'fastify';
    plugins: Array<Plugin>;
    config: {
      // ssr: boolean | Record<string, any>;
    };
  };
}
