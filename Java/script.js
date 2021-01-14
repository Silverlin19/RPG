// Assignment code here
var uChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
var lChar = "abcdefghijklmnopqrstuvwxyz" ;
var num = 123456789 ;
var sym = "!@#$%^&*()_+-=~<>;./,"

//Condition value
let c = 0

document.getElementById("generate").onclick= function passwordGenerator() 
{

//Password length section
function firstCheck(passQ1) {

var passQ1 = window.prompt("how many characters long do you want your password to be? (between 8 and 128)")

if (passQ1 >= 8 & passQ1 <= 128) {

return passQ1

} else {

window.alert("Incorrect value")
firstCheck()
} }


passwordLength=firstCheck() 

function charOptions() {

  window.alert("Choose atleast one character type")

let lowerChar = window.confirm("Would you like to use lowercase characters")


let upperChar = window.confirm("Would you like to use UPPERCASE characters")


let numberChar = window.confirm("Would you like to use Numbers i.e. 123....")


let specialChar = window.confirm("Would you like to use special characters i.e.")

if (lowerChar || upperChar || numberChar || specialChar) {


return [lowerChar, upperChar, numberChar, specialChar ] } else {
  charOptions()
}



}

let results = charOptions()
console.log(results)

lowerChar = results[0]
upperChar = results[1]
numberChar = results[2]
specialChar = results[3]


//Dont touch any of this dum dum 

var characters = ""

if (lowerChar==true){

characters += lChar
  
}
if (upperChar==true){

  characters += uChar

}
if (numberChar==true){

  characters += num

}
if (specialChar==true){

  characters += sym

}

console.log(characters)

function password(l,characters){


var pwd = ""

for (var i=0 ; i<l; i++) {


  pwd += characters.charAt(Math.floor(Math.random() * characters.length ))
  
}
  return pwd;


}
pwd = password(passwordLength,characters)
document.getElementById("password").textContent = pwd

}

