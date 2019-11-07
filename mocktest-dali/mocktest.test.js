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
  const ANSWER_SET = [
    P1_ANSWER_SET,
    P2_ANSWER_SET,
    P3_ANSWER_SET,
  ];


  const getScore = (bool) => bool ? 1 : 0 
  const isCorrect = (index, answer, set) => (set[index % set.length] === answer) 

  return ANSWER_SET.map(set => getScore(isCorrect(index, answer, set)));
}

const getHighScorer = (answers) => {
  const totalScoreList =  answers.reduce((acc, cur, i) => {
    const scoreList = getScoreSet(cur, i) 
    return acc.map((v,i) => v + scoreList[i])
  }, [0,0,0])


   const max = Math.max(...totalScoreList)
   const rankingList = totalScoreList.map((v, i) => v === max ? i + 1 : 0).filter(v =>v!==0)

   return rankingList;
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