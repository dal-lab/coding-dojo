package com.codingdojo.budget

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

/**
 * Created by wholeman on 17/12/2019
 * Github : http://github.com/wholemann
 * E-Mail : wholeman.dev@gmail.com
 */

tailrec fun solution(d: IntArray, budget: Int): Int = when {
    d.fold(0, { total, next -> total + next }) <= budget -> d.size
    else -> solution(d.dropLast(1).toIntArray(), budget)
}

class SolutionTest {

    @Test
    fun `it returns maximum supportable department count`() {
        assertThat(solution(intArrayOf(1, 3, 2, 5, 4), 9)).isEqualTo(3)
        assertThat(solution(intArrayOf(2, 2, 3, 3), 10)).isEqualTo(4)
    }
}
