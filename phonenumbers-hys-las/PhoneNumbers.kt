package com.dojo.phonenumbers

fun solution(phoneNumbers: List<String>) =
    !phoneNumbers.mapIndexed { i, prefixString ->
        isPrefixIn(phoneNumbers.splice(i), prefixString)
    }.any { it }

fun isPrefixIn(strings: List<String>, prefix: String) =
    strings.map { it.startsWith(prefix) }
        .any { it }

fun List<String>.splice(index: Int) =
    this.filterIndexed { i, _ -> i != index }
