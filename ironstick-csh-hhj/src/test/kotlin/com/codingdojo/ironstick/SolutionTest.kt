package com.codingdojo.ironstick

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

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
