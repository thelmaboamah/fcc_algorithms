//Reverse the provided string.

function reverseString(str) {  
  return str.split("").reverse().join("");
}

reverseString("hello");

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

factorialize(5);

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

palindrome("eye");

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

findLongestWord("The quick brown fox jumped over the lazy dog")

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

//Return and array consisting of the largest numbers from each sub-array.
function largestOfFour(arr) {
  var sortedArr = [];
  var largestNum = [];
  
  for(var i = 0; i < arr.length; i++) {
      sortedArr.push(arr[i].sort(function(a,b) {
      return b - a;
    }));
    largestNum.push(sortedArr[i][0]);
  }

  return largestNum;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Check if a string ends with another string
function confirmEnding(str, target) {
    targetLen = target.length;
  subString =  str.substr(-(targetLen));
  
  if (subString === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");


//Repeat a given string num times. Return an empty string if num is not a positive number.
function repeatStringNumTimes(str, num) {
  if (num > 0) {
    return str.repeat(num);
  }  else {
    return "";
  }

}

//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

//Note that inserting the three dots to the end will add to the string length.

//However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
//repeatStringNumTimes("abc", 3);

function truncateString(str, num) {
    
  if (str. length <= num) {
    return str;
  } else if (num > 3) {
    return str.slice(0, num-3) + "...";
  } else {
    return str.slice(0, num) + "...";
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

