var wenling1 = function () {
  function chunk(aryay, size = 1) {
    let result = []
    for (let i = 0; i < aryay.length; i += size) {
      let aryay2 = []
      for (let j = i; j < size + i && j < aryay.length; j++) {
        aryay2.push(aryay[j])
      }
      result.push(aryay2)
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

  function fill(aryay, value, start = 0, end = aryay.length) {
    for (let i = start; i < end; i++) {
      aryay[i] = value
    }
    return aryay
  }

  function identity(value) {
    return value
  }

  function findIndex(aryay, predicate, fromIndex = 0) {
    for (let i = fromIndex; i < aryay.length; i++) {
      if (predicate(aryay[i], i, aryay)) {
        return i
      }
    }
    return -1
  }

  function findLastIndex(aryay, predicate, fromIndex = aryay.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (predicate(aryay[i], i, aryay)) {
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

  function head(aryay) {
    return (aryay && aryay.length) ? aryay[0] : undefined
  }

  function initial(ary) {
    ary.pop()
    return ary
  }

  function last(ary) {
    return ary.pop()
  }

  function indexOf(ary, val, fromIndex = 0) {
    if (fromIndex < 0) {
      fromIndex += ary.length
    }
    for (let i = fromIndex; i < ary.length; i++) {
      if (ary[i] === val) return i
    }
    return -1
  }

  function lastIndexOf(ary, val, fromIndex = ary.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (ary[i] === val) return i
    }
    return -1
  }

  function join(aryay, separator = ',') {
    var res = ''
    for (var i = 0; i < aryay.length - 1; i++) {
      res += '' + aryay[i] + separator
    }
    res = res + aryay[aryay.length - 1]
    return res
  }

  function sortedIndex(aryay, value) {
    let l = 0
    let r = aryay.length
    while (r - l > 1) {
      let m = (l + r) >> 1
      if (m < value) {
        l = m
      } else {
        r = m
      }
    }
    return l
  }

  function reverse(aryay) {
    let l = 0
    let r = aryay.length - 1
    while (l < r) {
      var tmp = aryay[l]
      aryay[l] = aryay[r]
      aryay[r] = tmp
      l++
      r--
    }
    return aryay
  }

  function toArray(value) {
    let res = []
    for (let i in value) {
      res.push(value[i])
    }
    return res
  }

  function every(fn, predicate) {
    //   if (typeof fn == "function") {
    //     var arr = this
    //     for (var i = 0; i < arr.length; i++) {
    //       var result = fn.call(predicate, arr[i], i, arr)
    //       if (!result) return false
    //     }
    //     return true
    //   }
  }

  function filter(fn, predicate) {
    // if (typeof fn == "function") {
    //   var arr = this
    //   var temp = []
    //   for (var i = 0; i < arr.length; i++) {
    //     var result = fn.call(predicate, arr[i], i, arr)
    //     if (result) temp.push(arr[i])
    //   }
    //   return temp
    // }
  }


  function find(collection, predicate) {

  }

  function max(ary) {
    if (ary == null) return undefined
    let res = ary[0]
    for (let i = 1; i < ary.length; i++) {
      if (res < ary[i]) res = ary[i]
    }
    return res
  }

  function maxBy(ary, iteratee) {
    if (ary == null) return undefined
    let max = -Infinity
    let res
    if (typeof iteratee == "function") {
      for (let item of ary) {
        if (max < iteratee(item)) {
          max = iteratee(item)
          res = item
        }
      }
    } else {
      for (let item of ary) {
        if (max < item[iteratee]) {
          max = item[iteratee]
          res = item
        }
      }
    }
    return res
  }

  function min(ary) {
    if (ary == null) return undefined
    let res = ary[0]
    for (let i = 1; i < ary.length; i++) {
      if (res > ary[i]) res = ary[i]
    }
    return res
  }

  function minBy(ary, iteratee) {
    if (ary == null) return undefined
    let min = Infinity
    let res
    if (typeof iteratee == "function") {
      for (let item of ary) {
        if (min > iteratee(item)) {
          min = iteratee(item)
          res = item
        }
      }
    } else {
      for (let item of ary) {
        if (min > item[iteratee]) {
          min = item[iteratee]
          res = item
        }
      }
    }
    return res
  }

  function sum(ary) {
    let sum = 0
    for (let i = 0; i < ary.length; i++) {
      sum += ary[i]
    }
    return sum
  }

  function sumBy(ary, iteratee) {
    let sum = 0
    if (typeof iteratee == "function") {
      for (let item of ary) {
        sum += iteratee(item)
      }
    } else {
      for (let item of ary) {
        sum += item[iteratee]
      }
    }
    return sum
  }

  function curry() {

  }

  return {
    chunk,
    compact,
    concat,
    drop,
    dropRight,
    fill,
    identity,
    findIndex,
    findLastIndex,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    initial,
    last,
    indexOf,
    lastIndexOf,
    join,
    sortedIndex,
    reverse,
    toArray,
    every,
    filter,
    find,
    max,
    maxBy,
    min,
    minBy,
    sum,
    sumBy,
    curry,

  }
}()
