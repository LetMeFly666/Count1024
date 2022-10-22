/**
 * @Author: zRain
 * @Date: 2022-10-22 10:41:20
 * @LastEditors: zRains
 * @LastEditTime: 2022-10-22 10:41:20
 */

/**
 * permutation
 * @param {number[]} arr
 * @param {number} [arr_len]
 * @param {string[][] | number[][]} [res]
 * @returns {string[][] | number[][]}
 */
function permutation(arr, arr_len = arr.length, res = []) {
  const swap = (_a, _b) => ([arr[_a], arr[_b]] = [arr[_b], arr[_a]])

  if (arr_len === 1) res.push([...arr])

  for (let i = 0; i < arr_len; i++) {
    permutation(arr, arr_len - 1, res)
    arr_len % 2 === 1 ? swap(0, arr_len - 1) : swap(i, arr_len - 1)
  }

  return res
}

/**
 * combination
 * @param {number[]} arr
 * @param {number} amount
 * @return {string[][] | number[][]}
 */
function combination(arr, amount) {
  let result = [],
    path = []

  /** @param {number} i */
  const recur = (i) => {
    if (path.length === amount) {
      result.push([...path])
      return
    }

    for (; i < arr.length; i++) {
      path.push(arr[i])
      recur(i + 1)
      path.pop()
    }
  }

  recur(0)

  return result
}

/**
 * group
 * @param {number[]} arr
 * @param {number} [amount]
 * @return {string[][] | number[][]}
 */
function group(arr, amount = arr.length) {
  const res = []

  combination(arr, amount).forEach((c) => res.push(...permutation(c)))

  return res
}

/**
 * unique
 * @param {any[]} arr
 * @param {boolean} [isNum]
 */
function unique(arr, isNum = true) {
  const set = new Set()
  arr.forEach((a) => set.add(a.join('#')))
  return [...set.values()].map((a) => a.split('#').map((v) => (isNum ? parseInt(v) : v)))
}

/**
 * calc
 * @param {number} lsh
 * @param {string} symbol
 * @param {number} rsh
 * @returns {number}
 */
function calc(lsh, symbol, rsh) {
  let result = 0
  const isOverflow = (num) => num > 0x7fffffff || num < -0x7fffffff

  switch (symbol) {
    case '+':
    case '-':
      result = symbol === '+' ? lsh + rsh : lsh - rsh
      if (isOverflow(result)) throw new Error('Add/Sub operation overflow occurs')
      return result

    case '*':
      result = lsh * rsh
      if (isOverflow(result)) throw new Error('Multiply operation overflow occurs')
      return result

    case '**':
      result = Math.pow(lsh, rsh)
      if (isOverflow(result)) throw new Error('Exponential operation overflow occurs')
      return result

    case '//':
      result = Math.floor(lsh, rsh)
      if (isOverflow(result)) throw new Error('Divide operation overflow occurs')
      return result

    case '>>':
      result = lsh >> Math.min(31, rsh)
      return result

    case '<<':
      if (Math.clz32(lsh) < rsh) throw new Error('Right shifted operation overflow occurs')
      return lsh << rsh

    case '%':
      return lsh % rsh

    case '|':
      return lsh | rsh

    case '&':
      return lsh & rsh

    case '^':
      return lsh ^ rsh

    default:
      throw new Error('Invalid symbol or SHR')
  }
}

/**
 * calcAll
 * @param {number[]} nums
 * @param {string[]} syms
 */
function calcAll(nums, syms) {
  let n1 = nums[0]
  for (let i = 0; i < 3; i++) {
    try {
      n1 = calc(n1, syms[i], nums[i + 1])
    } catch (error) {
      // If an error occurs, it returns a value other than 1024
      return 0
    }
  }
  return n1
}

/**
 * mapResolver
 * @param {Map<number | string, number>} map
 * @param {number} max
 */
const mapResolver = (map, max) => {
  const res = []
  map.forEach((v, k) => void res.push(...Array(Math.min(max, v)).fill(k)))
  return res
}

/**
 * $1024$
 * @param {number[]} numCards
 * @param {string[]} symCards
 */
function $1024$(numCards, symCards) {
  const result = []
  const [cardMap, symbolMap] = [numCards, symCards].map((a) => {
    let map = new Map()
    a.forEach((c) => {
      let v = !isNaN(c) ? Number.parseInt(c) : c
      map.set(v, 1 + (map.get(v) || 0))
    })
    return map
  })

  const numbers = mapResolver(cardMap, 4),
    symbols = mapResolver(symbolMap, 3)

  if (numbers.length < 4 || symbols < 3) throw new Error('Not enough number cards or symbol cards')

  const numGroups = unique(group(numbers, 4)),
    symGroups = unique(group(symbols, 3), false)

  for (n of numGroups) {
    for (s of symGroups) {
      if (calcAll(n, s) === 1024) {
        result.push(`(((${n[0]} ${s[0]} ${n[1]}) ${s[1]} ${n[2]}) ${s[2]} ${n[3]})`)
      }
    }
  }

  return result
}
