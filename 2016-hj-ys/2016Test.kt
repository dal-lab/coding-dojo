package `2016`
import com.hyejineee.*
import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

class `2016Test` {
    @Test
    fun _2016Test() {
        assertThat(_2016(1, 7)).isEqualTo("THU")
        assertThat(_2016(3, 1)).isEqualTo("TUE")
        assertThat(_2016(5, 24)).isEqualTo("TUE")
        assertThat(_2016(12, 30)).isEqualTo("FRI")
    }

    @Test
    fun getDaysOfMonthTest() {
        assertThat(getDaysOfMonth(1)).isEqualTo(31)
        assertThat(getDaysOfMonth(2)).isEqualTo(29)
        assertThat(getDaysOfMonth(3)).isEqualTo(31)
        assertThat(getDaysOfMonth(10)).isEqualTo(31)
        assertThat(getDaysOfMonth(11)).isEqualTo(30)
    }
}