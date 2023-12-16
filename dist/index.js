
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./rohan-react.cjs.production.min.js')
} else {
  module.exports = require('./rohan-react.cjs.development.js')
}
