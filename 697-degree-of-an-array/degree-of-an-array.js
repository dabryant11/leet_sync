/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    // using hash maps
	
    let num_counts = new Map();  // hash map to keep count of each number
    let degree = 0;              // initalize degree to 0
    
    let first_seen = new Map();  // hash map keep track of first time we see the number
    let min_length = 0;
    
    for (let i= 0; i<= nums.length; i++){    // loop through the numbers 
        if(!first_seen.has(nums[i])){   
            first_seen.set(nums[i], i);  // mark the index of first occurance
        }
        
        // key: current number
        // value: count of number( if nums is in map we get the current count or if not count equals 0 then we increment + 1)
         num_counts.set(nums[i], (num_counts.has(nums[i]) ? num_counts.get(nums[i]) : 0) + 1)  
        
        // if count > degree then we update the degree
     if(num_counts.get(nums[i]) > degree){
         degree = num_counts.get(nums[i]);
         min_length = i - first_seen.get(nums[i]) + 1;     // subtract occurance (max) from first occurance to see the 
     } else if (num_counts.get(nums[i]) === degree){      // if number is equal to degree
            min_length = Math.min(min_length, i - first_seen.get(nums[i])+ 1); 
        }
        
    }
    return min_length;
};