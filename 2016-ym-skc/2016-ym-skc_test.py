DAYS_OF_MONTH = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30]
WEEKDAY_NAMES = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']


def solution(month, day):
    return get_weekday(sum_of_days(month) + day + WEEKDAY_NAMES.index('FRI') - 1)


def sum_of_days(month):
    return sum(DAYS_OF_MONTH[i] for i in range(month))


def get_weekday(days):
    return WEEKDAY_NAMES[days % len(WEEKDAY_NAMES)]


def test_solution():
    assert solution(1, 1) == 'FRI'
    assert solution(5, 24) == 'TUE'
    assert solution(12, 25) == 'SUN'


def test_sum_of_days_of_month():
    assert sum_of_days(1) == 0
    assert sum_of_days(2) == 31
    assert sum_of_days(12) == 366 - 31


def test_get_weekday():
    assert get_weekday(5) == 'FRI'
    assert get_weekday(11) == 'THU'
