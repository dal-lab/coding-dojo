// 입력값: string
// 출력값: 1 or 0

// for문을 돌면서 다음 인덱스값이랑 본인값이 같으면 제거
// 같지 않으면 패스

const solution = pairString => {
  let before = pairString;
  while (1) {
    const after = before.length;
    before = getRestPairString(before);
    if (!before) {
      return 1;
    }

    if (before.length === after) {
      return 0;
    }
  }
};

const getRestPairString = pairString => {
  for (let i = 0; i < pairString.length - 1; i++) {
    if (pairString[i] === pairString[i + 1]) {
      return pairString.replace(pairString[i] + pairString[i + 1], "");
    }
  }
  return pairString;
};

test("입력값에 대해서 for문을 돌면서 다음 인덱스 값이랑 본인 값이 같으면 제거한다", () => {
  expect(solution("baabaa")).toBe(1);
  expect(solution("cdcd")).toBe(0);
  expect(solution("aaaaa")).toBe(0);
  expect(solution("aaaaaa")).toBe(1);
  expect(solution("baaaaab")).toBe(0);
});

test("string에서 짝을 찾아 제거한 후의 반환 값은 스페이스가 없는 string이다.", () => {
  expect(getRestPairString("baabaa")).toBe("bbaa");
  expect(getRestPairString("bbaa")).toBe("aa");
  expect(getRestPairString("aa")).toBe("");
  expect(getRestPairString("cdcd")).toBe("cdcd");
  expect(getRestPairString("aaaaa")).toBe("aaa");
  expect(getRestPairString("aaa")).toBe("a");
  expect(getRestPairString("a")).toBe("a");
});

const getAlpabetList = pairString => {
  const result = new Set(pairString);
  return [...result].sort();
};

test("중복없는 알파벳 뽑기", () => {
  expect(getAlpabetList("abbb")).toEqual(["a", "b"]);
  expect(getAlpabetList("abbabb")).toEqual(["a", "b"]);
  expect(getAlpabetList("cdcd")).toEqual(["c", "d"]);
});
