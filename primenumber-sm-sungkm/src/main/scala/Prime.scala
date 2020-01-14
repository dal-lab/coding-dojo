package codingdojo

object Prime {

  def primes(n: Int): Set[Int] = (2 to n filter isPrime).toSet

  def isPrime(n: Int): Boolean = !primes(math.sqrt(n).toInt).exists(n % _ == 0)

  def sumOfThree(nums: IndexedSeq[Int]): Seq[Int] = for {
    i <- 0 until nums.size - 2
    j <- i + 1 until nums.size -1
    k <- j + 1 until nums.size
  } yield nums(i) + nums(j) + nums(k)

  def solve(nums: IndexedSeq[Int]): Int = sumOfThree(nums) count isPrime

  def solution(nums: Vector[Int]): Int = solve(nums)
}
