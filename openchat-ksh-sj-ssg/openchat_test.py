MESSAGES = {
    'Enter': '{}님이 들어왔습니다.',
    'Leave': '{}님이 나갔습니다.',
}

def solution(actions):
    nicknames = {}
    events = []
    for action in actions:
        command, uid, nickname = (action + ' ').split(' ')[:3]
        if command in ['Enter', 'Change']:
            nicknames[uid] = nickname
        if command in ['Enter', 'Leave']:
            events.append((command, uid))

    # events = [
    #     (command, uid)
    #     for command, uid, *_ in [action.split(' ') for action in actions]
    #     if command in ['Enter', 'Leave']
    # ]

    return [MESSAGES[command].format(nicknames[uid]) for command, uid in events]

    # result = []
    # for command, uid in events:
    #     result.append(MESSAGES[command].format(nicknames[uid]))
    #     # if command == 'Enter':
    #     #     result.append('{}님이 들어왔습니다.'.format(nicknames[uid]))
    #     # if command == 'Leave':
    #     #     result.append('{}님이 나갔습니다.'.format(nicknames[uid]))
    # return result


def test_solution():
    assert solution([
        'Enter uid1234 Muzi', 'Enter uid4567 Prodo',
        'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan'
    ]) == [
        'Prodo님이 들어왔습니다.', 'Ryan님이 들어왔습니다.',
        'Prodo님이 나갔습니다.', 'Prodo님이 들어왔습니다.'
    ]
