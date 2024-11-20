/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let map = new Map()

    for ( let domain of cpdomains){
        let splitD = domain.split(" ")
        let visits = splitD[0]
        let subD = splitD[1].split(".")
        while (subD.length > 0){
            let currD = subD.join(".")
            if(map.has(currD)){
                map.set(currD, Number(visits) + map.get(currD))
            } else map.set(currD, Number(visits))
            subD.shift()
        }
    }
    return Array.from(map,([key,value]) => `${value} ${key}`)
};