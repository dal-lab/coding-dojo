def calc_fail_rate(stage, stages):
    try_players = len(list(filter(lambda x: (x >= stage), stages)))
    fail_players = stages.count(stage)
    return fail_players / (try_players or 1)


def solution(n, stages):
    rates = {stage: calc_fail_rate(stage, stages) for stage in range(1, n + 1)}
    sorted_rates = sorted(rates.items(), key=last, reverse=True)
    return list(map(first, sorted_rates))


def first(xs):
    return xs[0]


def last(xs):
    return xs[-1]


def test_calc_fail_rate():
    assert calc_fail_rate(1, [2, 1, 2, 6, 2, 4, 3, 3]) == 1 / 8
    assert calc_fail_rate(2, [2, 1, 2, 6, 2, 4, 3, 3]) == 3 / 7
    assert calc_fail_rate(3, [2, 1, 2, 6, 2, 4, 3, 3]) == 2 / 4
    assert calc_fail_rate(4, [2, 1, 2, 6, 2, 4, 3, 3]) == 1 / 2
    assert calc_fail_rate(5, [2, 1, 2, 6, 2, 4, 3, 3]) == 0
    assert calc_fail_rate(1, [4, 4, 4, 4, 4]) == 0
    assert calc_fail_rate(2, [4, 4, 4, 4, 4]) == 0
    assert calc_fail_rate(3, [4, 4, 4, 4, 4]) == 0
    assert calc_fail_rate(4, [4, 4, 4, 4, 4]) == 1


def test_solution():
    assert solution(5, [2, 1, 2, 6, 2, 4, 3, 3]) == [3, 4, 2, 1, 5]
    assert solution(4, [4, 4, 4, 4, 4]) == [4, 1, 2, 3]
    assert solution(1, [1, 1, 1]) == [1]
    assert solution(2, [1, 3, 1]) == [1, 2]
    assert solution(5, [1, 3, 1]) == [3, 1, 2, 4, 5]
