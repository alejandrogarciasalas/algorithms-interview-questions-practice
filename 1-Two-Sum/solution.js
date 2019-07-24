function twoSum(nums, target) {
	const complementToIndex = {};
	for (let index = 0; index < nums.length; index++) {
		const complement = target - nums[index];
		complementToIndex[complement] = index;
	}

	for (let i = 0; i < nums.length; i++) {
		const curr = nums[i];
		if (complementToIndex[curr]) {
			if (complementToIndex[curr] !== i) { // it's not the same element, for example [1, 3, 4, 2] with target = 6
				return ([i, complementToIndex[curr]]);
			}
		}
	}
}

// Tests
twoSum([2, 7, 11, 15], 9) // -> [0, 1]

// edge case where you want to make sure the index is not the same
twoSum([1, 3, 4, 2], 6); // -> [2, 3]
