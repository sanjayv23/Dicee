
var randomNumber1=Math.random();
randomNumber1=1+Math.floor(randomNumber1*6);
var src1="./images/dice"+randomNumber1+".png";
document.getElementById("img1").src=src1;

var randomNumber2=Math.random();
randomNumber2=1+Math.floor(randomNumber2*6);
var src2="./images/dice"+randomNumber2+".png";
document.getElementById("img2").src=src2;

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText="🚩 Winner 1 🚩";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerText=" 🚩 Winner 2 🚩";
}
else{
    document.querySelector("h1").innerText="🏳 Draw 🏳";
}