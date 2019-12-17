package com.codingdojo.budget

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

/**
 * Created by wholeman on 17/12/2019
 * Github : http://github.com/wholemann
 * E-Mail : wholeman.dev@gmail.com
 */

tailrec fun solution(d: Collection<Int>, budget: Int): Int = when {
    d.fold(0, { total, next -> total + next }) <= budget -> d.size
    else -> solution(d.sorted().dropLast(1), budget)
}

class SolutionTest {

    @Test
    fun `it returns maximum supportable department count`() {
        assertThat(solution(mutableListOf(1, 3, 2, 5, 4), 9)).isEqualTo(3)
        assertThat(solution(mutableListOf(1, 4, 2, 4, 3), 10)).isEqualTo(4)
        assertThat(solution(mutableListOf(2, 2, 3, 3), 10)).isEqualTo(4)
    }
}
