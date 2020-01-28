# <How to Solve It>
#
# 1. 문제 이해
# - 알아내야 하는 것: 몇 조각으로 나눠지는가?
# - 자료: 괄호의 가운데가 잘린다. => () 모양은 자르는 지점.
# -> 괄호의 의미? 막대기의 양 끝을 괄호로 표현. 그냥 ()이면 막대기가 아니라 레이저 절단부.
# - 조건: 긴 막대는 짧은 막대를 무조건 포함.
# 아래는 불가능
# ====
#  ====
# 아래는 가능
# =====
#  ===
#
# 2. 계획 수립
# - 현재 자를 수 있는 막대기가 몇 개인가?
# - 잘린 막대기가 몇 개인가?
# - 막대기가 끝나면 잘린 막대기로 넣어준다.
# e.g. (((()))) => 6개
#      ========
#       ======
#        ===
#         ^
#
# 3. 계획 실행
# -> 코딩 + 테스트 코드를 통해 각 단계를 검증!
#
# 4. 반성
# - 제대로 풀었는가?
# - 다르게 풀 수 있을까?
# - 다른 문제에 적용할 수 있을까?

PROCESS = {
    '(': {'piece': 0, 'stick': 1},
    ')': {'piece': 1, 'stick': -1},
    'x': {'piece': 0, 'stick': 0},
}


def solution1(sticks):
    pieces_count = 0
    sticks_count = 0
    for c in sticks.replace('()', 'x'):
        if c == 'x':
            pieces_count += sticks_count
        pieces_count += PROCESS[c]['piece']
        sticks_count += PROCESS[c]['stick']
    return pieces_count


def solution2(sticks):
    pieces_count = 0
    sticks_count = 0
    for c in sticks.replace('()', 'x'):
        if c == 'x':
            pieces_count += sticks_count
        if c == '(':
            sticks_count += 1
        if c == ')':
            pieces_count += 1
            sticks_count -= 1
    return pieces_count


def test_solution():
    for solution in [solution1, solution2]:
        assert solution('(((())))') == 6
        assert solution('(((())()))') == 8
        assert solution('()(((()())(())()))(())') == 17
