var randomnumber1=Math.floor(Math.random()*6)+1;//1-6
var randomnumber1image="images/dice" + randomnumber1 + ".png";//image1-image6
document.querySelectorAll("img")[0].setAttribute("src",randomnumber1image);
var img1=document.getElementsByClassName("img1").innerHTML=randomnumber1;

var randomnumber2=Math.floor(Math.random()*6+1);
var randomnumber2image="images/dice" + randomnumber2 +".png";//image1-image6
document.querySelectorAll("img")[1].setAttribute("src",randomnumber2image);
var img2=document.getElementsByClassName("img2").innerHTML=randomnumber2;

if(img1==img2){
    document.querySelector("h1").innerHTML="Draw!🤷‍♀️";
}else if(img1>img2){
   document.querySelector("h1").innerHTML="Player 1 win! 🚩";
}else{
    document.querySelector("h1").innerHTML="Player 2 win! 🚩";
}
