function divideClear(a, b) {
    return a % b == 0
  }
  
function divideClearList(a, b) {

result = a.filter(element => divideClear(element, b));
    return result;
}

function divideClearSortedList(a, b) {

    dividedClearList = divideClearList(a, b);

    if (dividedClearList.length == 0) {
        return [-1];
    }

    return dividedClearList.sort(ascending);
}
  
module.exports = {divideClear, divideClearList, divideClearSortedList};
