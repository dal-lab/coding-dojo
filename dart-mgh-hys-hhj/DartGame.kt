package com.dojo.app

import kotlin.math.pow

fun calculateScore(dartResult: String): Int {
    val results = splitResult(dartResult)
    return calculate(results)
}

fun splitResult(dartResult: String): Array<String> {
    var temp = ""
    var results = mutableListOf<String>()
    dartResult.forEach {
        temp += it
        if (it == 'S' || it == 'D' || it == 'T' || it == '*' || it == '#') {
            results.add(temp)
            temp = ""
        }
    }

    return results.toTypedArray()
}


fun calculate(results: Array<String>): Int {
    val processedResult = mutableListOf<Int>()

    results.forEachIndexed { index, it ->
        if (it.last() == 'S') {
            processedResult.add(it.substringBeforeLast('S').toInt())
        }

        if (it.last() == 'D') {
            processedResult.add(it.substringBeforeLast('D').toDouble().pow(2).toInt())
        }

        if (it.last() == 'T') {
            processedResult.add(it.substringBeforeLast('T').toDouble().pow(3).toInt())
        }

        if (it == "*") {
            processedResult[processedResult.lastIndex] *= 2
            if (processedResult.size >= 2) {
                processedResult[processedResult.lastIndex - 1] *= 2
            }
        }

        if (it == "#") {
            processedResult[processedResult.lastIndex] *= -1
        }
    }

    return processedResult.sum()
}
