/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let map = new Map()

    for(let domain of cpdomains){
        let splitCurr = domain.split(" ")
        let visits = splitCurr[0]
        let subDomain = splitCurr[1].split(".")

        while(subDomain.length > 0){
            let domain = subDomain.join(".")
            if(map.has(domain)){
                map.set(domain,Number(visits) + map.get(domain))
            } else map.set(domain,Number(visits))

            subDomain.shift()
        }
    }
    return Array.from(map,([key,value]) =>`${value} ${key}` )
};