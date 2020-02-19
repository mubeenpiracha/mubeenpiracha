var fields = {}

document.addEventListener("DOMContentLoaded", function() {
 fields.firstName = document.getElementById('firstName');
 fields.lastName = document.getElementById('lastName');
 fields.email = document.getElementById('email');
 fields.address = document.getElementById('address');
 fields.houseNumber = document.getElementById('houseNumber');
 fields.country = document.getElementById('country');
})

function isNotEmpty(value) {
 if (value == null || typeof value == 'undefined' ) return false;
 return (value.length > 0);
}

function isNumber(num) {
 return (num.length > 0) && !isNaN(num);
}

function fieldValidation(field, validationFunction) {
 if (field == null) return false;

 let isFieldValid = validationFunction(field.value)
 if (!isFieldValid) {
 field.className = 'placeholderRed';
 } else {
 field.className = '';
 }

 return isFieldValid;
}

function isValid() {
 var valid = true; 
 valid &= fieldValidation(fields.firstName, isNotEmpty);
 valid &= fieldValidation(fields.lastName, isNotEmpty);
 valid &= fieldValidation(fields.address, isNotEmpty);
 valid &= fieldValidation(fields.country, isNotEmpty);
 valid &= fieldValidation(fields.houseNumber, isNumber);
 return valid;
}

class User {
 constructor(firstName, lastName, address, country, email) {
 this.firstName = firstName;
 this.lastName = lastName;
 this.address = address;
 this.country = country;
 this.email = email;
 }
}

function sendContact(){
 if (isValid()){
      let usr = new User(firstName.value, lastName.value, address.value, country.value, email.value);
      alert(`${usr.firstName} thanks for registering.`)
  }else{
  alert("There was an error")
  }
}
