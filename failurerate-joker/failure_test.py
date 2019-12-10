from collections import Counter


def solution(n, stages):
    c = Counter(stages)
    return sorted(range(1, n + 1), key=lambda x: -failure_rate(x, n, c))


def failure_rate(i, n, c):
    return c.get(i, 0) / (sum(c.get(i, 0) for i in range(i, n + 2)) or 1)


def test_sample():
    assert solution(5, [2, 1, 2, 6, 2, 4, 3, 3]) == [3, 4, 2, 1, 5]
    assert solution(4, [4, 4, 4, 4, 4]) == [4, 1, 2, 3]


def test_failure_rate():
    assert failure_rate(1, 3, Counter([1, 1, 2, 2, 3, 3])) == 2 / 6
    assert failure_rate(2, 3, Counter([1, 1, 2, 2, 3, 3])) == 2 / 4
    assert failure_rate(2, 3, Counter([1, 1, 2, 2, 3, 3, 4])) == 2 / 5
    assert failure_rate(1, 5, Counter([2, 1, 2, 6, 2, 4, 3, 3])) == 1 / 8
    assert failure_rate(3, 5, Counter([2, 1, 2, 6, 2, 4, 3, 3])) == 2 / 4
    assert failure_rate(4, 5, Counter([2, 1, 2, 6, 2, 4, 3, 3])) == 1 / 2
