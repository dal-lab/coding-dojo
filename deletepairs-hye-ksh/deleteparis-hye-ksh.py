import re
from string import ascii_lowercase

PATTERN = re.compile('|'.join(i * 2 for i in ascii_lowercase))


def solution1(text):
    remain = text
    while True:
        pair = find_pair(remain)
        if not pair:
            break
        remain = remain.replace(pair, '')
    return not remain and 1 or 0


def solution2(text):
    pair = find_pair(text)
    if not pair:
        return not text and 1 or 0
    return solution2(text.replace(pair, ''))


def solution3(text):
    remain = PATTERN.sub('', text)
    if remain == text:
        return not text and 1 or 0
    return solution3(remain)


def solution4(text):
    stack = []
    for x in text:
        if stack and x == stack[-1]:
            stack.pop()
            continue
        stack.append(x)
    return not stack and 1 or 0


def solution5(text):
    return not aux(text, '') and 1 or 0


def aux(text, stack):
    if not text:
        return stack
    if text[0] == stack[-1:]:
        return aux(text[1:], stack[:-1])
    return aux(text[1:], stack + text[0])


def find_pair(text):
    for i in range(len(text) - 1):
        if text[i] == text[i + 1]:
            return text[i:i + 2]
    return ''


def test_sample():
    for solution in [solution1, solution2, solution3, solution4, solution5]:
        assert solution('aabb') == 1
        assert solution('baabaa') == 1
        assert solution('cdcd') == 0
        assert solution('cbaabaac') == 1
        assert solution('abcdeedddcba') == 1


def test_find_pair():
    assert find_pair('a') == ''
    assert find_pair('aa') == 'aa'
    assert find_pair('bb') == 'bb'
    assert find_pair('baa') == 'aa'
    assert find_pair('bcaa') == 'aa'
    assert find_pair('cd') == ''
