const {divideClear, divideClearList, divideClearSortedList} = require('./divideClear');

test('나누어 떨어지지 않는 경우 테스트', () => {
  expect(divideClear(5, 3)).toBe(false);
});

test('나누어 떨어지는 경우 테스트', () => {
    expect(divideClear(6, 3)).toBe(true);
  });

test('주어진 리스트에서 나누어 떨어지는 리스트를 반환하는 경우', () => {
    expect(divideClearList([5, 10, 15],5)).toEqual([5, 10, 15]);
});

test('나누어 떨어지지 않는 수가 포함된 리스트에서 나누어 떨어지는 수가 포함된 수만 담은 리스트를 반환하는 경우', () => {
    expect(divideClearList([5, 10, 12],5)).toEqual([5, 10]);
});

test('나누어 떨어지지 않는 수가 포함된 정렬되지 않은 리스트에서 나누어 떨어지는 수가 포함된 수만 담고 오름차순으로 정렬된 리스트를 반환하는 경우', () => {
    expect(divideClearSortedList([5, 12, 20, 10], 5)).toEqual([5, 10, 20]);
});

test('나누어 떨어지지 않는 수를 담은 리스트에서 나누어 떨어지는 수가 하나도 없는 경우 -1만 담은 리스트를 반환하라', () => {
    expect(divideClearSortedList([98, 12, 23, 11], 5)).toEqual([-1]);
});
