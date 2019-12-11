/*
    - 각 스테이지의 실패율을 구한다.
    - 스테이지 번호와 실패율을 담은 객체를 배열에 담는다.
    - 실패율을 내림차순으로 정렬한다.
    - 실패율이 동일하다면 오름차순으로 정렬한다.
        - for loop을 돌면서 다음 값이 같은지 확인하고 값이 같은 index를 찾아서 
*/
const sortByDifficulty = (n, stages) => sortFailureRates(getFailureRates(n, stages)).map(v => v[0])


const getFailureRates = (n, stages) => {
   return Array.from({length: n}, (_, i) => i+1).map(stage => {
        const under = stages.filter((v) =>  v >= stage).length;
        const over = stages.filter((v) =>  v === stage).length;
        const failureRate = under === 0 ? 0 : over / under;
        return [stage, failureRate];
    });
}

const sortFailureRates = (failureRatesInStages) => failureRatesInStages.sort(sortPolicy);


const sortPolicy = (a, b) =>  a[1]===b[1] ? a[0] - b[0] :  b[1] - a[1];

test('sortByDifficulty', () => {
    expect(sortByDifficulty(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3, 4, 2, 1, 5]);
    expect(sortByDifficulty(4, [4, 4, 4, 4, 4])).toEqual([4, 1, 2, 3]);
});

test('getFailureRates', () => {
    expect(getFailureRates(3, [2, 1, 2])).toEqual([[1, 1 / 3], [2, 1], [3, 0]]);
    expect(getFailureRates(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([[1, 1 / 8], [2, 3 / 7], [3, 2 / 4], [4, 1 / 2], [5, 0]]);
});

test('sortFailureRates', () => {
    expect(sortFailureRates([[1, 1 / 3], [2, 1], [3, 0]])).toEqual([[2, 1], [1, 1 / 3], [3, 0]]);
    expect(sortFailureRates([[1, 1 / 3], [2, 1], [3, 0], [4, 1 / 3]])).toEqual([[2, 1], [1, 1 / 3], [4, 1 / 3], [3, 0]]);
    expect(sortFailureRates([[1, 0], [2, 0], [3, 0], [4, 1]])).toEqual([[4, 1], [1, 0], [2, 0], [3, 0]]);
    expect(sortFailureRates([[3, 0.5], [2, 0.5], [1, 0.5]])).toEqual([[1, 0.5], [2, 0.5], [3, 0.5]]);
});
