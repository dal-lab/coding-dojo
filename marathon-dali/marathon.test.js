import getLoser from './marathon.js';


describe('get Loser', () => {
  // 일반
  test("['1','2','3'], ['1','2'] 일때 loser는 3이다.", () => {
    expect(getLoser(['1','2','3'], ['1','2'] )).toBe("3")
  });
 // 동명 이인이 있을 때
 test(" [mislav, stanko, mislav, ana]	[stanko, ana, mislav]	 일때 loser는 'mislav'이다.", () => {
    expect(getLoser( ['mislav', 'stanko', 'mislav', 'ana'],	['stanko', 'ana', 'mislav'] )).toBe("mislav")
  })
  // 참가자가 1명일 때 
  test(" [mislav]	[]	 일때 loser는 'mislav'이다.", () => {
    expect(getLoser(['mislav'],	[] )).toBe("mislav")
  }); 


})