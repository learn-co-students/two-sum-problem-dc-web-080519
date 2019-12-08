function bruteForceTwoSum(numArray, sum) {
  let matching = []

  for (let i = 0; i < numArray.length - 1; i++) {
    for (var j = i + 1; j < numArray.length; j++) {
      if (numArray[i] + numArray[j] === sum) {
        matching.push([numArray[i], numArray[j]])
      }
    }
  }

  return matching
}

function binarySearchTwoSum(numArray, sum) {
  let matching = [];
  numArray.sort()

  for (let i = 0; i < numArray.length; i++) {
    let target = sum - numArray[i]
    let searchNums = numArray.slice(i + 1)
    let mid = Math.floor(searchNums.length/2)
    while (mid) {
      if (searchNums[mid] === target) {
        matching.push( [searchNums[mid], numArray[i]] )
      } else if (searchNums[mid] < target) {
        searchNums = searchNums.slice(searchNums[mid])
      }
    }
  }

  return matching;
}