/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for (let i =0;i<image.length;i++){
        let row = image[i]
        let left = 0
        let right = row.length -1
        while (left < right){
            [row[left],row[right]] = [row[right],row[left]] 
            right --
            left ++
        }
        for(let j=0;j<row.length;j++){
            if(row[j] === 1) row[j] = 0
            else row[j] = 1
        }
    }
    return image
};