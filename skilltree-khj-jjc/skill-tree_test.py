def solution(skill, skill_trees):
    answer = 0
    for skill_tree in skill_trees:
        if is_valid(skill, skill_tree):
            answer += 1
    return answer


def is_valid(skill, skill_tree):
    index_list = []
    for char in skill:
        try:
            index_list.append(skill_tree.index(char))
        except:
            index_list.append(99)
    return (sorted(index_list) == index_list)


def test_solution():
    assert solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]) == 2
    assert is_valid("CBD", "BACDE") == False
    assert is_valid("CBD", "CBADF") == True
    assert is_valid("CBD", "AECB") == True
    assert is_valid("CBD", "B") == False
    assert is_valid("CD", "AF") == True


"""
DBC    EDCAB

142


CBD    AECB

DBC    BCEA

-1 0 1

DBC    B

-1 0 -1

DC    FA

-1 -1 


"""
