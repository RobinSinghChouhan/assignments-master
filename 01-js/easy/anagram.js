/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  isCharAvailable = false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if(str1.length == str2.length)
  {

    for(let i=0;i<str1.length;i++)
    {
      chr1 = str1[i]
      isCharAvailable = false;
      for(let j=0;j<str2.length;j++)
      {
        if(chr1 == str2[j])
        {
          isCharAvailable = true
          console.log("CHR1: "+chr1)
          break;
        }
      }
      if (!isCharAvailable)
      {
        return false
      }
    }
    return true;
  }else{
    return false;
  }
}

// console.log(isAnagram("hello","alleh"))

module.exports = isAnagram;
