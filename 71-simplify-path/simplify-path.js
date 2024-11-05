/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let ans = []
  let journey = path.split("/")

  for(let level of journey){
    if(!level || level === ".") continue
    else if(level === ".."){
        if(ans.length > 0) ans.pop()
    } else ans.push(level)
  }
    return "/" + ans.join("/")
};

