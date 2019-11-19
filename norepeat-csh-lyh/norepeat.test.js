/*
- arr : 입력값의 배열 변수
    - answer : 결과값의 배열 변수
    - arr을 순회하면서 answer에 arr의 각 요소를 넣는다.
    - 넣을때에 answer의 마지막 값이 arr의 요소와 동일하지 않다면, answer에 입력값을 넣고, 동일하다면 넘어간다.
    arr	            answer
[1,1,3,3,0,1,1]	    [1,3,0,1]
[4,4,4,3,3]	        [4,3]
*/

const getNoRepeat = (arr) => arr.filter((v, i) => 
    i === 0 || v !== arr[i - 1]);

// const getNoRepeat = (arr) => 
//     arr.reduce((acc, cur, index) => {
//        return (index === 0 || cur !== arr[index - 1]) ? [...acc, cur] : [...acc] ;
//     }, []);


test('getNoRepeat',() => {
    expect(getNoRepeat([1,1,3,3,0,1,1])).toEqual([1,3,0,1]);
    expect(getNoRepeat([4,4,4,3,3])).toEqual([4, 3]);
});