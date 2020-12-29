'use strict' ;
var user_name = prompt ("what is your name ?");
//console.log(user_name);
alert ("hello " + user_name ) ;

var programming = prompt("do you like programming?");
//console.log(programming);
if (programming.toLowerCase() ==='yes')
{ 
    alert ("wow , like me ");
}
else {
    alert ("that's bad ");
}

var student = prompt("are you  engaged in any programming courses?");
//console.log(student);
if (student.toLowerCase() ==='yes')
{ 
    alert ("just like me ");
}
else {
    alert ("you should try one ");
}


var pizza = prompt("do you like pizza?");
//console.log(pizza);
if (pizza.toLowerCase() ==='yes')
{ 
    alert ("i like it too ");
}
else {
    alert ("why it's very delicious ");
}


var travel = prompt("do  you like traveling");
//console.log(travel);
if (travel.toLowerCase() ==='yes')
{ 
    alert (" i think traveling is lovely too  ");
}
else {
    alert (":( ");
}


var pet = prompt("do you have a pet");
//console.log(pet);
if (pet.toLowerCase() ==='no')
{ 
    alert ("me too , i don't like animals ");
}
else {
    alert ("nice  ");
}


alert(" thank you for answering my questions "  +  user_name);




