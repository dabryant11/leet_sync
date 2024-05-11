var numIdenticalPairs = function(nums) {
    let frequencyMap = {}
    let count = 0;

    // Count the frequency of each number
    for (let num of nums) {
        if (!frequencyMap[num]) frequencyMap[num] = 0
        frequencyMap[num] ++
    }

    // Calculate the number of identical pairs
    for (let freq of Object.values(frequencyMap)) {
        count += (freq * (freq - 1)) / 2; // Formula for counting pairs
    }

    return count;
};
