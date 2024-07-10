// food.test.js
const { filterFoodPrice, food } = require('./food');

const min = 12;
const max = 40;
const filteredFood = filterFoodPrice(food, min, max);

test('the expected length of the sorted array is 3', () => {
  expect(filteredFood.length).toBe(3);
});

test('the sorted array contains the object { kind: "pepper", price: 27 }', () => {
  expect(filteredFood).toContainEqual({ kind: 'pepper', price: 27 });
});

test('the sorted array contains 2, 3, and 4 elements of the original food array', () => {
  expect(filteredFood).toEqual(
    expect.arrayContaining([
      expect.objectContaining(food[1]), // bread
      expect.objectContaining(food[2]), // pepper
      expect.objectContaining(food[3]), // banana
    ])
  );
});

test('the price property of the 1st element of the sorted array is greater than min', () => {
  expect(filteredFood[0].price).toBeGreaterThan(min);
});

test('the price property of the 3rd element of the sorted array is less than max', () => {
  expect(filteredFood[2].price).toBeLessThan(max);
});

test('the sorted array does not contain the element { kind: "lemon", price: 50 }', () => {
  expect(filteredFood).not.toContainEqual({ kind: 'lemon', price: 50 });
});
