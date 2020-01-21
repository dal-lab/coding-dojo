package com.codingdojo.ironstick

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution1(arrangement: String): Int {
    tailrec fun step(arrangement: String, sticks: Int, total: Int): Int = when {
        arrangement.isEmpty() -> total
        arrangement.first() == '(' -> step(arrangement.drop(1), sticks + 1, total)
        arrangement.first() == '*' -> step(arrangement.drop(1), sticks, total + sticks)
        else -> step(arrangement.drop(1), sticks - 1, total + 1)
    }

    return step(arrangement.replace("()", "*"), 0, 0)
}

fun solution2(arrangement: String): Int =
        arrangement.replace("()", "*").fold(Pair(0, 0)) { acc, c ->
            when (c) {
                '(' -> Pair(acc.first + 1, acc.second)
                '*' -> Pair(acc.first, acc.second + acc.first)
                else -> Pair(acc.first - 1, acc.second + 1)
            }
        }.second

class SolutionTest {

    @Test
    fun `Calculate the total number of truncated bar pieces`() {
        arrayOf(::solution1, ::solution2).forEach { solution ->
            assertThat(solution("(()())")).isEqualTo(3)
            assertThat(solution("()")).isEqualTo(0)
            assertThat(solution("()(((()())(())()))(())")).isEqualTo(17)
        }
    }
}
