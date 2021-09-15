const run = s => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] == s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length == 0 ? 1 : 0;
};

test(`test`, () => {
  expect(run("baabaa")).toBe(1);
  expect(run("cdcd")).toBe(0);
});
