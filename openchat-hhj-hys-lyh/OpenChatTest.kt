package com.dojo.openchat

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

internal class OpenChatKtTest {

    @Test
    fun chatLogsTest() {
        assertThat(
            chatLogs(
                arrayOf(
                    "Enter uid1234 Muzi",
                    "Enter uid4567 Prodo",
                    "Leave uid1234",
                    "Enter uid1234 Prodo",
                    "Change uid4567 Ryan"
                )
            )
        ).isEqualTo(
            arrayOf(
                "Prodo님이 들어왔습니다.",
                "Ryan님이 들어왔습니다.",
                "Prodo님이 나갔습니다.",
                "Prodo님이 들어왔습니다."
            )
        )

        assertThat(
            chatLogs(
                arrayOf(
                    "Enter uid1234 Muzi"
                )
            )
        ).isEqualTo(
            arrayOf(
                "Muzi님이 들어왔습니다."
            )
        )

        assertThat(
            chatLogs(
                arrayOf(
                    "Enter uid1234 Muzi",
                    "Leave uid1234 Muzi"
                )
            )
        ).isEqualTo(
            arrayOf(
                "Muzi님이 들어왔습니다.",
                "Muzi님이 나갔습니다."
            )
        )

        assertThat(
            chatLogs(
                arrayOf(
                    "Enter uid1234 Muzi",
                    "Change uid1234 Prodo"
                )
            )
        ).isEqualTo(
            arrayOf(
                "Prodo님이 들어왔습니다."
            )
        )
    }
}
