//Achtung gratis key unterstützt SSL nicht und läuft bloss auf localhost!!

let key='06e280b15621fb57f14de8e91c05e79e'; // https://weatherstack.com/product -- dein key!
let windstaerke;
let angle=0;
let windrad=0;

let input, button;

function setup() {
    createCanvas(700, 700);
    let url = 'http://api.weatherstack.com/current?access_key='+key+'&query=Zürich'; //Achtung gratis key unterstützt SSL nicht
    loadJSON(url, gotWeather);

    //diese zusammengesetzte URL könnt ihr auch direkt im Browser eingeben
    //http://api.weatherstack.com/current?access_key=06e280b15621fb57f14de8e91c05e79e&query=Zürich
    rectMode(CENTER);
    angleMode(DEGREES);
    stroke(255);
    strokeWeight(3);
    noFill();

    input = createInput();
    input.position(80, 50);
    button=createButton('SUBMIT');
    button.position(250, 50);
    button.mousePressed(reloadJson); //wenn der Button gedrueckt wird, müssen neue Daten von der API geladen werden (neuer Ort), dies macht die Funktion reloadJson
}

function draw() {
    background(0, 10);
    angle+=windrad;
    push();
    translate(width/2, height/2);
    rotate(angle);
    rect(0,0,100,100);
    pop();
}

function gotWeather(weather) {
    // Get the wind speed in km
    windstaerke = weather.current.wind_speed; // Angaben in km!
    windrad = map(windstaerke, 0, 200, 0, 10); // in Rotationsgrad mappen. Bei 200stdkm dreht sich das Windrad nun 10 Grad weiter pro Frame

    //console.log(windrad)

}

function reloadJson(){
    // reload JSon kreiert eine neue url für die API mit dem Ort, den die User eingegeben haben

    let ort = input.value();
    let url = 'http://api.weatherstack.com/current?access_key='+key+'&query='+ort;

    // dann lädt die Funktion gotWeather diese neuen Daten
    loadJSON(url, gotWeather);
}
