const solution = (n, stages) => 
  Array.from({ length: n }, (_, i) => i + 1)
    .map(stage => [stage, failureRates(stage, stages)])
    .sort((a, b) => a[1]===b[1] ? a[0] - b[0] :  b[1] - a[1])
    .map(v => v[0]);

const failureRates = (i, stages) => stages.filter(s => s === i).length / (stages.filter(s => s >= i).length || 1);

test('solution', () => {
  expect(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3, 4, 2, 1, 5]);
  expect(solution(4, [4, 4, 4, 4, 4])).toEqual([4, 1, 2, 3]);
  expect(solution(5, [1, 1, 2, 3])).toEqual([3, 1, 2, 4, 5]);
});

test('failureRates', () => {
  expect(failureRates(1, [1, 1, 2, 2, 3, 3])).toBe(2 / 6);
  expect(failureRates(4, [1, 1, 2, 2, 3, 3])).toBe(0 / 1);
  expect(failureRates(2, [1, 1, 2, 2, 3, 3])).toBe(2 / 4);
});
