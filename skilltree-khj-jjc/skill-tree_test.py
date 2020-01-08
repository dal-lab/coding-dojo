def solution(skill, skill_trees):
    return sum(
        [is_valid_skill_tree(skill, del_other_skill(skill, skill_tree))
         for skill_tree in skill_trees]
    )


def del_other_skill(skill, skill_tree):
    set_skill = set(skill)
    return ''.join([ch for ch in skill_tree if ch in set_skill])


def is_valid_skill_tree(skill, changed_skill_tree):
    return skill.startswith(changed_skill_tree)


def test_solution():
    assert solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]) == 2
    assert solution("CBD", ["CABDE", "CBADF", "AECB", "BDA"]) == 3


def test_del_other_skill():
    assert del_other_skill("CBD", "BACDE") == "BCD"
    assert del_other_skill("CBD", "CBADF") == "CBD"
    assert del_other_skill("CBD", "AECB") == "CB"
    assert del_other_skill("CBD", "BDA") == "BD"
    assert del_other_skill("CBD", "AF") == ""


def test_is_valid_skill_tree():
    assert is_valid_skill_tree("CBD", "BCD") is False
    assert is_valid_skill_tree("CBD", "CB") is True
    assert is_valid_skill_tree("CBD", "B") is False
    assert is_valid_skill_tree("CBD", "CBD") is True
    assert is_valid_skill_tree("CBD", "BD") is False
    assert is_valid_skill_tree("CBD", "") is True
    assert is_valid_skill_tree("ABC", "A") is True
    assert is_valid_skill_tree("ABC", "AB") is True
    assert is_valid_skill_tree("ABC", "ABC") is True
    assert is_valid_skill_tree("ABC", "B") is False
