package codingdojo

import Prime._

import utest._

object PrimeTest extends TestSuite{
  val tests = Tests{
    test("isPrime"){
      test("2") {
        assert(isPrime(2))
      }

      test("3") {
        assert(isPrime(3))
      }

      test("4") {
        assert(!isPrime(4))
      }

      test("5") {
        assert(isPrime(5))
      }
      test("6") {
        assert(!isPrime(6))
      }
      test("7") {
        assert(isPrime(7))
      }
    }
    test("sumOfThree"){
      test("[1, 2, 3]") {
        val expected = Seq(1 + 2 + 3)
        val actual = sumOfThree(IndexedSeq(1, 2, 3))
        assert(actual == expected)
      }
      test("[1, 2, 3, 4]") {
        val expected = Seq(1 + 2 + 3, 1 + 2 + 4, 1 + 3 + 4, 2 + 3 + 4)
        val actual = sumOfThree(IndexedSeq(1, 2, 3, 4))
        assert(actual == expected)
      }
    }
    test("solve"){
      test("[1,2,3,4]"){
        assert(solve(IndexedSeq(1, 2, 3, 4)) == 1)
      }
      test("[1,2,7,6,4]"){
        assert(solve(IndexedSeq(1, 2, 7, 6, 4)) == 4)
      }        
    }
  }
}
