/* Coding Challenge
Decrypt string
Here’s a simple strategy to encode a message: before each character of the message, add a digit and series of other characters.
The digit  should correspond to the number of characters that will precede the message’s actual, meaningful character.
For example, the word “hey” could be coded with “0h2abe1zy”. To read the message, you would:
skip 0, find the ‘h’
skip 2 (‘a’ and ‘b’), find ‘e’
skip 1 (‘z’), find ‘y’
Other examples:
‘2xyz’ would be decoded as just ‘z’
‘0h2zyi2467’ would be decoded as ‘hi7’
Write a function named “plaintext”, which takes a single parameter of a string encoded in this format. It should return the decoded
word in string form. Demonstrate good coding practices (clear variable names, comments, etc).
You may assume that coded strings are always legally encoded with this system. You may also assume that the digit for the number
of characters to skip will just be a single digit, not a multi-digit number (that is, you’ll never need to skip more than 9 characters)—but
we welcome solutions that can handle multi-digit characters to skip. */

function plaintext(encryptedStr) {
  var encryptedArray = encryptedStr.split(""); //convert string to array
  var digit; //value of the digit used for encryption
  var digitIndex = 0;//initial digit will be at the 0th index of the array
  var decryptedArray = [];
  var decryptedStr;
  
  for(var i = digitIndex; i < encryptedArray.length; i++) {

    if (i === digitIndex) {
      digit = parseInt(encryptedArray[i]); //convert digit from str to int
      decryptedArray.push(encryptedArray[i + digit + 1]);//index value of letter of decrypted word will be 1 higher than the digit at i is from i.
      digitIndex = (i + digit + 2); //the new index will be the one following the decrypted letter
    }
    
  }
  decryptedStr = decryptedArray.join("");
  return decryptedStr;
}

plaintext("1ph2zye1pl3xyzl0o"); //gives you "hello"
plaintext("9ldhsnwkfpc2apa4ppppt"); //gives you "cat"


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

//Chunk Monkey: Write a function that splits an array into group the length of a size and returns a 2-d array
function chunkArrayInGroups(arr, size) {
      var newArray = [];
    for (var i = 0; i <= arr.length - 1; i+=size) {
    newArray.push((arr.slice(i, i+size)));
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

//Return the remaining elements of an array after chopping off n elements from the head.
function slasher(arr, howMany) {
  // it doesn't always pay to be first
    arr = arr.slice(howMany);
  return arr;
}

slasher([1, 2, 3], 2);
