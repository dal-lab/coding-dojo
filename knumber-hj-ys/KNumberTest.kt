package com.hyejineee.KNumberTest

import com.hyejineee.KNumber.KNumber
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.CoreMatchers.equalTo
import org.junit.Assert.assertThat
import org.junit.Test

class KNumberTest {
    @Test
    fun KNumberTest() {
        assertThat(
            KNumber(
                intArrayOf(1, 5, 2, 6, 3, 7, 4),
                arrayOf(
                    intArrayOf(2, 5, 3),
                    intArrayOf(4, 4, 1),
                    intArrayOf(1, 7, 3)
                )
            ),
            `is`(equalTo(intArrayOf(5,6,3)))
        )
    }
}