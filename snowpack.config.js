module.exports = {
  mount: {
    dist: '/',
    'src/eleventy/layouts': '/eleventy/layouts',
  },
  plugins: [
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-postcss',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy --config=eleventy.config.js',
        watch: '$1 --watch',
      },
    ],
  ],
  installOptions: {
    installTypes: true,
  },
  devOptions: {
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
