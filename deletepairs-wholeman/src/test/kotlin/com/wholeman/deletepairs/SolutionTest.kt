package com.wholeman.deletepairs

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution1(s: String): Int {
    tailrec fun step(head: String, tail: String): Int = when {
        head.isBlank() -> 1
        tail.isBlank() -> 0
        head.lastOrNull() == tail.firstOrNull() -> step(head.dropLast(1), tail.drop(1))
        else -> step(head + tail.firstOrNull(), tail.drop(1))
    }

    return step(s.firstOrNull().toString(), s.drop(1))
}

fun solution2(s: String) = if (s.fold("") { acc, c ->
            when (c) {
                acc.lastOrNull() -> acc.dropLast(1)
                else -> acc + c
            }
        }.isBlank()) 1 else 0

class SolutionTest {

    @Test
    fun `Delete pairs of adjacent letters in given string`() {
        arrayOf(::solution1, ::solution2).forEach { solution ->
            assertThat(solution("a")).isEqualTo(0)
            assertThat(solution("baabaa")).isEqualTo(1)
            assertThat(solution("cdcd")).isEqualTo(0)
        }
    }
}
