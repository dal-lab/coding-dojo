def divided_numbers(numbers, divisor):
    return sorted(i for i in numbers if i % divisor == 0) or [-1]


def test_sample():
    assert divided_numbers([5, 9, 7, 10], 5) == [5, 10]
    assert divided_numbers([2, 36, 1, 3], 1) == [1, 2, 3, 36]
    assert divided_numbers([3, 2, 6], 10) == [-1]
