/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
     let res = 0
    operations.forEach((ele)=>{
        if(ele === '--X' || ele === 'X--')
            res--;
         else 
            res++
        
    })
    return res
};