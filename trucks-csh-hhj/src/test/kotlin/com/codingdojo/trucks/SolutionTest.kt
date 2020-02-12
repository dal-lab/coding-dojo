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

        for (i in 0 until trucksOnBridge.size) {
            trucksOnBridge[i] = Pair(trucksOnBridge[i].first, trucksOnBridge[i].second + 1)
        }

        total += 1
    }

    return total
}

fun solution2(bridge_length: Int, weight: Int, truck_weights: IntArray): Int {
    tailrec fun step(weight: Int, truck_weights: List<Int>, bridges: List<Int>, total: Int): Int = when {
        bridges.sum() == 0 && truck_weights.isEmpty() -> total
        shift(bridges).ready(weight, truck_weights) -> step(weight, truck_weights.drop(1), shift(bridges) + truck_weights.first(), total + 1)
        else -> step(weight, truck_weights, shift(bridges) + 0, total + 1)
    }

    return step(weight, truck_weights.toList(), List(bridge_length) { 0 }, 0)
}

fun <T : Int> Collection<T>.ready(weight: T, truck_weights: List<T>) =
        truck_weights.isNotEmpty() && (sum() + truck_weights.first()) <= weight

fun shift(bridges: List<Int>) = bridges.drop(1)

class SolutionTest {

    @Test
    fun `Find the time it takes for all trucks to cross the bridge`() {
        arrayOf(::solution1, ::solution2).forEach { solution ->
            assertThat(solution(2, 10, intArrayOf(7))).isEqualTo(3)
            assertThat(solution(2, 10, intArrayOf(7, 4))).isEqualTo(5)
            assertThat(solution(2, 10, intArrayOf(7, 4, 5, 6))).isEqualTo(8)
            assertThat(solution(100, 100, intArrayOf(10))).isEqualTo(101)
            assertThat(solution(100, 100, intArrayOf(10, 10, 10, 10, 10, 10, 10, 10, 10, 10))).isEqualTo(110)
        }
    }

    @Test
    fun `Check if the truck is ready to cross the bridge`() {
        assertThat(listOf(7).ready(10, listOf(4))).isEqualTo(false)
    }

    @Test
    fun `The truck moves on the bridge`() {
        assertThat(shift(listOf(0, 0, 7))).isEqualTo(listOf(0, 7))
    }
}
