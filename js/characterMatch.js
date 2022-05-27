exports.isCharacterMatch = function(string1, string2) {

    string1 = string1.toLowerCase().split('')
    string2 = string2.toLowerCase().split('')
    array1 = string1.sort(function (a,b){
        if (a > b)
            return -1;
        if (a < b)
            return 1;
        return 0;
        })
    array2 = string2.sort(function (a,b){
        if (a > b)
            return -1;
        if (a < b)
            return 1;
        return 0;
        })
    for(let i = 0; i < array1.length; i++){
        if(array1[i] != array2[i]){
            return false
        }
    }
    return true
};

