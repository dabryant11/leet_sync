/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

    var nextGreaterElement = function(nums1, nums2) {
    const map = {}
    const output = []
	
	// loop on the nums2 and map its element as keys and it index as values
    for (let k = 0; k < nums2.length; k++) {
	
	    // if current iteration element is their in map then continue
        if (map.hasOwnProperty(nums2[k])) {
            continue
			
		// else assign key as element and index as value
        } else {
            map[nums2[k]] = k
        }    
    } 
	
	// nested for loop to check the first greater value with the current value
    for (let i = 0; i < nums1.length; i++) { 
	
		// get index of current iteration element of nums1 array i.e {nums1[i]} from the map
        let nums1EleIndexInNums2Array = map[nums1[i]]
		
        let currMaxVal = -1
		
		// for loop to check all the elements in nums2 array 
        for (let j = nums1EleIndexInNums2Array; j < nums2.length; j++) {
            if (nums1[i] < nums2[j]) {
                currMaxVal = nums2[j]
                break 
            }    
        }
        output.push(currMaxVal)
    } 
    return output
};