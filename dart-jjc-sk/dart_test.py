import re


def solution(dart_result):
    return sum(map(score, dart_to_hits((dart_result))))


def score(hit):
    return hit[0] ** hit[1] * hit[2]


def dart_to_hits(dart_result):
    tokens = re.findall('([0-9]+)([SDT])([*#]?)', dart_result)
    hits = []
    for number, power, option in tokens:
        coefficient = {'': 1, '*': 2, '#': -1}[option]
        if hits and option == '*':
            last_token = hits.pop()
            hits.append(last_token[:2] + (last_token[-1] * 2,))
        hits.append((int(number), 'SDT'.index(power) + 1, coefficient))
    return hits


def test_solution():
    assert solution('1D2S0T') == 3
    assert solution('1S2D*3T') == 37
    assert solution('1D2S#10S') == 9
    assert solution('1S*2T*3S') == 23
    assert solution('1D#2S*3S') == 5
    assert solution('1T2D3D#') == -4
    assert solution('1D2S3T*') == 59


def test_score():
    assert score((1, 2, 1)) == 1
    assert score((2, 2, 2)) == 8
    assert score((0, 3, 1)) == 0


def test_tokens_to_hits():
    assert dart_to_hits('1D2S0T') == [(1, 2, 1), (2, 1, 1), (0, 3, 1)]
    assert dart_to_hits('1D*2S#0T') == [(1, 2, 2), (2, 1, -1), (0, 3, 1)]
    assert dart_to_hits('1S2D*3T') == [(1, 1, 2), (2, 2, 2), (3, 3, 1)]
