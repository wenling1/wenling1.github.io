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

  function concat(ary, ...val) {
    let res = [...ary]
    for (let i = 0; i < val.length; i++) {
      if (Array.isArray(val[i])) {
        res.push(...val[i])
      } else {
        res.push(val[i])
      }
    }
    return res
  }

  function drop(ary, n = 1) {
    let res = []
    for (let i = n; i < ary.length; i++) {
      res.push(ary[i])
    }
    return res
  }

  function dropRight(ary, n = 1) {
    let res = []
    for (let i = 0; i < ary.length - n; i++) {
      res.push(ary[i])
    }
    return res
  }

  function fill(array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }

  function identity(value) {
    return value
  }

  function findIndex(array, predicate, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
        return i
      }
    }
    return -1
  }

  function findLastIndex(array, predicate, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (predicate(array[i], i, array)) {
        return i
      }
    }
    return -1
  }

  function flatten(ary) {
    return [].concat.apply([], ary)
  }

  function flattenDeep(ary) {
    while (ary.some(item => Array.isArray(item))) {
      ary = [].concat(...ary)
    }
    return ary
  }

  function flattenDepth(ary, depth = 1) {
    let s = 0
    while (ary.some(item => Array.isArray(item))) {
      ary = [].concat(...ary)
      s++
      if (s == depth) {
        break
      }
    }
    return ary
  }

  function fromPairs(pairs) {
    let res = {}
    for (let ary of pairs) {
      res[ary[0]] = ary[1]
    }
    return res
  }
  // join, last, lastIndexOf, indexOf, initial, reverse, sortedIndex, every, filter, find, toArray, max, maxBy, min, minBy, sum, sumBy
  function head(array) {
    return (array && array.length) ? array[0] : undefined
  }



  return {
    chunk,
    compact,
    concat,
    drop,
    dropRight,
    fill,
    findIndex,
    findLastIndex,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
  }
}()
