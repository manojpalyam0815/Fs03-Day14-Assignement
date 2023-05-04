const inpt = document.getElementsByTagName("input")[0];
var lowerCheck = /[a-z]/;
var upperCheck = /[A-Z]/;
var numberCheck = /\d/;
var symbolCheck= /[@!#$%^&*()\-+]/;
var lenCheck = /.{8,}/;

inpt.addEventListener("keyup", () => {
  var password = inpt.value;
  //console.log(password);
   var passCheck =
    lowerCheck.test(password) &&
    upperCheck.test(password) &&
    numberCheck.test(password) &&
    symbolCheck.test(password) &&
    lenCheck.test(password);
  console.log(passCheck)
  if (passCheck){
    inpt.style.borderColor = 'green';
    inpt.style.color="green";
  }
  else{
    inpt.style.borderColor = 'red';
    inpt.style.color="red";
  }
});