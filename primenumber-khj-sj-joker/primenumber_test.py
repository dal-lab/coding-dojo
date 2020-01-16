from itertools import combinations


def solution(numbers):
    return len(prime_cases(numbers))


def prime_cases(numbers):
    sorted_numbers = sorted(numbers)
    pns = prime_numbers(sorted_numbers)
    return [xs for xs in combinations(sorted_numbers, 3) if sum(xs) in pns]


def is_prime(xs, sorted_numbers):
    return sum(xs) in prime_numbers(sorted_numbers)


def prime_numbers(sorted_numbers):
    max_number = sum(sorted_numbers[-3:])
    numbers = set(range(2, max_number + 1))
    for i in range(2, max_number + 1):
        if i not in numbers:
            continue
        numbers -= set(range(i * 2, max_number + 1, i))
    return numbers


def test_solution():
    assert solution([1, 2, 3, 4]) == 1
    assert solution([1, 2, 7, 6, 4]) == 4


def test_prime_cases():
    assert prime_cases([1, 2, 3, 4]) == [(1, 2, 4)]
    assert prime_cases([1, 2, 7, 6, 4]) == [
        (1, 2, 4), (1, 4, 6), (2, 4, 7), (4, 6, 7)
    ]


def test_is_prime():
    assert not is_prime((1, 2, 3), [999, 999, 999])
    assert is_prime((1, 2, 4), [999, 999, 999])
    assert not is_prime((1, 0, 0), [999, 999, 999])
    assert is_prime((1, 1, 0), [999, 999, 999])
    assert is_prime((1, 1, 1), [999, 999, 999])


def test_prime_numbers():
    assert prime_numbers([10, 0, 0]) == {2, 3, 5, 7}
