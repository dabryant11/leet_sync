var selfDividingNumbers = function (left, right) {
let Container =[]
let Container2= []

for(let j=left;j<=right;j++){
Container=[]
let numberToarrayString = j.toString().split('')
let arrayToNumber = numberToarrayString.map(str => {
return Number(str)
})
for(let i=0;i<arrayToNumber.length;i++){
if(j%arrayToNumber[i]===0){
Container.push(arrayToNumber[i])
if(Container.length===arrayToNumber.length){
Container2.push(j)
}
}
}
}
return Container2
};