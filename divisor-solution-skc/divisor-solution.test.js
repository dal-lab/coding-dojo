function solution1(arr, divisor) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  if (answer.length === 0) {
    return [-1];
  }
  return arraySorting(answer);
}

function solution2(arr, divisor) {
  const answer = arr.filter(value => value % divisor === 0);
  return answer.length > 0 ? arraySorting(answer) : [-1];
}

function arraySorting(arr) {
  return arr.sort((a, b) => a - b);
}

test("solution", () => {
  [solution1, solution2].forEach(solution => {
    expect(solution([4, 3], 2)).toEqual([4]);
    expect(solution([5, 9, 7, 10], 5)).toEqual([5, 10]);
    expect(solution([2, 36, 1, 3], 1)).toEqual([1, 2, 3, 36]);
    expect(solution([3, 2, 6], 10)).toEqual([-1]);
  });
});

test("sorting", () => {
  expect(arraySorting([2, 36, 1, 3])).toEqual([1, 2, 3, 36]);
  expect(arraySorting([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});
