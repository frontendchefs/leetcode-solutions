/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const capsArr = [];
    const smallArr = [];
    
    word.split('').forEach((character, index) => {
        const charCode = word.charCodeAt(index);
        if (charCode >= 65 && charCode <= 90) {
            capsArr.push(character);
        } 
        
        if (charCode >= 97 && charCode <= 122) {
            smallArr.push(character);
        }
    });
    
    if (capsArr.length === word.length) {
        return true;
    } else if (smallArr.length === word.length) {
        return true;
    } else if (capsArr.length === 1) {
        if(word[0] === capsArr[0]) {
            return true;
        }
    }
    
    return false;
};