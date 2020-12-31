const yaml = require('js-yaml')

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension('yaml', (contents) => yaml.safeLoad(contents))

  eleventyConfig.addFilter('upgradetags', (value) =>
    value.replace('<hr>', '<p><scope-hr></scope-hr></p>'),
  )

  eleventyConfig.setTemplateFormats([
    // Templates:
    'njk',
    'md',
    // Static Assets:
    'html',
    'js',
    'ts',
    'json',
    'css',
    'jpeg',
    'jpg',
    'png',
    'webp',
    'svg',
    'otf',
    'ttf',
    'woff',
    'woff2',
  ])

  return {
    dir: {
      input: 'src/content',
      data: '../eleventy/data',
      includes: '../eleventy/includes',
      layouts: '../eleventy/layouts',
      output: 'dist',
    },
  }
}
