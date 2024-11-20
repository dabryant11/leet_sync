/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let map = new Map()
    
    
    for(let domain of cpdomains){
        let newCPD =  domain.split(" ")
        let visits = newCPD[0]
        let fullDomain = newCPD[1]
        let subDomains = fullDomain.split(".")

            while(subDomains.length){
                let domain = subDomains.join(".")
                if(map.has(domain)){
                    let currDomainVisits = map.get(domain)
                    map.set(domain, Number(currDomainVisits) + Number(visits) )
                }
                else {
                    map.set(domain,Number(visits))
                }
                subDomains.shift()
            }
    }


    return Array.from(map,([key,value]) => `${value} ${key}`)
};