/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const srcSet = []
  const dests = []
  for (const [src, dest] of paths) {
    srcSet.push(src)
    dests.push(dest)
  }
  for (const dest of dests) {
    if (!srcSet.includes(dest)) {
      return dest
    }
  }
}