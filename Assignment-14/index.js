document.getElementById("submit-button").addEventListener("click",() =>{

// get methods for the input text
let firstNameText = document.getElementById("firstName");
let lastNameText = document.getElementById("lastName");
let emailIDText = document.getElementById("emailID");
let contactNumberText = document.getElementById("contactNumber");
let pincodeText = document.getElementById("pincode");
let cardNumberText = document.getElementById("cardNumber");
let cardExpiryText = document.getElementById("cardExpiry");
let cvvText = document.getElementById("cvv");

// get methods for the error fields

let firstNameErrorText = document.getElementById("firstNameError");
let lastNameErrorText = document.getElementById("lastNameError");
let emailIDErrorText = document.getElementById("emailIDError");
let contactNumberErrorText = document.getElementById("contactNumberError");
let pincodeErrorText = document.getElementById("pincodeError");
let cardNumberErrorText = document.getElementById("cardNumberError");
let cardExpiryErrorText = document.getElementById("cardExpiryError");
let cvvErrorText = document.getElementById("cvvError");

// getting local date.....
let date = new Date();

// first name validation..... 
if (firstNameText.value == ""){
  firstNameErrorText.innerHTML = "First Name is required";
  firstNameErrorText.style.display = "block";
}
else if(!(/^[a-zA-Z]{1,30}$/).test(firstNameText.value)){
  firstNameErrorText.innerHTML = "First Name is not valid";
  firstNameErrorText.style.display = "block";
}
else{
  firstNameErrorText.innerHTML = "";
}
// last name validation......
if (lastNameText.value == ""){
  lastNameErrorText.innerHTML = "Last Name is required";
  lastNameErrorText.style.display = "block";
}
else if(!(/^[a-zA-Z]{1,30}$/).test(lastNameText.value)){
  lastNameErrorText.innerHTML = "Last Name is not valid";
  lastNameErrorText.style.display = "block";
}
else{
lastNameErrorText.innerHTML = "";
}

// email ID validation.....
if (emailIDText.value == ""){
  emailIDErrorText.innerHTML = "Email Address is required";
  emailIDErrorText.style.display = "block";
}
else if(!(/^(?=.{1,50}$)[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/i).test(emailIDText.value)){
  emailIDErrorText.innerHTML = "Email Address is not valid";
  emailIDErrorText.style.display = "block";
}
else{
  emailIDErrorText.innerHTML = "";
}

// Contact number validation......
if (contactNumberText.value == ""){
  contactNumberErrorText.innerHTML = "Contact Number is required";
  contactNumberErrorText.style.display = "block";
}
else if(!(/^[0-9]\d{9}$/).test(contactNumberText.value)){
  contactNumberErrorText.innerHTML = "Contact Number is not valid";
  contactNumberErrorText.style.display = "block";
}
else{
  contactNumberErrorText.innerHTML = "";
}

//  Pincode Validation.......
if (pincodeText.value == ""){
  pincodeErrorText.innerHTML = "PIN Code is required";
  pincodeErrorText.style.display = "block";
}
else if(!(/^[0-9]\d{5}$/).test(pincodeText.value)){
  pincodeErrorText.innerHTML = "PIN Code is not valid";
  pincodeErrorText.style.display = "block";
}
else{
  pincodeErrorText.innerHTML = "";
}

// Card Number Validation......
if (cardNumberText.value == ""){
  cardNumberErrorText.innerHTML = "Card Number is required";
  cardNumberErrorText.style.display = "block";
}
else if(!(/^[0-9]\d{15}$/).test(cardNumberText.value)){
  cardNumberErrorText.innerHTML = "Card Number is not valid";
  cardNumberErrorText.style.display = "block";
}
else{
  cardNumberErrorText.innerHTML = "";
}

// Card Expiry Validation......
if (cardExpiryText.value == ""){
  cardExpiryErrorText.innerHTML = "Card Expiry is required";
  cardExpiryErrorText.style.display = "block";
}
else if(!(/^[0-9]\d{3}$/).test(cardExpiryText.value) || cardExpiryText.value < date.getFullYear() ){
  cardExpiryErrorText.innerHTML = "Card Expiry is not valid";
  cardExpiryErrorText.style.display = "block";
}
else{
  cardExpiryErrorText.innerHTML = "";
}

// Card CVV Validation......
if (cvvText.value == ""){
  cvvErrorText.innerHTML = "CVV is required";
  cvvErrorText.style.display = "block";
}
else if(!(/^[0-9]\d{2}$/).test(cvvText.value)){
  cvvErrorText.innerHTML = "CVV is not valid";
  cvvErrorText.style.display = "block";
}
else{
  cvvErrorText.innerHTML = "";
}

});
