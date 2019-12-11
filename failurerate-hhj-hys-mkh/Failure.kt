package com.dojo.failurerate

fun failureRate(stagesCount: Int, stages: IntArray): IntArray {
    var usersCount = stages.size

    return (1..stagesCount).map { i ->
        if (usersCount == 0) {
            Pair(i, 0.0)
        } else {
            val usersCountInStage = stages.filter { it == i }.size
            usersCount -= usersCountInStage
            Pair(i, usersCountInStage / usersCount.toDouble())
        }
    }
        .sortedByDescending { (_, failureRate) -> failureRate }
        .map { (stage) -> stage }
        .toIntArray()
}
