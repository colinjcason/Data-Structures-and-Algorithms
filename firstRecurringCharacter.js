// Given an array, return the first recurring character
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// less efficient version
function firstRecurringCharacter(input) {
    for(let i = 0; i < input.length; i++) {
      for(let j = i + 1; j < input.length; j++) {
        if(input[i] === input[j] || input[j] === input[j + 1]) {
          return input[j]
        }
      }
    }
    return undefined
  }
  
  // optimized version with has table
  function firstRecurringCharacter2(input) {
    let map = {}
    for(let i = 0; i < input.length; i++) {
      if(map[input[i]] !== undefined) {
        return input[i]
      }
      map[input[i]] = i
    }
    return undefined
  }
  
  
  firstRecurringCharacter([2,5,1,2,3,5,1,2,4])
  firstRecurringCharacter2([2,5,1,2,3,5,1,2,4])