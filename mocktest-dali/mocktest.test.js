//1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
//2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 패턴이 있다. 1 번 은 5 번 반복 
// 2번은 8개로 반복 
// 3번은 10개 Set로 반복 
const getScoreSet =  (answer, index) => {
  const P1_ANSWER_SET = [1,2,3,4,5];
  const P2_ANSWER_SET = [2,1,2,3,2,4,2,5];
  const P3_ANSWER_SET = [3,3,1,1,2,2,4,4,5,5];

  const getScore = (bool) => bool ? 1 : 0 

  const isCorrectP1 = getScore(P1_ANSWER_SET[index % 5] === answer)
  const isCorrectP2 = getScore(P2_ANSWER_SET[index % 8] === answer)
  const isCorrectP3 = getScore(P3_ANSWER_SET[index % 10] === answer)
  return [isCorrectP1, isCorrectP2, isCorrectP3];
}

const getHighScorer = (answers) => {
  const scoresObj = { s1: 0, s2: 0, s3: 0};
  const resultObj =  answers.reduce((acc, cur, i) => {
    const [s1, s2, s3] = getScoreSet(cur, i) 
    return {
      s1: acc.s1 + s1, 
      s2: acc.s2 + s2,
      s3: acc.s3 + s3 
    }
  },scoresObj)

  const mapToNum = {
    s1: 1,
    s2: 2,
    s3: 3
  }
  const rankingResult = Object.entries(resultObj).sort(([keyA,valueA], [keyB,valueB]) => {
    const gap = valueB - valueA
    if(gap === 0) return mapToNum[keyA] - mapToNum[keyB] 
    else return gap
  })
  .filter(([k, v],i,array) => v === array[0][1]).map(([k,v])=> mapToNum[k])

  return rankingResult;
}


test('getScoreSet [1] to  [true, false, false]', () => {
  expect(getScoreSet(1,0)).toEqual([1, 0, 0])
})
test('getHighScorer [1,2,3,4,5] to  [1]', () => {
  expect(getHighScorer([1,2,3,4,5])).toEqual([1])
})
test('getHighScorer [1,2,3,4,5] to  [1]', () => {
  expect(getHighScorer([1,3,2,4,2])).toEqual([1,2,3])
})