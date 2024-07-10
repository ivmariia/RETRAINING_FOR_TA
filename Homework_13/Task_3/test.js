const { getCircleLength, getCircleArea } = require('./calcCircle');

test('getCircleLength() with argument 22 should return 138.2', () => {
  const result = getCircleLength(22);
  expect(result).toBeCloseTo(138.2, 1);
});

test('getCircleArea() with argument 9 should return approximately 254.47', () => {
  const result = getCircleArea(9);
  expect(result).toBeCloseTo(254.47, 2);
});

test('getCircleLength() with no arguments should throw an error', () => {
  expect(() => getCircleLength()).toThrow('Radius is required');
});

test('getCircleArea() with no arguments should throw an error', () => {
  expect(() => getCircleArea()).toThrow('Radius is required');
});
