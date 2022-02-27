const prompt = require('prompt-sync')();

console.log('Welcome to the password validator');
const password = prompt('Please enter your password ');

if (password.length >= 10){
  console.log('Your password is long enough')
} else {
  console.log('Your password is not long enough')
}
if (password.includes("!") || password.includes("@") || password.includes("#")|| password.includes("$") || password.includes("%") || password.includes("^")|| password.includes("&") || password.includes("*") || password.includes("(")|| password.includes(")")){
  console.log('Your password has special characters')
} else {
  console.log('Your password does not contain special characters')
}