module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: true,
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-external-helpers",
    [
      "@babel/plugin-transform-runtime",
      {
        useESModules: true,
      },
    ],
  ],
};
