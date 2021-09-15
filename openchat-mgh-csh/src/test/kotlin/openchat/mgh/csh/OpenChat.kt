package openchat.mgh.csh

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(record: Array<String>): Array<String> {
    val users = mutableMapOf<String, String>()
    val result = mutableListOf<String>()
    var msg = record.map { it.split(" ") }

    record.forEachIndexed {index , _ ->
        if (msg[index][0] != "Leave") users[msg[index][1]] = msg[index][2]
    }

    record.forEachIndexed { index, _ ->
        if (msg[index][0] != "Change") {
            result.add("${users[msg[index][1]]}님이 ${changeCommandToMsg(msg[index][0])}")
        }
    }

    return result.toTypedArray()
}

fun changeCommandToMsg(command: String) =
        when (command) {
            "Enter" -> "들어왔습니다."
            else -> "나갔습니다."
        }

internal class OpenChat {
    @Test
    fun `Print Message`() {
        assertThat(
                solution(
                        arrayOf(
                                "Enter uid1234 Muzi",
                                "Enter uid4567 Prodo",
                                "Leave uid1234",
                                "Enter uid1234 Prodo",
                                "Change uid4567 Ryan"
                        )))
                .isEqualTo(
                        arrayOf(
                                "Prodo님이 들어왔습니다.",
                                "Ryan님이 들어왔습니다.",
                                "Prodo님이 나갔습니다.",
                                "Prodo님이 들어왔습니다."
                        ))
    }

    @Test
    fun `Change command to message `() {
        assertThat(changeCommandToMsg("Enter")).isEqualTo("들어왔습니다.")
        assertThat(changeCommandToMsg("Leave")).isEqualTo("나갔습니다.")
    }
}
