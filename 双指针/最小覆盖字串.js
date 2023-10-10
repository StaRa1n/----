var minWindow = function (s, t) {
  let minStr = ''
  const map = new Map()

  let right = 0,
    left = 0

  Array.from(t).forEach((i) => {
    const count = map.get(i) || 0
    map.set(i, count + 1)
  })

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[right])) {
      const count = map.get(s[right])
      map.set(s[right], count - 1)
    }

    // 找到符合子字串时,使left+1寻找更小的字符串
    while (Array.from(map.values()).every((value) => value <= 0)) {
      // 储存符合条件字符串
      const currentStr = s.substring(left, right + 1)
      if (minStr === '' || currentStr.length < minStr.length) {
        minStr = currentStr
      }

      if (map.has(s[left])) {
        const count = map.get(s[left])
        map.set(s[left], count + 1)
      }
      left++
    }
    right++
  }

  return minStr
}

console.log(minWindow('ABV', 'A'))
