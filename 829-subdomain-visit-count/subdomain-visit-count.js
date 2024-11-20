/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let map = new Map()

    for ( let domain of cpdomains){
        let [count, fullDomain] = domain.split(" ")
        let subDomains = fullDomain.split(".")

        while (subDomains.length){
            let domain = subDomains.join(".")
            if(map.has(domain)){
                let curr = map.get(domain) 
                map.set(domain, Number(curr)+ Number(count))
            } else {
                map.set(domain, Number(count))
            }
                subDomains.shift()
        }
    }

    return Array.from(map, ([key, value]) => `${value} ${key}`)

};