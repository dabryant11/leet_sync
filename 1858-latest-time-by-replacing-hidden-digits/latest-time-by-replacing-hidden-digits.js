/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    let timeArr = time.split("")

    for(let i=0;i<timeArr.length;i++){
        if(timeArr[i] === "?"){
            if(i === 0){
                timeArr[i] = (timeArr[1] === "?" || timeArr[1] <= "3") ? "2":  "1"
            }
            if(i === 1){
                timeArr[i] = (timeArr[0] === "2" ) ? "3":  "9"
            }
            if(i === 3)timeArr[3] = "5"
            if(i === 4)timeArr[4] = "9"
        }
    }

    return timeArr.join("")
};