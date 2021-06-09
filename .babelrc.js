const manifest = require('./package.json');

module.exports = {
  presets: [
    [
      // https://babeljs.io/docs/en/babel-preset-env
      '@babel/preset-env',
      {
        targets: {
          browsers: manifest.browserslist,
        },
      },
    ],
    // https://babeljs.io/docs/en/babel-preset-react
    '@babel/preset-react',
  ],
  plugins: [
    [
      // https://styled-components.com/docs/tooling#usage
      'babel-plugin-styled-components',
      {
        ssr: process.env.NODE_ENV !== 'test',
        displayName: process.env.NODE_ENV !== 'test',
        namespace: process.env.NODE_ENV === 'test' ? 'sc' : undefined,
      },
    ],
    [
      // https://babeljs.io/docs/en/babel-plugin-transform-runtime
      '@babel/plugin-transform-runtime',
      {
        corejs: 2,
        helpers: true,
        regenerator: true,
        useESModules: false,
        version: manifest.dependencies['@babel/runtime-corejs2'],
      },
    ],
  ],
};
