/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let count = {0:0}


    for ( let i=0; i< arr.length; i++) {
        let double = arr[i] * 2
        let half = arr[i] / 2
        
        if (arr[i] == 0) {
            count[0] ++
            if (count[0] > 1) return true
        }
        
        if (!count[half]) {
            count[half] = 1 
        }
        if (!count[double]) {
            count[double] = 1 
        }
        if (count[arr[i]] && arr[i] !== double && arr[i] !== half ) {
            return true
        }
        
    }
    return false
    
};

