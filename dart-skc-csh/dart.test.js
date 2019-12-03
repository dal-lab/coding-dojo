const getSumOfScore  = (dartResult) => {
  return calcByRule(parseDartResult(dartResult));
};

const parseDartResult = (dartResult) => {
  const result = [];
  let prevIndex = 0;
  for (let i = 0; i < dartResult.length; i++) {
    let value = dartResult[i];
    if (value === 'S' || value === 'D' || value === 'T') {
      if (dartResult[i+1] === '*' || dartResult[i+1] === '#') {
        result.push(dartResult.slice(prevIndex, i+2));
        prevIndex = i+2;
      } else {
        result.push(dartResult.slice(prevIndex, i+1));
        prevIndex = i+1;
      } 
    }
  }
  return result;
};

const calcByRule = (slicedArray) => {
  const result = [];
  slicedArray.forEach((cur, index) => {
    let number = 0
    let temp = 0;
    if (cur.includes('S')) {
      number = cur.split('S')[0];
      temp = number * 1;
    } else if (cur.includes('D')) {
      number = cur.split('D')[0];
      temp = (number * number);
    } else if (cur.includes('T')) {
      number = cur.split('T')[0];
      temp =  (number * number * number);
    }
    result.push(temp);
    if (cur.includes('*')) {
      result[index - 1] = result[index -1] * 2;
      result[index] = result[index] * 2
    }
    if (cur.includes('#')) {
      result[index] = result[index] * (-1);
    }
  });
  return result.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);
};

test('getSumOfScore', () => {
  expect(getSumOfScore('1S2D*3T')).toBe(37);
  expect(getSumOfScore('1D2S#10S')).toBe(9);
  expect(getSumOfScore('1D2S0T')).toBe(3);
  expect(getSumOfScore('1S*2T*3S')).toBe(23);
  expect(getSumOfScore('1D#2S*3S')).toBe(5);
  expect(getSumOfScore('1T2D3D#')).toBe(-4);
  expect(getSumOfScore('1D2S3T*	')).toBe(59);
});

test('parseDartResult', () => {
  expect(parseDartResult('1S2D*3T')).toEqual(['1S', '2D*', '3T']);
});

test('calcByRule', () => {
  // expect(calcByRule(['1S', '*2D', '*3T'])).toBe(37);
  // expect(calcByRule(['1S', '2D', '3T'])).toBe(32);
})