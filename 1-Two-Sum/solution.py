def twoSum(nums, target):
    complement_to_index = {}
    for index, num in enumerate(nums):
        complement = target - num
        complement_to_index[complement] = index

    for index, num in enumerate(nums):
        if num in complement_to_index:
            if complement_to_index[num] != index:
                return [index, complement_to_index[num]]
