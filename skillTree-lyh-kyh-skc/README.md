# 스킬트리

1. 이해
* 주어진 스킬트리에 순서에 맞게 배울 스킬을 나열한 사람의 수를 구한다.
스킬틀에 포함되어있지 않은 스킬이면 어디에 들어가도 상관없음.

* 입력값: 스킬트리, 사용자들이 배우려고하는 스킬순서들
  출력값: 주어진 스킬트리에 순서에 맞게 배울 스킬을 나열한 사람의 수

2. 계획
filter
skill = [c, b, d];
skill_trees.filter((v) => {
    return skill.indexOf()
})
    1. skill을 array로 변환한다.
    2. skill_trees에 있는 원소들을 모두 array로 변경해준다.
    3. 2중 array를 map을 돌면서 filter로 skill에 있는 것만 필터링한다.

    4. reduce를 써서 필터링된 스킬들이 skill에 contains가 되는 숫자를 얻는다.

3. 실행

4. 회고