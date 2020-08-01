var randomNumber1 = Math.floor(Math.random()*6) + 1;   //random numbers from 1-6

var randomImages1 = "dice" + randomNumber1 + ".png";  //generate random images dice1-dice6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImages1);


var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomImages2 = "dice" + randomNumber2 + ".png"; 

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImages2);


if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins! ";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else
{
    document.querySelector("h1").innerHTML = "Draw! ";
}