'use strict';
console.log("hello");
var user_name = prompt("What is your name ?");
//console.log(user_name);
alert("Hello " + user_name);

var counterOfCorrectAnswers = 0;
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();
introductionEnd();

function questionOne() {
    var programming = prompt("Do you like programming?");
    //console.log(programming);
    if (programming.toLowerCase() === 'yes') {
        alert("Wow , me too! ");
        counterOfCorrectAnswers++;
    }
    else {
        alert("That's too bad ");
    }
}

function questionTwo() {
    var student = prompt("are you  engaged in any programming courses?");
    //console.log(student);
    if (student.toLowerCase() === 'yes') {
        alert("Just like me ");
        counterOfCorrectAnswers++;
    }
    else {
        alert("You should try one!");
    }
}

function questionThree() {
    var pizza = prompt("do you like pizza?");
    //console.log(pizza);
    if (pizza.toLowerCase() === 'yes') {
        alert("i like it too ");
        counterOfCorrectAnswers++;
    }
    else {
        alert("why ? it's very delicious ");
    }
}

function questionFour() {
    var travel = prompt("do  you like traveling");
    //console.log(travel);
    if (travel.toLowerCase() === 'yes') {
        alert(" i think traveling is lovely too  ");
        counterOfCorrectAnswers++;
    }
    else {
        alert(":( ");
    }
}

function questionFive() {
    var pet = prompt("do you have a pet");
    //console.log(pet);
    if (pet.toLowerCase() === 'no') {
        alert("me too , i don't like pets ");
        counterOfCorrectAnswers++;
    }
    else {
        alert("nice  ");

    }
}
function questionSix() {
    for (var i = 0; i < 4; i++) {

        //console.log(i);
        if (i == 3) {
            alert("this the last chance");
        }

        var j = parseInt(prompt("enter a number "));

        if (j > 5) {
            alert("your number is too high");
            //consol.log("your number is too high");

        }
        else if (j < 5) {
            alert("your nmber is too low");
            //consol.log("your nmber is too low") ; 

        }
        else {
            alert("correct this is the right number");
            //consol.log("correct this is the right number");
            counterOfCorrectAnswers++;
            break;

        }
        if (i == 3 && j != 5)
            alert("i am sorry , you didn't guess the right number , it was 5");
    }
}
function questionSeven() {
    var foodArray = ["tomato", "olive", "corn", "oil", "banana", "potato", "rice", "berry"];



    for (var l = 0; l < foodArray.length; l++) {
        var Answer = parseInt(prompt("We have multiple ingredients for salad guess the number of the correct ingredient from 0 to 7"));
        if (Answer < 4 && Answer >= 0) {
            alert("You have chosen the correct answer and it is " + foodArray[Answer]);
            counterOfCorrectAnswers++;
            break;
        }
        else if (Answer > 4 && Answer <= 7) {
            alert("Try Again and your answer was " + foodArray[Answer]);
        }
        else
            alert("Chose a number between 0 and 7");

    }
}

function introductionEnd() {
    alert("Your final score was " + counterOfCorrectAnswers);
    alert(" thank you for answering my questions " + user_name);
}



