const solution = records => {
  const tmp = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다."
  };
  let obj = {};
  const chatRecords = [];
  records.forEach(record => {
    const splited = split(record);
    // obj = createUserData(obj, splited);
    obj[splited[1]] = splited[2] || obj[splited[1]];
    if (splited[0] !== "Change") chatRecords.push(createChatRecord(splited));
  });

  const answer = [];

  for (let i = 0; i < chatRecords.length; i++) {
    const finalNick = obj[chatRecords[i][1]];
    answer.push(`${finalNick}${tmp[chatRecords[i][0]]}`);
  }

  return answer;
};

const split = record => {
  return record.split(" ");
};

const createUserData = (obj, arr) => {
  return {
    ...obj,
    [arr[1]]: arr[2] || obj[arr[1]]
  };
};

const createChatRecord = nextArr => {
  return [nextArr[0], nextArr[1]];
};

test("split", () => {
  expect(split("Enter uid1234 Muzi")).toEqual(["Enter", "uid1234", "Muzi"]);
});

test("createUserData", () => {
  expect(createUserData({}, ["Enter", "uid1234", "Muzi"])).toEqual({
    uid1234: "Muzi"
  });
});

test("createChatRecord", () => {
  expect(createChatRecord(["Enter", "uid1234", "Muzi"])).toEqual([
    "Enter",
    "uid1234"
  ]);
});

test("solution", () => {
  expect(
    solution([
      "Enter uid1234 Muzi",
      "Enter uid4567 Prodo",
      "Leave uid1234",
      "Enter uid1234 Prodo",
      "Change uid4567 Ryan"
    ])
  ).toEqual([
    "Prodo님이 들어왔습니다.",
    "Ryan님이 들어왔습니다.",
    "Prodo님이 나갔습니다.",
    "Prodo님이 들어왔습니다."
  ]);
  expect(
    solution([
      "Enter uid1234 Muzi",
      "Leave uid1234",
      "Enter uid4567 Prodo",
      "Enter uid1234 Prodo",
      "Change uid4567 Ryan"
    ])
  ).toEqual([
    "Prodo님이 들어왔습니다.",
    "Prodo님이 나갔습니다.",
    "Ryan님이 들어왔습니다.",
    "Prodo님이 들어왔습니다."
  ]);
  expect(
    solution([
      "Enter uid1234 Muzi",
      "Change uid1234 Ryan",
      "Leave uid1234",
      "Enter uid4567 Prodo",
      "Enter uid1234 Prodo",
      "Leave uid4567"
    ])
  ).toEqual([
    "Prodo님이 들어왔습니다.",
    "Prodo님이 나갔습니다.",
    "Prodo님이 들어왔습니다.",
    "Prodo님이 들어왔습니다.",
    "Prodo님이 나갔습니다."
  ]);
});
