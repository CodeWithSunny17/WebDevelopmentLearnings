var randomVar=Math.ceil(Math.random()*6);
var randomVar1= Math.ceil(Math.random()*6);

if(randomVar==1){
    document.querySelector(".img1").setAttribute("src","/images/dice1.png");
}
else if(randomVar==2){
    document.querySelector(".img1").setAttribute("src","/images/dice2.png");
}
else if(randomVar==3){
    document.querySelector(".img1").setAttribute("src","/images/dice3.png");
}
else if(randomVar==4){
    document.querySelector(".img1").setAttribute("src","/images/dice4.png");
}
else if(randomVar==5){
    document.querySelector(".img1").setAttribute("src","/images/dice5.png");
}
else if(randomVar==6){
    document.querySelector(".img1").setAttribute("src","/images/dice6.png");
}
if(randomVar1==1){
    document.querySelector(".img2").setAttribute("src","/images/dice1.png");
}
else if(randomVar1==2){
    document.querySelector(".img2").setAttribute("src","/images/dice2.png");
}
else if(randomVar1==3){
    document.querySelector(".img2").setAttribute("src","/images/dice3.png");
}
else if(randomVar1==4){
    document.querySelector(".img2").setAttribute("src","/images/dice4.png");
}
else if(randomVar1==5){
    document.querySelector(".img2").setAttribute("src","/images/dice5.png");
}
else if(randomVar1==6){
    document.querySelector(".img2").setAttribute("src","/images/dice6.png");
}
if(randomVar>randomVar1){
    document.querySelector(".container h1").innerHTML="Player 1 wins!";
}
else if(randomVar<randomVar1){
    document.querySelector(".container h1").innerHTML="Player 2 wins!";
}
else{
    document.querySelector(".container h1").innerHTML="Draw";
}