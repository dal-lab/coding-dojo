def solution(costs, budget):
    xs = sorted(costs)
    return sum(sum(xs[:i + 1]) <= budget for i in range(len(xs)))


def test_solution():
    assert solution([1, 3, 2, 5, 4], 9) == 3
    assert solution([2, 2, 3, 3], 10) == 4
