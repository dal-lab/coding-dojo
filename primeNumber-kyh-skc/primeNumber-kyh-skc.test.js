const primeNumber = arr =>
  getCaseOfNumber(arr).filter(number => checkPrimeNumber(number)).length;

const getCaseOfNumber = arr => {
  let results = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        results.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  return results;
};

const checkPrimeNumber = number => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
};

test("primeNumber", () => {
  expect(primeNumber([1, 2, 3, 4])).toBe(1);
  expect(primeNumber([1, 2, 7, 6, 4])).toBe(4);
});

test("getCaseOfNumber", () => {
  expect(getCaseOfNumber([1, 2, 3])).toEqual([6]);
  expect(getCaseOfNumber([1, 2, 3, 4])).toEqual([6, 7, 8, 9]);
  expect(getCaseOfNumber([1, 2, 3, 4, 5]))
  .toEqual([6, 7, 8, 8, 9, 10, 9, 10, 11, 12]);
});

test("checkPrimeNumber", () => {
  expect(checkPrimeNumber(2)).toBe(true);
  expect(checkPrimeNumber(3)).toBe(true);
  expect(checkPrimeNumber(4)).toBe(false);
  expect(checkPrimeNumber(2342342354)).toBe(false);
  expect(checkPrimeNumber(97)).toBe(true);
  expect(checkPrimeNumber(71)).toBe(true);
  expect(checkPrimeNumber(10)).toBe(false);
});
