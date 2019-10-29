from functools import reduce


def solution(n, lost, reserve):
    return n - process_students(init_students(n, lost, reserve)).count(-1)


def init_students(n, lost, reserve):
    return [(i in reserve) - (i in lost) for i in range(1, n + 1)]


def F(f):
    return lambda acc, x: f(acc, x)


def process_students(students):
    return reduce(F(process_student), range(len(students)), students)


def process_student(students, index):
    if students[index] >= 0:
        return students
    for i in [-1, 1]:
        target = index + i
        if not 0 <= target < len(students):
            continue
        if students[target] > 0:
            students[target] -= 1
            students[index] += 1
            return students
    return students


def test_sample():
    assert solution(5, [2, 4], [1, 3, 5]) == 5
    assert solution(5, [1, 3, 5], [2, 4]) == 4
    assert solution(5, [2, 4], [3]) == 4
    assert solution(3, [3], [1]) == 2
    assert solution(3, [1, 2], [2, 3]) == 2


def test_init_students():
    assert init_students(5, [2, 4], [1, 3, 5]) == [1, -1, 1, -1, 1]
    assert init_students(5, [2, 4], [3]) == [0, -1, 1, -1, 0]
    assert init_students(5, [2, 4], [2, 3]) == [0, 0, 1, -1, 0]


def test_process_students():
    assert process_students([1, -1, 1, -1, 1]) == [0, 0, 0, 0, 1]


def test_process_student():
    assert process_student([1, -1, 1, -1, 1], 1) == [0, 0, 1, -1, 1]
    assert process_student([1, -1, 1, -1, 1], 0) == [1, -1, 1, -1, 1]
    assert process_student([1, -1, 1, -1, 1], 3) == [1, -1, 0, 0, 1]
    assert process_student([1, -1, 0, -1, 0], 3) == [1, -1, 0, -1, 0]
    assert process_student([0, -1, 2, -1, 0], 1) == [0, 0, 1, -1, 0]
