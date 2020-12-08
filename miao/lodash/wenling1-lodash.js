var wenling1 = function () {
  function chunk(array, size = 1) {
    let result = []
    for (let i = 0; i < array.length; i += size) {
      let array2 = []
      for (let j = i; j < size + i && j < array.length; j++) {
        array2.push(array[j])
      }
      result.push(array2)
    }
    return result
  }

  function compact(ary) {
    var result = []
    for (let i = 0; i < ary.length; i++) {
      if (ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  }

}
