/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    // iterate check ops
    //+
    //c
    //d
    //other

    // iter record
    // return sum

    let record = []
    for ( let i=0; i< operations.length; i++) {
        if ( operations[i] === "+"){
            record.push(record[record.length -1] + record[record.length -2])
        }
        else if ( operations[i] === "D"){
            record.push(record[record.length -1] * 2)
        }
        else if ( operations[i] === "C"){
            record.pop()
        }
        else {
            record.push(parseInt(operations[i]))
        }
    }

    let ans =0
    for ( let num of record){
        ans += num
    }
    return ans 

    
};