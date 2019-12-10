package com.dojo.failurerate

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

internal class FailureRateKtTest {
    @Test
    fun `실패율 구하기`() {
        assertThat(failureRate(5, intArrayOf(2, 1, 2, 6, 2, 4, 3, 3)))
            .isEqualTo(intArrayOf(3, 4, 2, 1, 5))

        assertThat(failureRate(4, intArrayOf(4, 4, 4, 4, 4)))
            .isEqualTo(intArrayOf(4, 1, 2, 3))
    }
}
