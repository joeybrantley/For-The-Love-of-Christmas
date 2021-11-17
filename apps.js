'use strict'

const button = document.querySelector('button');
const paragraph = document.querySelector('p');

button.addEventListener('click', updateButton);

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

function createGreeting(){
  let userName = getUserName();
  let greeting = hourOfDay();
  document.write(greeting + ', ' + userName + "!");
 }

 function getUserName(){
     let userName = prompt("What is your name?"); 
     return userName;
 }

 function hourOfDay(){
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

     return greeting;
 }


let answer = "";
    do{
        answer = prompt("How many presents are you giving out for Christmas?");
        if(answer < 2){
            alert("Bah humbug");
            alert("Try again");
        } else{
            alert("Bless you! Merry Christmas!!");
        }
    }while(answer < 2)


    function displayCandyCanes(){
      let number = prompt("how many candy canes do you give this website?");
      for(let CandyCane = 1; CandyCane <= number; CandyCane++ ){
          document.write('<img src="images/Candy Cane.jpg"/>');
      }
  }
 