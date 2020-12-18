// merge two sorted arrays into one sorted array

function mergeSortedArrays(arr1, arr2) {
    const result = []
    let counter = 0
    let index1 = 0
    let index2 = 0
  
    while(counter < arr1.length + arr2.length) {
      const isArr1Empty = index1 >= arr1.length
      const isArr2Empty = index2 >= arr2.length
  
      if(!isArr1Empty && isArr2Empty || arr1[index1] < arr2[index2]) {
        result[counter] = arr1[index1]
        index1++
      } else {
        result[counter] = arr2[index2]
        index2++
      }
      counter++
    }
    return result
  }
  
  
  mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])