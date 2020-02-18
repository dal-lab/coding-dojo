package com.dojo.openchat

val commands = mapOf(
    "Enter" to "님이 들어왔습니다.",
    "Leave" to "님이 나갔습니다."
)

fun chatLogs(records: Array<String>): Array<String> {
    val (ids, responses) = records.fold(
        Pair(
            mutableMapOf<String, String>(),
            mutableListOf<Pair<String, String>>()
        )
    ) { (ids, responses), cur ->
        val (command, id, name) = "$cur ".split(" ");
        if (name.isNotEmpty()) {
            ids.set(id, name)
        }

        if (command != "Change") {
            responses.add(id to command)
        }

        ids to responses
    }

    return responses.map(toResult(ids)).toTypedArray()
}

val toResult: (MutableMap<String, String>) -> (Pair<String, String>) -> String =
    { ids ->
        {
            "${ids.get(it.first)}${commands.get(it.second)}"
        }
    }
