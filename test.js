var test = require('tape')
var alias = require('./')

test('alias()', function (t) {

  t.deepEqual(alias(), {
    type: 'alias',
    value: []
  }, 'no inputs')

  t.deepEqual(alias('one', 'two'), {
    type: 'alias',
    value: ['one', 'two']
  }, 'multiple inputs')

  t.end();
})
