import re


def solution(dart_result):
    return sum(map(score, tokens_to_hits(tokenize(dart_result))))


def score(hit):
    return hit[0] ** hit[1] * hit[2]


def tokenize(dart_result):
    tokens = []
    index = 0
    for i in range(3):
        size = 2
        end = index + size
        if '0' <= dart_result[index + 1] <= '9':
            size += 1
        if dart_result[end:end + 1] in '*#':
            size += 1
        tokens.append(dart_result[index:index + size])
        index += size
    return tokens


def tokens_to_hits(tokens):
    hits = []
    for token in tokens:
        m = re.search('([0-9]+)([SDT])(.?)', token)
        number, power, option = m.groups()
        coeff = {'': 1, '*': 2, '#': -1}[option]
        if hits and option == '*':
            last_token = hits.pop()
            hits.append(last_token[:2] + (last_token[-1] * 2,))
        hits.append((int(number), 'SDT'.index(power) + 1, coeff))
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


def test_tokenize():
    assert tokenize('1D2S0T') == ['1D', '2S', '0T']
    assert tokenize('1S2D*3T') == ['1S', '2D*', '3T']
    assert tokenize('1D#2S*3S') == ['1D#', '2S*', '3S']
    assert tokenize('10D2S0T') == ['10D', '2S', '0T']


def test_tokens_to_hits():
    assert tokens_to_hits(['1D', '2S', '0T']) == [
        (1, 2, 1), (2, 1, 1), (0, 3, 1)]
    assert tokens_to_hits(['1D*', '2S#', '0T']
                          ) == [(1, 2, 2), (2, 1, -1), (0, 3, 1)]
    assert tokens_to_hits(
        ['1S', '2D*', '3T']) == [(1, 1, 2), (2, 2, 2), (3, 3, 1)]
