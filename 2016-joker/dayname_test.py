DAY_NAMES = 'SUN MON TUE WED THU FRI SAT'.split()
DAYS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


def dayname(month, day):
    days = sum(DAYS[:month - 1]) + day
    return DAY_NAMES[(4 + days) % len(DAY_NAMES)]


def test_sample():
    assert dayname(1, 1) == 'FRI'
    assert dayname(2, 1) == 'MON'
    assert dayname(5, 24) == 'TUE'
    assert dayname(12, 25) == 'SUN'
