const Metalsmith = require('metalsmith')
const layouts = require('metalsmith-layouts')
const assets = require('metalsmith-assets')
const rootpath = require('metalsmith-rootpath')
const debug = require('metalsmith-debug')
const inPlace = require('metalsmith-in-place')
const sass = require('metalsmith-sass')

Metalsmith(__dirname)
  .source('./src')
  .destination('./docs')
  .clean(true)
  .use(rootpath())
  .use(layouts({
    engine: 'handlebars'
  }))
  .use(sass({
    outputDir: 'css/',
    includePaths: [ 'node_modules/foundation-sites/scss/' ]
  }))
  .use(inPlace())
  .use(debug())
  .use(assets({
    source: './js',
    destination: './js'
  }))
  .use(assets({
    source: './img',
    destination: './img'
  }))
  .use(assets({
    source: './graphics',
    destination: './graphics'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
