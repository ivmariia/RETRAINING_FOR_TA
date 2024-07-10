const add = require('./math');

test('adding 0.1 and 0.2 should be close to 0.3', () => {
  const result = add(0.1, 0.2);
  const expected = 0.3;
  const tolerance = 0.000001;

  expect(Math.abs(result - expected)).toBeLessThan(tolerance);
});
