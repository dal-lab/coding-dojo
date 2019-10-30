const getMaxAttendanceStudents = (n, lost, reserve) => {
  const uniformCounts = initUnitformCounts(n, lost, reserve);
  return processShareUniform(uniformCounts)
    .filter(i => i > 0).length;
};

const initUnitformCounts = (n, lost, reserve) => {
  const uniformCounts = Array.from({ length: n }, v => 1);
  reserve.forEach(v => {
    uniformCounts[v - 1] += 1;
  });
  lost.forEach(v =>{
    uniformCounts[v - 1] -= 1;
  });

  return uniformCounts;
};

const processShareUniform = (uniformCounts) => {
  return uniformCounts.reduce((uniformCounts, cur, index) => {
    if (cur > 0) {
      return uniformCounts;
    }
    const range = [-1, 1];
    range.forEach(offset => rentFromNext(uniformCounts, index, offset));
    
    return uniformCounts;
  }, uniformCounts);
};

const rentFromNext = (uniformCounts, index, offset) => {
  if (uniformCounts[index] > 0) {
    return uniformCounts;
  }
  const target = index + offset;
  if (target < 0 || target > (uniformCounts.length - 1)) {
    return uniformCounts;
  }
  if (uniformCounts[target] > 1) {
    uniformCounts[target] -= 1;
    uniformCounts[index] += 1;
    return uniformCounts;
  }
};

test('getMaxAttendanceStudents', () => {
  expect(getMaxAttendanceStudents(5, [2, 4], [1, 3, 5])).toBe(5);
  expect(getMaxAttendanceStudents(5, [2, 4], [3])).toBe(4);
  expect(getMaxAttendanceStudents(5, [1, 2, 4], [2, 3])).toBe(4);
});

test('initUnitformCounts', () => {
  expect(initUnitformCounts(5, [2, 4], [1, 3, 5])).toEqual([2, 0, 2, 0, 2]);
  expect(initUnitformCounts(5, [2, 4], [3])).toEqual([1, 0, 2, 0, 1]);
  expect(initUnitformCounts(5, [1, 2, 4], [2, 3])).toEqual([0, 1, 2, 0, 1]);
});

test('processShareUniform', () => {
  expect(processShareUniform([2, 0, 2, 0, 2])).toEqual([1, 1, 1, 1, 2]);
  expect(processShareUniform([1, 0, 2, 0, 1])).toEqual([1, 1, 1, 0, 1]);
  expect(processShareUniform([0, 1, 2, 0, 1])).toEqual([0, 1, 1, 1, 1]);
  expect(processShareUniform([0, 2, 1, 2, 0])).toEqual([1, 1, 1, 1, 1]);
});

test('rentFromNext', () => {
  expect(rentFromNext([2, 0, 2, 0, 2], 1, -1)).toEqual([1, 1, 2, 0, 2]);
  expect(rentFromNext([0, 1, 2, 0, 1], 0, -1)).toEqual([0, 1, 2, 0, 1]);
})