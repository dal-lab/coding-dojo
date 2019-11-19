const last = (arr) =>
  arr.length > 0 ? arr[arr.length - 1] : undefined;

const noRepeat1 = (arr) =>
  arr.reduce((acc, cur) =>
    cur !== last(acc) ? [...acc, cur] : acc, []);

const noRepeat2 = (arr) => arr.filter((v, i) => v !== arr[i - 1]);

test('noRepeat', () => {
  [noRepeat1, noRepeat2].forEach(noRepeat => {
    expect(noRepeat([1, 1])).toEqual([1]);
    expect(noRepeat([1, 1, 3, 3, 0, 1, 1])).toEqual([1, 3, 0, 1]);
    expect(noRepeat([4, 4, 4, 3, 3])).toEqual([4, 3]);
  })
});

test('last', () => {
  expect(last([])).toBe(undefined);
  expect(last([1, 2, 3, 4])).toBe(4);
});
