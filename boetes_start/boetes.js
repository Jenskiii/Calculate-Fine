"use strict"
// Link HTML elements
const mySlider = document.getElementById("mySlider");
const outPut = document.getElementById("output");
const feedBack = document.getElementById("feedback");
const boeteKop = document.getElementById("boetekop");
const boeteBalk = document.getElementById("boetebalk");
const boeteBedrag = document.getElementById("boetebedrag");
const staffelTabel = document.getElementById("staffeltabel");
const boete = document.getElementById("boete");

output.innerHTML = mySlider.value;

// add event + function to slider
mySlider.oninput = function checkSliderValue(){
    // bind value to variable speed & correction speed
    let speed = output.innerHTML = this.value;
    let corrSnelheid100 = speed - 3;
    // feedback visible maken
    feedback.style.visibility = "visible";

    if (speed < 51){
        feedBack.innerHTML = "Keurig Houden zo!";
        feedBack.style.backgroundColor = "green";
         // boetebalk onbaarmaken
        boeteBalk.style.visibility = "hidden";
        boeteKop.style.visibility = "hidden";
        // balk lengte
        feedBack.style.width = "200px";
    }else if(speed > 50 && this.value <= 79){
        feedBack.innerHTML = "Dat is te hard binnen de bebouwde kom, u riskeert een boete!";
        feedBack.style.backgroundColor = "orange";
        // boetebalk + kop zichtbaarmaken
        boeteBalk.style.visibility = "visible";
        boeteKop.style.visibility = "visible";
        // balk lengte
        boeteBalk.style.width = "500px";
        feedBack.style.width = "500px";
    }else if(speed > 79) {
        feedBack.innerHTML = "U riskeert een strafzaak én het in beslag nemen van uw voertuig en ontzegging van uw rijbevoegdheid!";
        feedBack.style.backgroundColor = "red";
        // boetebalk + kop zichtbaarmaken
        boeteBalk.style.visibility = "visible";
        boeteKop.style.visibility = "visible";
        // balk lengte
        boeteBalk.style.width = "850px";
        feedBack.style.width = "850px";
        
}

    switch(corrSnelheid100 ){
        // corrSnelheid100 heeft een -3 correctie op de echte snelheid 
        // er komt ook 9 euro administratie kosten boven op het bedrag
        case 54: 
        boeteBedrag.innerHTML = "€" + (28+9);
        break;
        case 55: 
        boeteBedrag.innerHTML = "€" + (35+9);
        break;
        case 56: 
        boeteBedrag.innerHTML = "€" + (43+9);
        break;
        case 57: 
        boeteBedrag.innerHTML = "€" + (49+9);
        break;
        case 58: 
        boeteBedrag.innerHTML = "€" + (56+9);
        break;
        case 59: 
        boeteBedrag.innerHTML = "€" + (64+9);
        break;
        case 60: 
        boeteBedrag.innerHTML = "€" + (72+9);
        break;
        case 61: 
        boeteBedrag.innerHTML = "€" + (98+9);
        break;
        case 62: 
        boeteBedrag.innerHTML = "€" + (107+9);
        break;
        case 63: 
        boeteBedrag.innerHTML = "€" + (118+9);
        break;
        case 64: 
        boeteBedrag.innerHTML = "€" + (127+9);
        break;
        case 65: 
        boeteBedrag.innerHTML = "€" + (137+9);
        break;
        case 66: 
        boeteBedrag.innerHTML = "€" + (147+9);
        break;
        case 67: 
        boeteBedrag.innerHTML = "€" + (158+9);
        break;
        case 68: 
        boeteBedrag.innerHTML = "€" + (170+9);
        break;
        case 69: 
        boeteBedrag.innerHTML = "€" + (181+9);
        break;
        case 70: 
        boeteBedrag.innerHTML = "€" + (194+9);
        break;
        case 71: 
        boeteBedrag.innerHTML = "€" + (207+9);
        break;
        case 72: 
        boeteBedrag.innerHTML = "€" + (221+9);
        break;
        case 73: 
        boeteBedrag.innerHTML = "€" + (235+9);
        break;
        case 74: 
        boeteBedrag.innerHTML = "€" + (247+9);
        break;
        case 75: 
        boeteBedrag.innerHTML = "€" + (263+9);
        break;
        case 76: 
        boeteBedrag.innerHTML = "€" + (277+9);
        break;
        case 77: 
        boeteBedrag.innerHTML = "€" + (295+9);
        break;
        case 78: 
        boeteBedrag.innerHTML = "€" + (309+9);
        break;
        case 79: 
        boeteBedrag.innerHTML = "€" + (325+9);
        break;
    
    }

    
}

    // array voor boetes loop
    const staffelArray = [28, 35 ,43 ,49, 56, 64 ,72, 98, 107, 118, 127, 137, 147, 158, 170, 181, 194, 207, 221, 235, 247, 263, 277, 295,309, 325];
    const go = staffelArray.length   
    let j = 4;

    let table = "<table><thead><tr><th>Snelheid te veel</th><th>Boete Prijs</th></tr></thead><tbody>";
    for(let i = 0; i < go; i++)  {
        // table display
        table += `<tr><td>   ${j++} km   </td><td>  € ${staffelArray[i]},- </td></tr>`;
    }
    staffelTabel.innerHTML = table;
   