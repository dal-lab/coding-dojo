package com.codingdojo.budget

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

/**
 * Created by wholeman on 17/12/2019
 * Github : http://github.com/wholemann
 * E-Mail : wholeman.dev@gmail.com
 */

fun solution(d: List<Int>, budget: Int): Int = step(d.sorted(), d.sum() - budget)

tailrec fun step(d: List<Int>, gap: Int): Int = when {
    gap <= 0 -> d.size
    else -> step(d.dropLast(1), gap - d.last())
}

class SolutionTest {

    @Test
    fun `it returns maximum supportable department count`() {
        assertThat(solution(listOf(1, 3, 2, 5, 4), 9)).isEqualTo(3)
        assertThat(solution(listOf(1, 4, 2, 4, 3), 10)).isEqualTo(4)
        assertThat(solution(listOf(2, 2, 3, 3), 10)).isEqualTo(4)
    }
}
