```javascript
const compare = require('legal-versioning-compare')
const assert = require('assert')

assert.deepStrictEqual(
  ['3.0.0', '1.0.0', '1.0.0-4', '1.0.0-1', '2.4.5', '2.5.6'].sort(compare),
  ['1.0.0-1', '1.0.0-4', '1.0.0', '2.4.5', '2.5.6', '3.0.0']
)

for (const [current, candidate, result] of [
  ['2.0.0', '2.0.0', 0],
  ['1.0.0', '2.0.0', -1],
  ['2.0.0', '1.0.0', 1],
  ['1.0.0', '0.2.0', 1],
  ['1.0.0', '1.0.1', -1],
  ['1.0.0', '1.1.0', -1],
  ['1.0.0', '2.0.0-1', -1],
  ['1.0.0-1', '1.0.0-2', -1],
  ['1.0.0-2', '1.0.0-1', 1],
  ['1.0.0', '1.0.0-1', 1],
  ['1.2.0', '1.1.0', 1],
  ['1.0.2', '1.0.1', 1],
  ['1.0.0-1', '2.0.0-1', -1]
]) {
  assert.strictEqual(compare(current, candidate), result)
}

assert.throws(() => compare('invalid', 'other invalid'))
```
