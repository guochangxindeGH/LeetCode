


function comb (arr1, arr2) {
  for (let i = 0; i < arr1.length - 1; i++) {
    for (let j = 1; j < arr1.length; j++) {
      if (arr1[i] > arr1[i + 1]) {
        [arr1[i], arr1[i + 1]] = [arr1[i + 1], arr1[i]]
      }
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < arr1[0]) {
      arr1.unshift(arr2[i])
      continue
    }
    for (let j = arr1.length - 1 ; j >= 0; j --) {
      if (arr2[i] > arr1[j]) {
        arr1.splice(j + 1, 0, arr2[i])
        break
      } else if (arr2[i] === arr1[j]) {
        break
      }
    }
  }
  return arr1
}

console.log(comb([8, 3, 4, 6], [3, 1, 6, 4, 9]))