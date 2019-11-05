def knumbers(numbers, commands):
    return [knumber(numbers, command) for command in commands]


def knumber(numbers, command):
    begin, end, k = command
    return sorted(numbers[begin - 1:end])[k - 1]


def test_sample():
    assert knumbers([1, 5, 2, 6, 3, 7, 4],
                    [[2, 5, 3], [4, 4, 1], [1, 7, 3]]) == [5, 6, 3]


def test_knumber():
    assert knumber([1, 5, 2, 6, 3, 7, 4], [2, 5, 3]) == 5
    assert knumber([1, 5, 2, 6, 3, 7, 4], [2, 4, 3]) == 6
