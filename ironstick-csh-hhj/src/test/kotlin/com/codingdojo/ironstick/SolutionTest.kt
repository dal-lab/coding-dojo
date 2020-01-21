package com.codingdojo.ironstick

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

/*
1. arrangement(문자열)를 하나씩 읽어온다.
2. 읽어올 때 다음 문자열도 먼저 확인한다. -> 레이저 여부를 확인하기 위해.
    2-1. 레이저가 아니면('('만 왔을 경우) 막대기 개수 stack에 개수 하나 추가.
    2-2. 레이저인 경우 현재 쌓인 막대기 개수(stack)만큼 total += count.
3. ')'가 왔을 경우 stack에서 한개 제거 후 total += 1
4. stack 초기 길이를 0으로 -> 허공샷일 때 total += 0 위해
 */

fun solution(arrangement: String): Int {
    tailrec fun step(arrangement: String, sticks: Int, total: Int): Int = when {
        arrangement.isEmpty() -> total
        arrangement.take(1) == "(" -> step(arrangement.drop(1), sticks + 1, total)
        arrangement.take(1) == "*" -> step(arrangement.drop(1), sticks, total + sticks)
        else -> step(arrangement.drop(1), sticks - 1, total + 1)
    }

    return step(arrangement.replace("()", "*"), 0, 0)
}

class SolutionTest {

    @Test
    fun `Calculate the total number of truncated bar pieces`() {
        assertThat(solution("(()())")).isEqualTo(3)
        assertThat(solution("()")).isEqualTo(0)
        assertThat(solution("()(((()())(())()))(())")).isEqualTo(17)
    }
}
