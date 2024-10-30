/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
   let ap = 0
   let wp = 0
   let num = 0

   while (wp<word.length && ap<abbr.length){
        if(!isNaN(abbr[ap])){
            num = num * 10 + Number(abbr[ap])
            if(num == 0) return false
            ap++
        } else if (num > 0){
            wp += num
            num = 0
        } else if (abbr[ap] === word[wp]){
            wp ++
            ap ++
        } else return false
   }

   return wp + num == word.length && ap == abbr.length


};
