
/*
1번 수포자가 찍는 방식: [1, 2, 3, 4, 5]
2번 수포자가 찍는 방식: [2, 1, 2, 3, 2, 4, 2, 5]
3번 수포자가 찍는 방식: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
*/

const PATTERNS = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

const getHighScoreStudents = answers => {
  const count = pattern =>
    countCorrectAnswers(studentAnswers(pattern, answers.length), answers);

  const scores = PATTERNS.map(count);

  const maxScore = Math.max(...scores);

  return PATTERNS.reduce((students, _, index) => (
    scores[index] === maxScore ? [...students, index + 1] : students
  ), []);
};

const studentAnswers = (pattern, length) =>
  [...Array(length)].map((_, i) =>
    pattern[i % pattern.length]
  );

const countCorrectAnswers = (studentAnswers, answers) =>
  answers.filter((answer, index) => 
    answer === studentAnswers[index]
  ).length;

test('getHighScoreStudents', () => {
  expect(getHighScoreStudents([1, 2, 3, 4, 5])).toEqual([1]);
  expect(getHighScoreStudents([1, 3, 2, 4, 2])).toEqual([1, 2, 3]);
});

test('studentAnswers', () => {
  expect(studentAnswers([1, 2], 0)).toEqual([]);
  expect(studentAnswers([1, 2], 1)).toEqual([1]);
  expect(studentAnswers([1, 2], 2)).toEqual([1, 2]);
  expect(studentAnswers([1, 2], 3)).toEqual([1, 2, 1]);
  expect(studentAnswers([1, 2], 4)).toEqual([1, 2, 1, 2]);
  expect(studentAnswers([1, 2], 10)).toEqual([1, 2, 1, 2, 1, 2, 1, 2, 1, 2]);
});

test('countCorrectAnswers', () => {
  expect(countCorrectAnswers([1, 2], [1, 2])).toBe(2);
  expect(countCorrectAnswers([1, 2], [3, 4])).toBe(0);
  expect(countCorrectAnswers([1, 2], [1, 4])).toBe(1);
});