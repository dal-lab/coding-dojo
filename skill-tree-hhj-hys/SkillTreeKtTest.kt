package skillTree

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

internal class SkillTreeKtTest {
    @Test
    fun `Skill Tree`() {
        assertThat(
                validSkillTreesCount(
                        "CBD",
                        arrayOf("BACDE", "CBADF", "AECB", "BDA")
                )
        )
                .isEqualTo(2)
    }

    @Test
    fun `isPossibleSkillTreeTest`() {
        assertThat(isPossibleSkillTree("CBD", "BCD")).isEqualTo(false)
        assertThat(isPossibleSkillTree("CBD", "CBD")).isEqualTo(true)
        assertThat(isPossibleSkillTree("CBD", "CB")).isEqualTo(true)
        assertThat(isPossibleSkillTree("CBD", "BD")).isEqualTo(false)
        assertThat(isPossibleSkillTree("CBDE", "CE")).isEqualTo(false)
        assertThat(isPossibleSkillTree("CBDE", "")).isEqualTo(true)

    }
}