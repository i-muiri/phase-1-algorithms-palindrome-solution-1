function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord =word.split('').reverse().join('')
  if(word === reverseWord)
  {
    return true;
  }
  else
      return false;
}
/* 
  Add your pseudocode here
*///split word to array
//need to reverse the word
//an else if condition is necessary
//return true or false if they match

/*
  Add written explanation of your solution here
*/
//in the function palindrome there is a variable reverseWord
//used the argument in the function and split it into an array
//i reversed the new array
//joined it into a string
//compared the argument and the reverse

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");

  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;