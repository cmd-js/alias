var test = require('tape')
var name = require('./')

test('name()', function (t) {

  t.deepEqual(name(), {
    type: 'alias',
    value: []
  }, 'no inputs')

  t.deepEqual(name('one', 'two'), {
    type: 'alias',
    value: ['one', 'two']
  }, 'multiple inputs');

  t.end();
})
