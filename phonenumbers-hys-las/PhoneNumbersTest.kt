package com.dojo.phonenumbers

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

internal class PhoneNumbersKtTest {
    @Test
    fun phoneNumbers() {
        assertThat(
            solution(arrayListOf("119", "97674223", "1195524421"))
        ).isEqualTo(false)

        assertThat(
            solution(arrayListOf("97674223", "119", "1195524421"))
        ).isEqualTo(false)

        assertThat(
            solution(arrayListOf("97674223", "1195524421", "119"))
        ).isEqualTo(false)

        assertThat(
            solution(arrayListOf("97674223", "1195524421", "32382", "119"))
        ).isEqualTo(false)

        assertThat(
            solution(arrayListOf("123", "456", "789"))
        ).isEqualTo(true)

        assertThat(
            solution(arrayListOf("12", "123", "1235", "567", "88"))
        ).isEqualTo(false)

        assertThat(
            solution(arrayListOf("12", "12"))
        ).isEqualTo(false)
    }

    @Test
    fun isPrefixIn() {
        assertThat(
            isPrefixIn(arrayListOf("97674223", "1195524421"), "119")
        ).isEqualTo(true)
    }
}
