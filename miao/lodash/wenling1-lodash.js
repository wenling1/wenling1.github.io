var wenling1 = function () {

  function identity(val) {
    return val
  }

  function get(object, path, defaultValues) {
    var names = path.split('.')
    for (var name of names) {
      if (name in Object(object)) {
        object = object[name]
      } else
        return defaultValues
    }
    return object
  }

  function property(path) {
    // return bind(get, null, window, path)
    return function (obj) {
      return get(obj, path)
    }
  }

  function isMatch(obj, src) {
    for (let key in src) {
      if (src[key] && typeof src[key] === 'object') {
        if (!isMatch(obj[key], src[key])) {
          return false
        }
      } else {
        if (obj[key] !== src[key]) {
          return false
        }
      }
    }
    return true
  }

  function matches(src) {
    return bind(isMatch, null, window, src)
  }

  function matchesProperty(path, srcValue) {
    if (Array.isArray(path)) {
      srcValue = path[1]
      path = path[0]
    }
    return (obj) => {
      return obj[path] == srcValue
    }
  }

  function bind(f, thisArg, ...partials) {
    return function (...args) {
      var copy = partials.slice()
      for (var i = 0; i < copy.length; i++) {
        if (copy[i] === window) {
          copy[i] = args.shift()
        }
      }
      return f.call(thisArg, ...copy, ...args)
    }
  }

  function iteratee(predicate) {
    if (typeof predicate === 'function') {
      return predicate
    }
    if (typeof predicate === 'string') {
      return property(predicate)
    }
    if (Array.isArray(predicate)) {
      return matchesProperty(predicate)
    }
    if (typeof predicate === 'object') {
      return matches(predicate)
    }
  }

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

  function findIndex(array, predicate, fromIndex = 0) {
    let f = iteratee(predicate)
    for (var i = fromIndex; i < array.length; i++) {
      if (f(array[i])) {
        break
      }
    }
    return i
  }

  function findLastIndex(array, predicate, fromIndex = array.length - 1) {
    let f = iteratee(predicate)
    for (var i = fromIndex; i >= 0; i--) {
      if (f(array[i])) {
        break
      }
    }
    return i
  }

  function flatten(ary) {
    return [].concat.apply([], ary)
    // return [].concat(...ary)
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

  function head(array) {
    return (array && array.length) ? array[0] : undefined
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

  function join(array, separator = ',') {
    var res = ''
    for (var i = 0; i < array.length - 1; i++) {
      res += '' + array[i] + separator
    }
    res = res + array[array.length - 1]
    return res
  }

  function sortedIndex(array, value) {
    let l = 0
    let r = array.length
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

  function reverse(array) {
    let l = 0
    let r = array.length - 1
    while (l < r) {
      var tmp = array[l]
      array[l] = array[r]
      array[r] = tmp
      l++
      r--
    }
    return array
  }

  function toArray(value) {
    let res = []
    for (let i in value) {
      res.push(value[i])
    }
    return res
  }

  function every(ary, predicate) {
    predicate = iteratee(predicate)
    for (let i = 0; i < ary.length; i++) {
      if (!predicate(ary[i], i, ary)) {
        return false
      }
    }
    return true
  }

  function filter(ary, predicate) {
    predicate = iteratee(predicate)
    let res = []
    for (let i = 0; i < ary.length; i++) {
      if (predicate(ary[i])) {
        res.push(ary[i])
      }
    }
    return res
  }

  function find(collection, predicate, fromIndex = 0) {
    predicate = iteratee(predicate)
    for (let i = fromIndex; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i]
      }
    }
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

  function isArray(val) {
    return Object.prototype.toString.call(val) === '[object Array]'
  }

  function groupBy(array, predicate) {
    predicate = iteratee(predicate)
    var result = {}
    for (var i = 0; i < array.length; i++) {
      var key = predicate(array[i], i, array)
      if (!Array.isArray(result[key])) {
        result[key] = []
      }
      result[key].push(array[i])
    }
    return result
  }

  function difference(ary, ...args) {
    let res = []
    let values = [].concat(...args)
    for (let i = 0; i < ary.length; i++) {
      if (values.indexOf(ary[i]) == -1) {
        res.push(ary[i])
      }
    }
    return res
  }

  function differenceBy(ary, ...args) {
    if (Array.isArray(args[args.length - 1])) {
      return difference(ary, ...values)
    }
    let predicate = iteratee(args.pop())
    let values = [].concat(...args)

    // if (predicate(values) !== predicate(n)) {
    // }

    // return array.filter(e => values.every(value => predicate(value) != predicate(e)))
  }

  function ary(f, n = f.length) {
    return function (...args) {
      return f(...args.slice(0, n))
    }
  }

  function before(n, func) {
    var c = 0
    var result
    return function (...args) {
      if (c < n) {
        return result = func.call(this, ...args)
      } else {
        c++
        return result
      }
    }
  }

  function after(n, func) {
    var c = 0
    return function (...args) {
      c++
      if (c > n) {
        return func.call(this, ...args)
      }
    }
  }

  function flip(func) {
    return function (...args) {
      return func(...args.reverse())
    }
  }

  function negate(predicate) {
    return function (...args) {
      return !predicate(...args)
    }
  }

  function spread(func) {
    return function (ary) {
      return func.apply(this, ary)
    }
  }

  function forOwn(obj, iterator) {
    var hasOwn = Object.prototype.hasOwnProperty
    for (var key in obj) {
      if (hasOwn.call(obj, key)) {
        if (iterator(obj[key], key, obj) === false) {
          break
        }
      }
    }
    return obj
  }

  var a = 1103515245
  var c = 12345
  var m = 2 ** 31
  var x = 5
  function random() {
    return x = (a * x + c) % m
  }

  function map(collection, iteratee) {
    let result = []
    iteratee = iteratee(iteratee)
    if (Aray.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(iteratee(collection[i], i, collection))
      }
    }
    if (typeof collection === 'object') {
      for (let item in collection) {
        result.push(iteratee(collection[item], item, collection))
      }
    }
    return result
  }


  return {
    identity,
    get,
    property,
    matches,
    isMatch,
    matchesProperty,
    bind,
    iteratee,
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
    isArray,
    groupBy,
    difference,
    differenceBy,
    ary,
    before,
    after,
    flip,
    negate,
    spread,
    forOwn,
    random,
    map,
  }
}()
