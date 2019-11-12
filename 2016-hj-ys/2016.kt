package com.hyejineee

val startDayOfWeekOfYear = 5;
val weekDays = arrayOf("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT")

fun _2016(month: Int, day: Int): String {
    val days = getDaysIn2016(month, day)
    return weekDays[days % weekDays.size]
}

fun getDaysIn2016(month: Int, day: Int): Int {
    var sum = 0;
    for (i in 1..month - 1) {
        sum += getDaysOfMonth(i)
    }
    return startDayOfWeekOfYear + sum + day - 1
}

val isEven: (Int) -> Boolean = { it % 2 == 0 }

val isOdd: (Int) -> Boolean = { it % 2 == 1 }

fun getDaysOfMonth(month: Int): Int {
    if (month == 2) {
        return 29
    }
    val checker = if (month < 8) isEven else isOdd
    return if (checker(month)) 30 else 31
}
