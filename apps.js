'use strict'

const button = document.querySelector('button');
const paragraph = document.querySelector('p');



function updateButton() {
  if (button.value === 'What is the best Christmas movie?') {
    button.value = 'What is the best Christmas movie?';
    paragraph.textContent = 'Also Christmas Vacation.';
  }
  else {
    button.value = 'What is the best Christmas movie?';
    paragraph.textContent = 'Christmas Vacation.';
  }
}

button.addEventListener('click', updateButton);


let userName = prompt("What is your name?");

let currentHour = prompt("What is the current hour of the day (1-24)");
let greeting = "";

if(currentHour >= 17 && currentHour <= 24){
    greeting = "Good Evening"; 
} else if(currentHour >= 12 && currentHour <= 16){
    greeting = "Good Afternoon";
} else if(currentHour > 0 ) {
    greeting = "Good Morning";
}else {
    greeting = "Welcome";
}

document.write(greeting + ' , ' + userName.toUpperCase() + "!");