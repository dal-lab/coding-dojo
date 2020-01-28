// 1. skill을 array로 변환한다.
// 2. skill_trees에 있는 원소들을 모두 array로 변경해준다.
// 3. 2중 array를 map을 돌면서 filter로 skill에 있는 것만 필터링한다.
// 4. reduce를 써서 필터링된 스킬들이 skill에 contains가 되는 숫자를 얻는다.

const getCorrectSkillCount = (skillTree, skills) => {
  const filteredSkill = skills.map(skill =>
    getFilteredSkill(skillTree, [...skill]).join("")
  );

  return filteredSkill.reduce(
    (acc, cur) => skillTree.startsWith(cur) ? acc + 1 : acc,
    0
  );
};

const getFilteredSkill = (skillTree, skillArray) =>
  skillArray.filter(v => skillTree.includes(v));

test("getCorrectSkillCount", () => {
  expect(getCorrectSkillCount("CBD", ["BACDE", "CBADF", "AECB", "BDA"])).toBe(
    2
  );
});

test("getFilteredSkill", () => {
  expect(getFilteredSkill(["C", "B", "D"], ["B", "A", "C", "D", "E"])).toEqual([
    "B",
    "C",
    "D"
  ]);
});
