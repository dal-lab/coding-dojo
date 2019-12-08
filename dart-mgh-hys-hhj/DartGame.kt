package com.dojo.app

import kotlin.math.pow

fun calculateScore(dartResult: String): Int {
    val results = splitResult(dartResult)
    return calculate(results)
}

fun splitResult(dartResult: String): Array<String> =
    dartResult.fold(Pair(emptyArray<String>(), "")) { (parts, temp), c ->
        if ("SDT*#".contains(c)) {
            Pair(parts + arrayOf(temp + c), "")
        } else {
            Pair(parts, temp + c)
        }
    }.first

fun calculate(results: Array<String>): Int =
    results.fold(emptyList<Int>()) { scores, part ->
        when (part) {
            "*" -> scores.dropLast(2) + scores.takeLast(2).map { it * 2 }
            "#" -> scores.dropLast(1) + scores.takeLast(1).map { it * -1 }
            else -> {
                val c = part.last()
                val number = part.substringBeforeLast(c).toDouble()
                val score = number.pow("SDT".indexOf(c) + 1).toInt()
                scores.plus(score)
            }
        }
    }.sum()
