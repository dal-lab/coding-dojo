const solution = (bridge_length, weight, truck_weights) => {
  let bridge = Array(bridge_length).fill(0);
  let sumOfWeight = 0;
  let watingTrucks = [...truck_weights];
  let second = 0;

  while (sumOfWeight || watingTrucks.length) {
    const passTruck = bridge.shift();

    sumOfWeight -= passTruck;

    let shiftTruck = 0;

    if (sumOfWeight + watingTrucks[0] <= weight) {
      shiftTruck = watingTrucks.shift();
      sumOfWeight += shiftTruck;
    }

    bridge.push(shiftTruck);

    second++;
  }

  return second;
};

test("solution", () => {
  expect(solution(2, 10, [7, 4, 5, 6])).toBe(8);
  expect(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(
    110
  );
  expect(solution(100, 100, [10])).toBe(101);
});
