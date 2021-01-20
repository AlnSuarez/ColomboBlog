
var flag =1;

function changeColor(boton){

    if(flag==1){
        flag = 0;
        setBlack();
    }
    else{
        flag = 1
        setWhite();
    }       
}


function setBlack(){
    document.getElementById("boton").innerText = "night mode";
    document.getElementById("bloque1").style.background = "linear-gradient(180deg, rgba(255,199,188,1) 0%, rgba(249,122,59,1) 100%)";
    document.getElementById("bloque2").style.background = "linear-gradient(180deg, rgba(249,122,59,1) 0%, rgba(255,199,188,1) 100%)";

}

function setWhite(){
    document.getElementById("boton").innerText = "light mode";
    document.getElementById("bloque1").style.background = "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(200,59,17,1) 100%)";
    document.getElementById("bloque2").style.background = "linear-gradient(180deg, rgba(200,59,17,1) 0%, rgba(59,140,249,1) 100%)";
}