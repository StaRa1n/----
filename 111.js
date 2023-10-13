var firstMissingPositive = function(nums) {
    function swap(nums, i, j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1 && nums[i] > 0 && nums[i] < nums.length) {
            // 将数组的值与下标对应起来
            swap(nums, nums[i] - 1, i)
            // 继续判断当前位置是否相对应
            i--
        }
    }

    console.log(nums)

    for(let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1
        }
    }
    return nums.length + 1
};

firstMissingPositive([3,4,-1,1])