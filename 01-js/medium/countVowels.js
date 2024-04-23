/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str = str.toLowerCase();
    count = 0;
    for(let i=0;i<str.length;i++)
    {
      switch(str[i])
      {
        case 'a':count+=1;
        break;
        case 'e':count+=1;
        break;
        case 'i':count+=1;
        break;
        case 'o':count+=1;
        break;
        case 'u':count+=1;
        break; 
      }
    }
    return count;
}

module.exports = countVowels;