const userList = require('./userList');

test('array contains the element "admin"', () => {
  expect(userList).toContain('admin');
});

test('the first element in the array is "Nick"', () => {
  expect(userList[0]).toBe('Nick');
});

test('the last element in the array is "new_user_2"', () => {
  expect(userList[userList.length - 1]).toBe('new_user_2');
});

test('the length of the array is 5', () => {
  expect(userList.length).toBe(5);
});

test('the 3rd element of the array has type string', () => {
  expect(typeof userList[2]).toBe('string');
});

test('the array does not have an 8th element', () => {
  expect(userList[7]).toBeUndefined();
});
