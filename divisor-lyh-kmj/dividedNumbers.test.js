/*
    - arr를 순회하면서 divisor로 나누었을 때 나머지 값이 0인 element를 return 배열에 담는다.
    - return 배열을 정렬한다.
    - 모두 순회한 후에, return 배열에 값이 존재하지 않는다면 -1을 입력한 후에 리턴 한다.
*/
const dividedNumbers = (numbers, divisor) => {
    const xs = numbers.filter(number => number % divisor === 0);
    return xs.length === 0 ? [-1] : [...xs].sort((a, b) => a - b);
    
}

test('dividedNumbers',() => {
    expect(dividedNumbers([5, 9, 7, 10], 5)).toEqual([5, 10]);
    expect(dividedNumbers([2, 36,1, 3], 1)).toEqual([1, 2, 3, 36]);
    expect(dividedNumbers([2, 36,1, 3], 1)).toEqual([1, 2, 3, 36]);
    expect(dividedNumbers([2, 36,1, 3], 200)).toEqual([-1]);
    expect(dividedNumbers([3, 2, 6], 10)).toEqual([-1]);
});
