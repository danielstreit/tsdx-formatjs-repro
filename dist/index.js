
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./testintl.cjs.production.min.js')
} else {
  module.exports = require('./testintl.cjs.development.js')
}
