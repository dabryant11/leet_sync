/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = []
    let splitSplat = path.split("/")

    for(let path of splitSplat){
        
        if(path === "..") {
            if (stack.length > 0) stack.pop()
        }
        else if(path !== "" && path !== ".") stack.push(path)
    }
    return "/"+ stack.join("/")
};