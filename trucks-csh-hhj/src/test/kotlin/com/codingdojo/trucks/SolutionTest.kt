package com.codingdojo.trucks

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution1(bridge_length: Int, weight: Int, truck_weights: IntArray): Int {
    val trucksOnBridge = mutableListOf<Pair<Int, Int>>()
    var total = 0
    val waitingTrucks = truck_weights.toMutableList()

    while (trucksOnBridge.isNotEmpty() || waitingTrucks.isNotEmpty()) {
        if (trucksOnBridge.firstOrNull()?.second == bridge_length) {
            trucksOnBridge.removeAt(0)
        }

        if (waitingTrucks.isNotEmpty() && trucksOnBridge.sumBy { it.first } + waitingTrucks.first() <= weight) {
            trucksOnBridge.add(Pair(waitingTrucks.first(), 0))
            waitingTrucks.removeAt(0)
        }

        total += 1

        for (i in 0 until trucksOnBridge.size) {
            trucksOnBridge[i] = Pair(trucksOnBridge[i].first, trucksOnBridge[i].second + 1)
        }
    }

    return total
}

class SolutionTest {

    @Test
    fun `Find the time it takes for all trucks to cross the bridge`() {
        arrayOf(::solution1).forEach { solution ->
            assertThat(solution(2, 10, intArrayOf(7))).isEqualTo(3)
            assertThat(solution(2, 10, intArrayOf(7, 4))).isEqualTo(5)
            assertThat(solution(2, 10, intArrayOf(7, 4, 5, 6))).isEqualTo(8)
            assertThat(solution(100, 100, intArrayOf(10))).isEqualTo(101)
            assertThat(solution(100, 100, intArrayOf(10, 10, 10, 10, 10, 10, 10, 10, 10, 10))).isEqualTo(110)
        }
    }
}
