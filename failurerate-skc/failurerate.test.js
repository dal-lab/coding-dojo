function solution(N, stages) {
    const failurerates = failurerateOfStages(N, stages);
    const hashTable = createHashTable(failurerates)
    const uniqFailurerateByDesc = DeduplicationAndDescendingSort(failurerates);

    return uniqFailurerateByDesc.reduce((acc, cur) => (
        [...acc, ...hashTable[cur]]
    ), []);
}

const failurerateOfStages = (n, stages) => {
    let results = [];
    for (let i = 1; i <= n; i++) {
        const over = stages.filter(cur => cur === i).length;
        const under = stages.filter(cur => cur >= i).length;
        results.push(under !== 0 ? over / under : 0);
    }
    return results;
}

const createHashTable = (failurerateArray) => {
    return failurerateArray.reduce((acc, cur, index) => (
        {
            ...acc,
            [cur]: (acc[cur]
                ? [...acc[cur], index + 1]
                : [index + 1])
        }
    ), {});
}

const DeduplicationAndDescendingSort = (failurerateArray) => {
    var uniqByDesc = failurerateArray // 정렬하기 전에 복사본을 만든다.
        .sort(function (a, b) {
            return b - a;
        })
        .reduce(function (a, b) {
            if (a.slice(-1)[0] !== b) a.push(b); // slice(-1)[0] 을 통해 마지막 아이템을 가져온다.
            return a;
        }, []); //a가 시작될 때를 위한 비어있는 배열

    return uniqByDesc;
}

test('failurerate', () => {
    expect(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3, 4, 2, 1, 5]);
    expect(solution(4, [4, 4, 4, 4, 4])).toEqual([4, 1, 2, 3]);
});

test('failurerateOfStages', () => {
    expect(failurerateOfStages(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([1 / 8, 3 / 7, 2 / 4, 1 / 2, 0])
})

test('createHashTable', () => {
    expect(createHashTable([1 / 8, 3 / 7, 2 / 4, 1 / 2, 0])).toEqual({
        [1/8]: [1],
        [3/7]: [2],
        [1/2]: [3, 4],
        [0]: [5]
    })
})

test('DeduplicationAndDescendingSort', () => {
    expect(DeduplicationAndDescendingSort([1 / 8, 3 / 7, 2 / 4, 1 / 2, 0])).toEqual([1 / 2, 3 / 7, 1 / 8, 0]);
    expect(DeduplicationAndDescendingSort([1, 1, 1, 3, 3, 4, 2, 1, 3, 5, 3, 4])).toEqual([5, 4, 3, 2, 1]);
})