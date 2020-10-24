//Achtung gratis key unterstützt SSL nicht und läuft bloss auf localhost!!

let key='06e280b15621fb57f14de8e91c05e79e'; // https://weatherstack.com/product -- dein key!
let windstaerke;
let windrad;
let angle=0;
var windrad=0;
//var windstaerke = 3;
//let windstaerkeMax = 180;

let input, button;

var gui;

function setup() {
    createCanvas(1800, 1000)
    let url = 'http://api.weatherstack.com/current?access_key='+key+'&query=Zürich'; //Achtung gratis key unterstützt SSL nicht
    loadJSON(url, gotWeather);

    //diese zusammengesetzte URL könnt ihr auch direkt im Browser eingeben
    //http://api.weatherstack.com/current?access_key=06e280b15621fb57f14de8e91c05e79e&query=Zürich
    rectMode(CENTER);
    angleMode(DEGREES);
    stroke(255);
    strokeWeight(3);
    noFill();

    gui = createGui('p5.gui');
    gui.addGlobals('windrad');

    input = createInput();
    input.position(80, 50);
    button=createButton('SUBMIT');
    button.position(250, 50);
    button.mousePressed(reloadJson); //wenn der Button gedrueckt wird, müssen neue Daten von der API geladen werden (neuer Ort), dies macht die Funktion reloadJson
}

function draw() {
    background(0, 80);
    angle+=windrad;
    //push();
    //translate(width/2, height/2);
    //rotate(angle);
    //rect(0,0,100,100);
    //pop();
    //push();
    specialeffect();
    //pop();
}

function specialeffect (){
  push();
  strokeWeight(1);
  //background(0, 1);
  stroke(255);
  //translate(1042, 470);
  translate(742, 370);
  rotate(angle);
  translate(-742, -370);
  //horizontal
    for (var x = 870; x <= 1320; x = x + 30) {
      for (var y = 310; y <= 425; y = y + 30) {
        fill(255, 0);
        rect(x, y, 30, 30)
      }
    }

    for (var x = 130; x <= 580; x = x + 30) {
      for (var y = 310; y <= 425; y = y + 30) {
        rect(x, y, 30, 30)
      }
    }

    //vertikal
      for (var x = 682; x <= 800; x = x + 30) {
        for (var y = -230; y <= 220; y = y + 30) {
          fill(255, 0);
          rect(x, y, 30, 30)
        }
      }

      for (var x = 682; x <= 800; x = x + 30) {
        for (var y = 510; y <= 960; y = y + 30) {
          rect(x, y, 30, 30)
        }
      }

    line(596, 355, 870, 355);
    line(727, 235, 727, 495);
    pop();
}

function gotWeather(weather) {
    // Get the wind speed in km
    windstaerke = weather.current.wind_speed; // Angaben in km!
    windrad = map(windstaerke, 0, 200, 0, 10); // in Rotationsgrad mappen. Bei 200stdkm dreht sich das Windrad nun 10 Grad weiter pro Frame

    console.log(windrad)

}

function reloadJson(){
    // reload JSon kreiert eine neue url für die API mit dem Ort, den die User eingegeben haben

    let ort = input.value();
    let url = 'http://api.weatherstack.com/current?access_key='+key+'&query='+ort;

    // dann lädt die Funktion gotWeather diese neuen Daten
    loadJSON(url, gotWeather);
}
