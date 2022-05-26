// exports.isCharacterMatch = function(string1, string2) {
function isCharacterMatch(string1, string2){
    let str1Obj = {}
    let str2Obj = {}

    for(i = 0; i < string1.length; i++){
        if(str1Obj.hasOwnProperty(string1[i])){
            str1Obj[string1[i]] += 1
        }else {
            str1Obj[string1[i]] = 1
        }
    }
    for(j = 0; j < string2.length; j++){
        if(str2Obj.hasOwnProperty(string2[j])){
            str2Obj[string2[j]] += 1
        }else {
            str2Obj[string2[j]] = 1
        }
    } 
    str1Obj = Object.entries(str1Obj)
    str2Obj = Object.entries(str2Obj)
   
    str2Obj = str2Obj.sort(function (a,b){return a[1]-b[1]})
    str1Obj = str1Obj.sort(function (a,b){return a[1]-b[1]})
    let stringCheck = 0
    for(let k = 0; k < str1Obj.length; k++){
        if(str1Obj[k][1] === str2Obj[k][1]){
            stringCheck++
        }
    }
     return (stringCheck === str1Obj.length && str2Obj.length) ? true : false
    
};

console.log(isCharacterMatch('ddennnis', 'eddisnnnn'))