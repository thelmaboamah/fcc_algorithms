//Reverse the provided string.

function reverseString(str) {  
  return str.split("").reverse().join("");
}

/* Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/
function factorialize(num) {
  var total = 1; 
  for (var i = num; i>= 1; i--) {
    total*=i;
  }
  return total;
  
}

//Return true if the given string is a palindrome. Otherwise, return false.
function palindrome(str) {
  // Good luck!
  str = str.replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g,"").toLowerCase();
  var reverseStr = str.split("").reverse().join("");
  
  if (str === reverseStr) {
  	return true;
  } else {
  	return false;
  }
  
}

//Return the length of the longest word in the provided sentence.
function findLongestWord(str) {
  var strArray = str.split(" "); 
  var strLengthArray = [];
  
  for( var i = 0; i < strArray.length; i++) {
  	strLengthArray.push(strArray[i].length);
  }
  
  strLengthArray.sort(function(a,b) {
  	return b - a;
  });
  
  return strLengthArray[0]; 
}

//Return the provided string with the first letter of each word capitalized.

function titleCase(str) {
   str = str.toLowerCase().split(" ");
  var newArray = [];
  for (var i = 0; i < str.length; i++) {
    newArray.push(str[i].charAt(0).toUpperCase() + str[i].slice(1));
  }
  return newArray.join(" ");
}

titleCase("I'm a little tea pot");