package com.codingdojo.phonenumbers

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(phone_book: Array<String>): Boolean {
    tailrec fun step(head: String, phone_book: List<String>): Boolean = when {
        phone_book.isEmpty() -> true
        phone_book.hasPrefix(head) -> false
        else -> step(phone_book.first(), phone_book.drop(1))
    }
    phone_book.sort()
    return step(phone_book.first(), phone_book.drop(1))
}

fun <T: String> Collection<T>.hasPrefix(prefix: String) = any { it.startsWith(prefix) }

class SolutionTest {

    @Test
    fun `Find cases where one phone number is prefixed to another`() {
        assertThat(solution(arrayOf("119", "97674223", "1195524421"))).isEqualTo(false)
        assertThat(solution(arrayOf("123", "456", "789"))).isEqualTo(true)
        assertThat(solution(arrayOf("12", "123", "1235","567","88"))).isEqualTo(false)
    }
}
