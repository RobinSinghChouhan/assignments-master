/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  trimmed_str = ""
  for(var i=0;i<str.length;i++)
  {
    chr1 = str[i]
    // if(chr1<'z'){
    //   console.log("AAAA")
    // }else{
    //   console.log("BBBB")
    // }

    if (chr1 >= 'a' && chr1 <= 'z')
    {
        trimmed_str+=chr1;
    }
  }
  // console.log("STR: "+trimmed_str)
  // console.log("REV: "+trimmed_str.split("").reverse().join(""))
  if(trimmed_str != trimmed_str.split("").reverse().join("")){
    return false;
  }
  return true;
}

console.log(isPalindrome("level"))

module.exports = isPalindrome;
