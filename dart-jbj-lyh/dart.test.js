/*
계획.
    - 1.기록된 점수(dartResult)를 받아서, 단계별로 분류한다.
    - 2.보너스를 적용한다.
    - 3.옵션을 확인한다.
        - 있을 경우
            - 스타상
                - 일단계 : 현재 단계에만 2배를 적용한다.
                - 그외 : 현재 단계와 앞단계에만 2배를 적용한다.
            - 아차상
                - 현재 단계의 값을 음수로 만들어준다.
        - 없을 경우
    - 4.전체 총합을 구한다.
*/
const getSumOfDartPoint = (dartResult) => getAppliedOption(getDeivdedStage(dartResult)
                                            .map((v) => getAppliedBonus(v))).
                                                reduce((acc, cur) => acc+cur, 0);


const getDeivdedStage = (dartResult) => {
    const stages = [];
    const dartResultArray = dartResult.split('');
    const bonusIndexList = [];



    dartResultArray.forEach((v, i) => {
        if (v==='S' || v==='D' ||v ==='T') {
            bonusIndexList.push(i);
        }
    })


    bonusIndexList.forEach((v, i) => {
        const stage = [];

        // 점수가 10 일 경우와 0 일 경우가 있으므로, 구분.
        if(dartResultArray[v-1] == 0 ){
            //여기서 0일 경우 바로 옆에 1이 존재하는지 확인부터 한다.
            if(dartResultArray[v-2] ==1){
                stage.push(10)
            }else{
                stage.push(0);
            }
            
        }else{
            stage.push(parseInt(dartResultArray[v-1]))
        }

        // 보너스
        stage.push(dartResultArray[v]);
        

        // 옵션
        if(dartResultArray[v+1]==='*' || dartResultArray[v+1]==='#'){
            stage.push(dartResultArray[v+1]);
        } else {
            stage.push(null);
        }

        stages.push(stage);
    });

    return stages;
}

const getAppliedBonus = (stage) => {

    const result = [];

    if (stage[1] === 'S') {
        result.push(stage[0],stage[2]);
    }else if (stage[1] === 'D') {
        result.push(stage[0] * stage[0],stage[2]);
    }else if (stage[1] === 'T') {
        result.push(stage[0] * stage[0] * stage[0],stage[2]);
    }

    return result;
}

const getAppliedOption = (stage) => {

    const result = [];

    stage.forEach((v, i) => {
        if (v[1] === '*') {
            if (i == 0) {
                result.push(v[0] * 2);
            } else {
                result[i-1] = result[i-1] * 2;
                result.push(v[0] * 2);
            }
        } else if (v[1] === '#') {
            result.push(v[0]* -1);
        }else{
            result.push(v[0]);
        }
    });
    
    return result;
}

test('getSumOfDartPoint', () => {
    expect(getSumOfDartPoint('1S2D*3T')).toBe(37);
    expect(getSumOfDartPoint('1D2S#10S')).toBe(9);
    expect(getSumOfDartPoint('1D2S0T')).toBe(3);
    expect(getSumOfDartPoint('1S*2T*3S')).toBe(23);
    expect(getSumOfDartPoint('1D#2S*3S')).toBe(5);
    expect(getSumOfDartPoint('1T2D3D#')).toBe(-4);
    expect(getSumOfDartPoint('1D2S3T*')).toBe(59);
})

test('getDeivdedStage', () => {
    expect(getDeivdedStage('1S2D*3T')).toEqual([[1,"S",null], [2, "D", "*"], [3, "T", null]]);
    expect(getDeivdedStage('1D2S#10S')).toEqual([[1,"D",null], [2, "S", "#"], [10, "S", null]]);
})

test('getAppliedBonus', () => {
    expect(getAppliedBonus([1, 'S', null])).toEqual([1, null]);
})

test('getAppliedOption', () => {
    expect(getAppliedOption([[1, null], [4, '*'], [27, null]])).toEqual([2,8,27]);
    expect(getAppliedOption([[4, '*']])).toEqual([8]);
}) 
