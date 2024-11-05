/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let stack = []
  let directories = path.split("/")

  for (let dir of directories){
    if(!dir || dir === ".") continue
    else if(dir === "..") {
        if(stack.length>0) stack.pop()
    }
    else stack.push(dir)
  }

  return "/" + stack.join("/")


};

