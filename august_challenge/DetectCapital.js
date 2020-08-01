
/**
 * 
 * Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
 * 
 * 
 * 
 */

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