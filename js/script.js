// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }

}

// Function to generate random password based on user inputs
function generatePassword() {

  // Take user inputs and validate them
  var passwordLength = prompt("Enter the length of the password. Enter a number between 8 and 128");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You should enter a number between 8 and 128");
    return;
  }

  var lowerCase = confirm('Do you want lowercase characters in your password');
  var upperCase = confirm('Do you want upperCase characters in your password');
  var numeric = confirm('Do you want numeric characters in your password');
  var specialchar = confirm('Do you want special characters in your password');

  if (!lowerCase && !upperCase && !numeric && !specialchar) {
    alert("You should select at least one type of character set in your password");
    return;
  }

  // Define the four character sets
  const lowerCaseCharSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
  "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const upperCaseCharSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
  "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const numericCharSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialCharSet = [" ", "!", "\"", "#", "$", "%", "&", "'", "()", "*", "+", ",", "-", ".", "/", ":", ";",
  "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "]" ];

  //Store the selected character sets in an array.
  var selectedCharSets = [];
  var selectedCharSetsIterator = 0;
  if (lowerCase) {
    selectedCharSets[selectedCharSetsIterator] = lowerCaseCharSet;
    selectedCharSetsIterator ++;
  }
  if (upperCase) {
    selectedCharSets[selectedCharSetsIterator] = upperCaseCharSet;
    selectedCharSetsIterator ++;
  }
  if (numeric) {
    selectedCharSets[selectedCharSetsIterator] = numericCharSet;
    selectedCharSetsIterator ++;
  }
  if (specialchar) {
    selectedCharSets[selectedCharSetsIterator] = specialCharSet;
    selectedCharSetsIterator ++;
  }

  // Iterate over password length and randomly pick a character set and randomly pick a character
  // from the selected character set.
  var generatedPassword = [];
  for (let i = 0; i < passwordLength; i++) {
    var charSet = selectedCharSets[Math.floor(Math.random() * selectedCharSetsIterator)];
    var selectedChar = charSet[Math.floor(Math.random() * charSet.length)];
    generatedPassword[i] = selectedChar;
  }

  //Convert array to string and remove commas
  return generatedPassword.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
