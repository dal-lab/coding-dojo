const patterns = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

const isCorrect = (pattern, answer, index) =>
  answer === pattern[index % pattern.length];

const first = x => x[0];

const exam = (answers) => {
  const scores = patterns.map((pattern, index) =>
    answers.reduce((acc, cur, i) =>
      isCorrect(pattern, cur, i) ? acc + 1 : acc, 0));

  const max = Math.max(...scores);

  return scores.map((score, i) => [i + 1, score])
    .filter(([_, score]) => score === max)
    .map(first);
};

test('exam', () => {
  expect(exam([1, 2, 3, 4, 5])).toEqual([1]);
  expect(exam([1, 3, 2, 4, 2])).toEqual([1, 2, 3]);
});