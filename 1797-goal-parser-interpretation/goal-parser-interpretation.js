/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
 // declare answer string
    let ans = '';
    // declare prev and set to false
    let prev = false;
    // iterate over command string
    for(let i = 0; i < command.length; i++) {
        // get current char
        const char = command[i];
        // check if char is open bracket, if true set prev as true
        if(char === '(') prev = true;
        // check that char is closing bracket and prev is true, if true add "o" to answer
        else if(char === ')' && prev) ans += "o"
        // check if char is letter:
        else if(char !== ')' && char !== '(') {
            // if true set prev to false
            prev = false;
            // add letter to answer
            ans += char;
        }
    }
    // return answer
    return ans;
};