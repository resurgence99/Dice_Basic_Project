// Dice 1 - Player 1
var randomNumber1=Math.floor((Math.random() * 6) + 1);
var randomImage1="images/BL"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1);


// Dice 2 - Player 2
var randomNumber2=Math.floor((Math.random() * 6) + 1);
var randomImage2="images/R"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);

// Dice 3 - Player 3
var randomNumber3=Math.floor((Math.random() * 6) + 1);
var randomImage3="images/G"+randomNumber3+".png";
var image3=document.querySelectorAll("img")[2];
image3.setAttribute("src",randomImage3);

// Dice 4 - Player 4
var randomNumber4=Math.floor((Math.random() * 6) + 1);
var randomImage4="images/pl"+randomNumber4+".png";
var image4=document.querySelectorAll("img")[3];
image4.setAttribute("src",randomImage4);

if (randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3)
{
  document.querySelector("h1").innerHTML="Player 1 Wins !";
}
else if (randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3)
{
  document.querySelector("h1").innerHTML="Player 2 Wins !";
}
else if (randomNumber3 > randomNumber1 && randomNumber3 > randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 3 Wins !";
}
else if (randomNumber4 > randomNumber1 && randomNumber4 > randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 4 Wins !";
}
else {
  document.querySelector("h1").innerHTML="Draw !";
}
