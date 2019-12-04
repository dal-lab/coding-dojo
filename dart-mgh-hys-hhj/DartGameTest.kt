package com.dojo.app

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

internal class DartGameTest {
    @Test
    fun `Calculate score of dart result`() {
        assertThat(calculateScore("1S2D*3T")).isEqualTo(37)
        assertThat(calculateScore("1D2S#10S")).isEqualTo(9)
        assertThat(calculateScore("1D2S0T")).isEqualTo(3)
        assertThat(calculateScore("1S*2T*3S")).isEqualTo(23)
        assertThat(calculateScore("1D#2S*3S")).isEqualTo(5)
        assertThat(calculateScore("1T2D3D#")).isEqualTo(-4)
        assertThat(calculateScore("1D2S3T*")).isEqualTo(59)
    }

    @Test
    fun `Split dart result`() {
        assertThat(splitResult("1S2D*3T")).isEqualTo(arrayOf("1S", "2D", "*", "3T"))
        assertThat(splitResult("1D#2S*3S")).isEqualTo(arrayOf("1D", "#", "2S", "*", "3S"))
    }


    @Test
    fun `Calculate split dart results`() {
        assertThat(calculate(arrayOf("1S", "2D", "*", "3T"))).isEqualTo(37)
        assertThat(calculate(arrayOf("1D", "#", "2S", "*", "3S"))).isEqualTo(5)
    }
}

//  계획:
//  1. 문자열을 쪼개자
//  다음 숫자가 나오기 전까지
//  1S2D*3T => ['1S', '2D', '*', '3T']
//  반복문으로 하나하나 체크하면서 쪼갠다.
//  2. ['1S', '2D', '*', '3T'] => [1^1, 2^2, '*', 3^3] => [1, 4, '*', 27] => [1 * 2,   4 * 2, 27]
//  fun run(char) {
//      '10D'
//      맨뒤에 캐릭터를 자른다.
//          숫자를 뽑는다.
//      return Math.sqrt(숫자, map[캐릭터])
//  }
//  3. [1 * 2, 4 * 2, 27]
//  4. sum([1 * 2, 4 * 2, 27])

//  우리가 원하는 것:
//  0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작 성하라.
//  
// *는 해당 점수와 바로 전에 얻은 점수를 2배로 만든다.
// #은 해당 점수는 마이너스 된다.
// S 1제곱, D는 2제곱, T는 3제곱
// 숫자 다음에는 문자가 온다(S, D, T)
// 타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
//  
//  map[string]int {
//      "S": 1,
//      "D": 2,
//      "T": 3
//  }
