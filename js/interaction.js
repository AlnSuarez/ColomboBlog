

var counter =1;

function goDown(){
    if(counter>3){
        counter = 3;
    }
    counter++;
    var sectionIs = "section"+counter;
    document.getElementById(sectionIs).scrollIntoView({behavior: 'smooth'});
    
    console.log(counter);

}

function goUp(){
    if(counter<1){
        counter = 1;
    }
    counter--;
    var sectionIs = "section"+counter;
    document.getElementById(sectionIs).scrollIntoView({behavior: 'smooth'});
    
   console.log(counter);

}



function setBlack(){
    document.getElementById("boton").innerText = "night mode";
    document.getElementById("bloque1").style.background = "linear-gradient(180deg, rgba(255,199,188,1) 0%, rgba(249,122,59,1) 100%)";
    document.getElementById("bloque2").style.background = "linear-gradient(180deg, rgba(249,122,59,1) 0%, rgba(255,199,188,1) 100%)";
    document
}

function setWhite(){
    document.getElementById("boton").innerText = "light mode";
    document.getElementById("bloque1").style.background = "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(200,59,17,1) 100%)";
    document.getElementById("bloque2").style.background = "linear-gradient(180deg, rgba(200,59,17,1) 0%, rgba(59,140,249,1) 100%)";
}