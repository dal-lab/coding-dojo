const solution = (d, budget) => {
  return getNumberOfDepartment(sortByAscending(d), budget);
};

const sortByAscending = array => {
  return array.sort((a, b) => a - b);
};

const getNumberOfDepartment = (sortedArray, budget) => {
  let remainedBudget = budget;
  for (let i = 0; i < sortedArray.length; i++) {
    remainedBudget -= sortedArray[i];
    if (remainedBudget < 0) {
      return i;
    }
  }
  return sortedArray.length;
};

test("solution", () => {
    expect(solution([1, 3, 2, 5, 4], 9)).toBe(3);
    expect(solution([2, 2, 3, 3], 9)).toBe(3);
    expect(solution([2, 2, 3, 3], 10)).toBe(4);
});

test("sortByAscending", () => {
  expect(sortByAscending([1, 3, 2, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  expect(sortByAscending([14, 3, 0, 5, -4])).toEqual([-4, 0, 3, 5, 14]);
});

test("getNumberOfDepartment", () => {
  expect(getNumberOfDepartment([1, 2, 3, 4, 5], 9)).toBe(3);
  expect(getNumberOfDepartment([1, 2, 3, 4, 5], 10)).toBe(4);
  expect(getNumberOfDepartment(sortByAscending([2, 2, 3, 3]), 10)).toBe(4);
});
