const ascending = (a, b) => a - b;

const dividedNumbers = (numbers, divisor) => {
  const result = [...numbers]
    .filter(element => element % divisor === 0)
    .sort(ascending);

  return result.length === 0 ? [-1] : result;
};

test('dividedNumbers', () => {
  expect(dividedNumbers([5, 9, 7, 10], 5)).toEqual([5, 10]);
  expect(dividedNumbers([10, 5, 9, 7], 5)).toEqual([5, 10]);
  expect(dividedNumbers([1, 2, 3], 10)).toEqual([-1]);
  expect(dividedNumbers([2, 36, 1, 3], 1)).toEqual([1, 2, 3, 36]);
});

test('ascending', () => {
  expect(ascending(3, 10) < 0).toBe(true);
  expect(ascending(10, 3) < 0).toBe(false);
  expect(ascending(10, 10) == 0).toBe(true);
});
