def solution(length, weight, trucks):
    seconds = 0
    bridges = [0] * length
    while sum(bridges) or trucks:
        bridges = shift(bridges)
        if ready(weight, bridges, trucks):
            bridges, trucks = go(bridges, trucks)
        seconds += 1
    return seconds


def shift(xs):
    return xs[1:] + [0]


def ready(weight, bridges, trucks):
    return trucks and sum(bridges) + trucks[0] <= weight


def go(bridges, trucks):
    return bridges[:-1] + trucks[:1], trucks[1:]


def test_sample():
    assert solution(2, 10, [7, 4, 5, 6]) == 8
    assert solution(100, 100, [10]) == 101
    assert solution(100, 100, [10] * 10) == 110


def test_check():
    assert not ready(10, [0, 0, 0, 7], [4, 5, 6])


def test_go():
    assert go([0, 0, 7, 0], [3, 1]) == ([0, 0, 7, 3], [1])


def test_shift():
    assert shift([0, 0, 7, 0]) == [0, 7, 0, 0]
