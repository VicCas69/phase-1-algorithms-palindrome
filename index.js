//Write a function that takes a string as an argument
//if the string is a Palidrome then return true, otherwise return false

function isPalindrome(word) {
  // Write your algorithm here
 
  let wordForward = [];
  let wordBackward = []; 
 
  for(let letter of word){
    wordForward.push(letter);
    wordBackward.unshift(letter)
  }
  
  return compareArrays(wordForward,wordBackward)
}

function compareArrays(arr1,arr2){
    for(let i =0; i<arr1.length;i++){
      if(arr1[i]===arr2[i]){
        return true
      }else{
        return false
      }
    }
}



/* 
  //Create two arrays to store each letter of the input word, one for normal spelling and one for backward spelling
  //Create two empty arrays to store both spelling (normak and backward)
  //Create a loop to iterate over the input word and push them to the arrays
  //create a separate function that takes two arrays as arguments and compare their elements
  //run the new function at the end of the main function (isPalidrome) to compare the two arrays that we created 

*/

/*
  Add written explanation of your solution here
*/

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
