// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

}

var characterLenght = 8; 
var choiceArr = [];

var specialCharArr = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`]
var numberArr = [`1`,`2`, `3`,`4`, `5`, `6`, `7`, `8`, `9`, `0`]
var lowerCaseArr = []
var upperCaseArr = []

