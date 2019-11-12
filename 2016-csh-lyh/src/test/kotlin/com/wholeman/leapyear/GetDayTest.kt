package com.wholeman.leapyear

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

val daysOfEachMonth = arrayOf(31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
val weeks = arrayOf("THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED")

fun getDayOfTheWeek(month: Int, day: Int): String {
    return weeks[(getFirstDayOfMonth(month) - 1 + day) % 7]
}

fun getFirstDayOfMonth(month: Int): Int {
    return if (month == 1) 1 else 1 + daysOfEachMonth
            .sliceArray(0 until month - 1)
            .reduce { sum, days -> sum + days }
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