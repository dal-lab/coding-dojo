package com.dojo.budget

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

internal class BudgetKtTest {
    @Test
    fun maxDepartmentsCount() {
        assertThat(maxDepartmentsCount(arrayOf(1, 3, 2, 5, 4), 9)).isEqualTo(3)
        assertThat(maxDepartmentsCount(arrayOf(2, 2, 3, 3), 10)).isEqualTo(4)
    }
}