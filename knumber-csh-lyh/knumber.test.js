const getKnumber = (array, commands) => 
    commands.map(([start, end, k]) =>
        array.slice(start - 1, end).sort(compare)[k - 1],
    );

const compare = (a, b) => {
    return a - b;
};

test('getKnumber', () => {
    expect(getKnumber([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))
        .toEqual([5, 6, 3]);
    expect(getKnumber([1, 5, 2], [[1, 3, 2]])).toEqual([2]);
    expect(getKnumber([2, 1, 11], [[1, 3, 2]])).toEqual([2]);
});