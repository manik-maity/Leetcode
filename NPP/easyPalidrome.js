const word = "MADAM";

function checkPlalindrome(str) {
    let i = 0;
    let palidrome = true;
    let n  = str.length;
    function checkBothLatter (i){
        if (i >= Math.ceil(n/2)) return;
        if (str[i] != str[n - i- 1]) {
            palidrome = false;
            return;
        }
        i++;
        checkBothLatter(i, n-i-1);
    }
    checkBothLatter(i);
    return palidrome;
}

console.log(checkPlalindrome(word));

