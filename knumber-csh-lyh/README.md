## 1. 이해

- 아는 것
    - array = 숫자 배열
    - commands = [[i, j, k],[...],[...]] 로 이뤄진 2차원 배열
    - result i번째 숫자에서 j번째 숫자까지 array에서 잘라서 정렬 후 k번째 숫자를 각 commands에서 return 결과를 담은 배열
    - 단 array의 첫번째 index는 0부터가 아니라 1.

## 2. 계획

    1. 입력 받은 commands 배열을 순회하여 각 command를 추출하여 [i, j, k]값을 뽑는다.
    2. [i, j, k]를 참조하여 array에서 i번째부터 j번째까지 slice한 후 정렬한다.
    3. 정렬된 배열에서 k번째 숫자를 뽑아서 return 하여 result 배열에 담는다.
    4. 모든 command에 대해 2-3 명령을 수행한 후 종료.

## 3. 실행

## 4. 반성
