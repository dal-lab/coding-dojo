package com.wholeman.leapyear

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

val daysOfEachMonth = arrayOf(31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
val weeks = arrayOf("THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED")

fun getDayOfTheWeek(a: Int, b: Int): String {
    return weeks[(getFirstDayOfMonth(a) - 1 + b) % 7]
}

fun getFirstDayOfMonth(a: Int): Int {
    return if (a == 1) 1 else 1 + daysOfEachMonth
            .sliceArray(0 until a - 1)
            .reduce { acc, cur -> acc + cur }
}

class GetDayTest {

    @Test
    fun getDayOfTheWeekTest() {
        assertThat(getDayOfTheWeek(5, 24)).isEqualTo("TUE")
    }

    @Test
    fun getFirstDayOfMonthTest() {
        assertThat(getFirstDayOfMonth(1)).isEqualTo(1)
        assertThat(getFirstDayOfMonth(2)).isEqualTo(32)
        assertThat(getFirstDayOfMonth(5)).isEqualTo(122)
    }
}