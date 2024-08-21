/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // brute forse approch -> 
    return s.split("").sort().join() == t.split("").sort().join();
};