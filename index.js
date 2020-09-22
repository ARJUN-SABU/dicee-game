var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var changingImage1 = "images/dice" + randomNumber1 + ".png";
var changingImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", changingImage1);
document.querySelector(".img2").setAttribute("src", changingImage2);

if(changingImage1 > changingImage2)
  document.querySelector("h1").textContent = "🚩Player 1 Wins!";
else if(changingImage2 > changingImage1)
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
else
  document.querySelector("h1").innerHTML = "Draw !";
