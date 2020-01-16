
const isPrime = (number) => {
	for (let i = 2; i <= number; i++) {
		if (number % i === 0) {
			return i === number ? true : false;
		}
	}
}

const countCombination = (arr) => {
	const combinations = [];
	const length = arr.length;
	let numberCheck = null;
	for (let i = 0; i < length; i++) {
		numberCheck = new Set([arr[i]]);
		for (let j = i + 1; j < length; j++) {
			if (numberCheck.has(arr[j])) continue;
			else numberCheck.add(arr[j]);
			for (let k = j + 1; k < length; k++) {
				if (numberCheck.has(arr[k])) continue;
				else numberCheck.add(arr[k]);

				const set = [arr[i], arr[j], arr[k]].sort((a, b) => a - b).join(',');

				if (!combinations.includes(set)) {
					combinations.push(set);
					numberCheck = new Set();
				}
			}
		}
	}



	return combinations.filter(combination => {
		return isPrime(
			combination.split(',').reduce((a, b) => Number(a) + Number(b)))
	}).length;
};

test('should isPrime check', () => {
	expect(isPrime(2)).toBe(true);
	expect(isPrime(3)).toBe(true);
	expect(isPrime(5)).toBe(true);
	expect(isPrime(7)).toBe(true);
	expect(isPrime(11)).toBe(true);
	expect(isPrime(13)).toBe(true);

	expect(isPrime(9)).toBe(false);
	expect(isPrime(12)).toBe(false);
	expect(isPrime(14)).toBe(false);
	expect(isPrime(25)).toBe(false);
	expect(isPrime(30)).toBe(false);

});

test('combination set check', () => {
	expect(countCombination([1, 2, 3, 4])).toBe(1);
	expect(countCombination([1, 2, 7, 6, 4])).toBe(4);
	expect(countCombination([1, 2, 3])).toBe(0);
	expect(countCombination([1, 2, 3, 4, 5])).toBe(2);
	expect(countCombination([2, 4, 6, 7, 9, 10])).toBe(7);
});