
//.toUppercase() USE FOR UPPERCASES

const alphaList = 'abcdefghijklmnopqrstuvwxyz' 
const numList = '1234567890'
const specialList = '!@#$%^&*()'
let capital = true
let lower = true
let number = true
let special = true


document.getElementById('generate').addEventListener('click', () => {

  let passLength = prompt('Enter the desired password length. Minimum of 8 and maximum of 128');
  
  while (passLength < 8 || passLength > 128) {
  passLength = prompt('Length needs to be a minimum of 8 and a maximum of 128');
    if (passLength >= 8 && passLength <= 128) {
      confirm(`You chose ${passLength}`)
    }
  } 

  let capital = confirm('Do you want capital letters? Yes = Ok No = Cancel');
  if (capital === true ) {
    confirm("You clicked Ok.")
    let capital = alphaList.toUpperCase()
  } else {
    confirm('You clicked Cancel.')
  }

  let lower = confirm('Do you want lower case letters? Yes = Ok No = Cancel');
  if (lower === true) {
    confirm("You clicked Ok.")
    let lower = alphaList
  } else {
    confirm('You clicked Cancel.')
  }

  let number = confirm('Do you want numbers? Yes = Ok No = Cancel');
  if (number === true) {
    confirm("You clicked Ok.")
    let number = numList
  } else {
    confirm('You clicked Cancel.')
  }

  let special = confirm('Do you want special characters? Yes = Ok No = Cancel');
  if (special === true) {
    confirm("You clicked Ok.")
    let special = specialList
  } else {
    confirm('You clicked Cancel.')
  }


})

function generateNewPassword() {
  let password = "";

  var allowed = {};
  if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
  if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
  if (numbers) password += rando(allowed.numbers = "1234567890");
  if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

  for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

  document.getElementById("password").value = randoSequence(password).join("");
}


// let needPass = document.getElementById("password").innerHTML = password;


  




