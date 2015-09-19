var asArray = require('as-array')

module.exports = function alias () {

  return {
    type: 'alias',
    value: asArray(arguments)
  }
}
