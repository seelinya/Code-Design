
let key='06e280b15621fb57f14de8e91c05e79e'; // https://weatherstack.com/product -- dein key!
let windstaerke;
let angle=0;
let windrad=0;

function setup() {
    createCanvas(700, 700);
    let url = 'https://api.weatherstack.com/current?access_key='+key+'&query=Berlin'; //Achtung gratis key unterstützt SSL nicht
    loadJSON(url, gotWeather);

    //diese zusammengesetzte URL könnt ihr auch direkt im Browser eingeben
    //https://api.weatherstack.com/current?access_key=06e280b15621fb57f14de8e91c05e79e&query=Zürich
    rectMode(CENTER);
    angleMode(DEGREES);
    stroke(255);
    strokeWeight(3);
    noFill();
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

    windrad = map(windstaerke, 0, 300, 0, 10); // in Rotationsgrad mappen. Bei 200stdkm dreht sich das Windrad nun 10 Grad weiter pro Frame

    console.log(windstaerke)

}