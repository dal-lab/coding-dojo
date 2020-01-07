package com.codingdojo.skilltree

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(skill: String, skill_trees: Array<String>): Int {
    val subsets = createSubset(skill)
    return skill_trees.asSequence()
            .map { processFiltering(skill, it) }
            .count {
                subsets.contains(it) || it.isBlank()
            }
}

fun processFiltering(skill: String, skill_tree: String) = skill_tree.filter { skill.contains(it) }

tailrec fun createSubset(skill: String, subSet: List<String> = emptyList()): List<String> =
        when {
            skill.isEmpty() -> subSet
            else -> createSubset(skill.dropLast(1), subSet + skill)
        }

class SolutionTest {

    @Test
    fun `Count available skill tree in a given skill trees`() {
        assertThat(solution("CBD", arrayOf<String>("BACDE", "CBADF", "AECB", "BDA"))).isEqualTo(2)
        assertThat(solution("ABC", arrayOf<String>("EFG"))).isEqualTo(1)
    }

    @Test
    fun `Filter a skill in skill tree`() {
        assertThat(processFiltering("CBD", "BACDE")).isEqualTo("BCD");
    }

    @Test
    fun `Create subset of skills`() {
        assertThat(createSubset("CBD", emptyList())).isEqualTo(listOf<String>("CBD", "CB", "C"))
    }
}
