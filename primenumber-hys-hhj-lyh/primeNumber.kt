fun primeNumber(arr: IntArray) =
        picks(arr)
                .map { it.sum() }
                .count(isPrimeNumber)

fun picks(arr: IntArray): Array<IntArray> {
    val numbers = arrayListOf<IntArray>()
    for (i in 0..arr.size - 3) {
        for (j in (i + 1)..arr.size - 2) {
            for (k in (j + 1)..arr.size - 1) {
                numbers.add(intArrayOf(arr[i], arr[j], arr[k]))
            }
        }
    }
    return numbers.toTypedArray()
}

var isPrimeNumber: (Int) -> Boolean = { it ->
    var result = true
    for (i in 2 until it) {
        if (it % i == 0) {
            result = false
        }
    }
    result
}
