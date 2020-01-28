from itertools import combinations


def solution(phonenumbers):
    return not any(is_prefix(a, b) for a, b in combinations(phonenumbers, 2))


def is_prefix(a, b):
    if len(a) > len(b):
        return is_prefix(b, a)
    return b.startswith(a)


def test_sample():
    assert solution(['119', '97674223', '1195524421']) == False
    assert solution(['123', '456', '789']) == True
    assert solution(['12', '123', '1235', '567', '88']) == False


def test_is_prefix():
    assert is_prefix('119', '1191') == True
    assert is_prefix('1191', '119') == True
    assert is_prefix('119', '191') == False

