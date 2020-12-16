//Take collection of numbers and find pair which sum are equal to a given sum. For example;
// [1, 2, 3, 9] Sum = 8 should return false. There is no pair of number that would return the given sum
// [1, 2, 4, 4] Sum = 8 should return true. 4 + 4  = 8.

function hasPairWithSum(arr, sum) {
    for(let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++ ) {
        if(arr[i] + arr[j] === sum) {
          return true
        }
      }
    }
    return false
  }
  // O(a * b)
  
  function hasPairWithSumTwo(arr, sum) {
    let set = new Set()
    for(let i = 0; i < arr.length; i++) {
      if(set.has(arr[i])) {
        return true
      }
      set.add(sum - arr[i])
    }
    return false
  }
  
  
  hasPairWithSum([6,4,3,2,1,7], 9) // True
  hasPairWithSum([6,4,1,7], 9) // False
  
  hasPairWithSumTwo([6,4,3,2,1,7], 9) // True
  hasPairWithSumTwo([6,4,1,7], 9) // False