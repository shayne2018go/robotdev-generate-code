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
