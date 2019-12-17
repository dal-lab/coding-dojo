package com.dojo.budget

fun budget(
    departmentBudgets: Array<Int>,
    index: Int,
    sum: Int,
    budget: Int
): Int =
    when {
        index == departmentBudgets.size - 1 -> index + 1
        sum + departmentBudgets[index] > budget -> index
        else -> budget(
            departmentBudgets, index + 1, sum + departmentBudgets[index], budget
        )
    }

fun maxDepartmentsCount(departmentBudgets: Array<Int>, budget: Int): Int {
    return budget(departmentBudgets.sorted().toTypedArray(), 0, 0, budget)
}
