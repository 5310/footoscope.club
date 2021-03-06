module.exports = {
  mount: {
    dist: '/',
    'src/eleventy/layouts': '/eleventy/layouts',
    'src/webcomponents/': '/webcomponents',
  },
  plugins: [
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-postcss',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'npx eleventy --config=eleventy.config.js',
        watch: '$1 --watch',
      },
      {
        cmd: 'npx cpx2 src/web-components dist/web-components',
        watch: '$1 --watch',
      },
    ],
  ],
  installOptions: {
    installTypes: true,
  },
  devOptions: {
    port: 8888,
    hmrDelay: 300,
  },
  experiments: {
    optimize: {
      bundle: false,
      minify: true,
      target: 'esnext',
    },
  },
}
