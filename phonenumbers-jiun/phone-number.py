from itertools import combinations
from functools import partial

def solution(phone_book):
    return not any(filter(lambda x: str.startswith(*x), (map(partial(sorted, key=len, reverse=True), combinations(phone_book, 2)))))
