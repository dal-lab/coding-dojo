package deletepairs.mgh.csh.lyh

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

/*
* # 해결법
1. 문자열의 길이 만큼 순회한다.
2. 현재 위치와 다음 위치의 문자를 비교한다.
 2-1. 현재 위치와 다음 위치의 문자가 같으면 문자열에서 두 문자를 제거 후 현재 위치 이전으로 돌아간다.
 2-2. 현재 위치와 다음 위치의 문자가 다르면 다음 위치로 이동해서 비교한다.
3. 문자열이 모두 제거되면 1을 반환한다.
4. 문자열의 마지막 위치까지 도달 후 문자열이 남아있으면 0을 반환한다.
* */
fun String.isEnd(index: Int) = length - 1 == index

tailrec fun solution(s: String, index: Int): Int =
        when {
            s.isEmpty() -> 1
            s.isEnd(index) -> 0
            s[index] == s[index + 1] -> solution(s.replaceRange(index..index + 1, ""), if (index - 1 < 0) 0 else index - 1)
            else -> solution(s, index + 1)
        }

internal class DeletePairsTest {
    @Test
    fun `Delete pairs`() {
        assertThat(solution("baabaa", 0)).isEqualTo(1)
        assertThat(solution("cdcd", 0)).isEqualTo(0)
    }
}
