const createHashTable = (data) =>
  data.reduce((acc, cur) => (
    {
      ...acc,
      [cur]: (acc[cur] || 0) + 1,
    }
  ), {});

const findLoser = (participants, completions) =>
  Object.entries(
    completions.reduce((acc, cur) => ({
      ...acc,
      [cur]: (acc[cur] - 1),
    }), createHashTable(participants))
  ).find(second)[0];

const second = x => x[1];

test('findLoser', () => {
  expect(findLoser(['leo', 'kiki', 'eden'], ['eden', 'kiki'])).toBe('leo');
  expect(findLoser(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola']
  )).toBe('vinko');
  expect(findLoser(
    ['mislav', 'stanko', 'mislav', 'ana'],
    ['stanko', 'ana', 'mislav']
  )).toBe('mislav');
});

test('createHashTable', () => {
  expect(createHashTable(['leo', 'kiki', 'eden'])).toEqual({
    leo: 1,
    kiki: 1,
    eden: 1,
  });
  expect(createHashTable(['leo', 'leo', 'kiki', 'eden'])).toEqual({
    leo: 2,
    kiki: 1,
    eden: 1,
  });
})