// 二维数组的创建
// from() : const arr = Array.from(Array(m), () => Array(n))
// fill() : const arr = Array(m).fill().map(() => Array(n))

// 关键在与边界处理以及中间单个值的处理
var generateMatrix = function (n) {
  const nums = Array.from(Array(n), () => Array(n))
  let x = 0,
    y = 0
  let count = 1
  let loop = 0

  while (loop < n / 2) {
    for (; x < n - loop - 1; x++) {
      nums[y][x] = count++
    }

    for (; y < n - loop - 1; y++) {
      nums[y][x] = count++
    }

    for (; x >= loop + 1; x--) {
      nums[y][x] = count++
    }

    for (; y >= loop + 1; y--) {
      nums[y][x] = count++
    }

    x++
    y++
    loop++
  }
  if (n % 2 === 1) nums[Math.floor(n / 2)][Math.floor(n / 2)] = n * n
  return nums
}
console.log(generateMatrix(3))
