import org.assertj.core.api.Assertions.assertThat
import kotlin.test.Test

internal class primeNumberTest {
    @Test
    fun `소수 만들기 테스트`() {
        assertThat(primeNumber(intArrayOf(1, 2, 3, 4))).isEqualTo(1)
        assertThat(primeNumber(intArrayOf(1, 2, 7, 6, 4))).isEqualTo(4)
    }

    @Test
    fun `소수 인지 확인하는 함수 테스트`() {
        assertThat(isPrimeNumber(1)).isEqualTo(true)
        assertThat(isPrimeNumber(2)).isEqualTo(true)
        assertThat(isPrimeNumber(4)).isEqualTo(false)
        assertThat(isPrimeNumber(9)).isEqualTo(false)
        assertThat(isPrimeNumber(11)).isEqualTo(true)
    }

    @Test
    fun picks() {
        assertThat(picks(intArrayOf(1, 2, 3, 4))).isEqualTo(
                arrayOf(
                        intArrayOf(1, 2, 3),
                        intArrayOf(1, 2, 4),
                        intArrayOf(1, 3, 4),
                        intArrayOf(2, 3, 4)
                )
        )

        assertThat(picks(intArrayOf(1, 2, 3, 4, 5))).isEqualTo(
                arrayOf(
                        intArrayOf(1, 2, 3),
                        intArrayOf(1, 2, 4),
                        intArrayOf(1, 2, 5),
                        intArrayOf(1, 3, 4),
                        intArrayOf(1, 3, 5),
                        intArrayOf(1, 4, 5),
                        intArrayOf(2, 3, 4),
                        intArrayOf(2, 3, 5),
                        intArrayOf(2, 4, 5),
                        intArrayOf(3, 4, 5)
                )
        )
    }
}