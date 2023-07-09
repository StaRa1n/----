## 一.数组
#### 1.二分查找
  1. 有序数列中比较目标值与中间值的大小(以更新中间值)
  2. 时间复杂度logn

#### 2.二分查找---重复元素
[力扣链接](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)
  1. 解题
     1. 寻找第一个 >=target的数(判断该数是否==target)
     2. 寻找的一个 >=target + 1 的数
     3. 结果为[left, right - 1]
  2. 关键在于寻找第一个>=target的数的函数设计(细节多)
     1. target小于等于nums[mid]更新右下标
     2. 直至left = right时找到第一个>=target的数
```

var searchLeft = function (nums, target) {
  let left = 0,
    right = nums.length
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (target <= nums[mid]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}
```
#### 3.移除元素--原地修改数组
  - 双指针
  - 找到target的下标并只更新fastIndex
  - 将fastIndex的值赋给slowIndex

#### 4.螺旋矩阵
[螺旋矩阵II](https://leetcode.cn/problems/spiral-matrix-ii/)
![](https://assets.leetcode.com/uploads/2020/11/13/spiraln.jpg)
 1. 二维数组的构建方法
     - 嵌套循环
     - Array.from()
       可以接受一个类似数组的对象，根据回调函数返回一个**新的**数组实例
       `const arr = Array.from(Array(m), () => Array(n))`
     - Array.fill()和map() 
       `const arr = Array(m).fill().map(() => Array(n))`
 2. 解题在于边界以及注意n为奇数时的处理
    1. 边界: 每层循环时不带上最后一位,下一层循环时x与y的设置
    2. n为奇数: 不在循环中,单独解决情况 

#### 5.位运算
[只出现一次的数字](https://leetcode.cn/problems/single-number/)



## 二.回溯
  三要素:
  - 确认返回值和参数
  - 确认终止条件
  - 遍历过程
  
  解题类型:
  - 组合：N个数里面按一定规则找出k个数的集合
  - 切割：一个字符串按一定规则有几种切割方式
  - 子集：一个N个数的集合里有多少符合条件的子集
  - 排列：N个数按一定规则全排列，有几种排列方式
  - 棋盘：N皇后，解数独等等