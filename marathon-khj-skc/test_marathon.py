def solution(participant, completion):
    incompletion = {}
    for name in participant:
        incompletion[name] = incompletion.get(name, 0) + 1

    for name in completion:
        incompletion[name] -= 1

    for name in incompletion:
        if incompletion[name] == 1:
            return name


def test_sample():
    assert solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']) == 'leo'
    assert solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
                    ['josipa', 'filipa', 'marina',
                     'nikola']) == 'vinko'
    assert solution(['mislav', 'stanko', 'mislav', 'ana'],
                    ['stanko', 'ana', 'mislav']) == 'mislav'
