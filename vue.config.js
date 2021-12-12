module.exports = {
    outputDir: 'docs',
    publicPath: process.env.NODE_ENV === 'production'
      ? '/https://github.com/GarcGustavo/garcgustavo.rett.io/'
      : './'
  }