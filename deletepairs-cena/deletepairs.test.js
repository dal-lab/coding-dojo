const solution = text => {
  const pair = findPair(text);
  if (pair == "") return (!text && 1) || 0;
  const pattern = new RegExp(`(${pair})`, "g");
  return solution(text.replace(pattern, ""));
};

const stackSolution = text => {
  const stack = [];
  for (let i = 0; i < text.length; i++) {
    if (stack[stack.length - 1] == text[i]) {
      stack.pop();
    } else {
      stack.push(text[i]);
    }
  }
  return (!stack.length && 1) || 0;
};

const findPair = text => {
  for (let i = 0; i < text.length - 1; i++) {
    if (text[i] == text[i + 1]) {
      return text[i] + text[i + 1];
    }
  }
  return "";
};

test("stack solution", () => {
  expect(stackSolution("abc")).toBe(0);
  expect(stackSolution("baabaa")).toBe(1);
  expect(stackSolution("ab")).toBe(0);
  expect(stackSolution("cdc")).toBe(0);
  expect(stackSolution("aaaaa")).toBe(0);
});

test("solution", () => {
  expect(solution("baabaa")).toBe(1);
  expect(solution("cdcd")).toBe(0);
  expect(solution("abc")).toBe(0);
  expect(solution("k")).toBe(0);
  expect(solution("aaaaa")).toBe(0);
  expect(solution("aaaa")).toBe(1);
  expect(solution("baaaaab")).toBe(0);
});

test("findPair", () => {
  expect(findPair("baabaa")).toBe("aa");
  expect(findPair("babb")).toBe("bb");
  expect(findPair("cdcd")).toBe("");
  expect(findPair("")).toBe("");
  expect(findPair("ab")).toBe("");
  expect(findPair("aa")).toBe("aa");
});
