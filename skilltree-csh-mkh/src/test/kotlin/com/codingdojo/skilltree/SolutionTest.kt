package com.codingdojo.skilltree

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(skill: String, skill_trees: Array<String>) =
        skill_trees
                .map { it.replace("""[^${skill}]""".toRegex(), "") }
                .count {
                    it.startsWith(skill.first()) || it.isBlank()
                }

class SolutionTest {

    @Test
    fun `Count available skill tree in a given skill trees`() {
        assertThat(solution("CBD", arrayOf("BACDE", "CBADF", "AECB", "BDA"))).isEqualTo(2)
        assertThat(solution("ABC", arrayOf("EFG"))).isEqualTo(1)
    }
}
