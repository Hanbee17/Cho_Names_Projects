var shipButton;

var korButton;
var engButton;
var spanButton;

var name1;

function startButton() {
  shipButton.locate(windowWidth*0.45, windowHeight*0.45);
}

function languageButtons() {
  korButton.locate(windowWidth*0.85, windowHeight*0.04);
  engButton.locate(windowWidth*0.9, windowHeight*0.04);
  spanButton.locate(windowWidth*0.95, windowHeight*0.04);
}

function nameButtons () {
  name1.locate(windowWidth*0.5, level2*1.2)
 }

function intialButtons() {
  shipButton = new Clickable();
  shipButton.image = ferryShip;
  shipButton.imageScale = 1.2;
  shipButton.locate(-400, -500);
  shipButton.resize(windowWidth*0.11, windowWidth*0.05);
  shipButton.text = "         ";
  shipButton.color = "#00000000";
  shipButton.strokeWeight = 00;
  shipButton.onRelease = function() {
    alert('It could be very disturbing and traumatic experience. Please leave if you do not want it.');
    pageState = 'mainKor'
    shipButton.locate(-400, -500);
  }

 korButton = new Clickable();
 korButton.image = korean;
 korButton.imageScale = 1.2;
 korButton.locate(-400, -500);
 korButton.resize(windowWidth*0.03, windowWidth*0.015);
 korButton.text = "         ";
 korButton.color = "#00000000";
 korButton.strokeWeight = 00;
 korButton.onRelease = function() {
   alert('한국어');
   pageState = 'mainKor'
   shipButton.locate(-400, -500);
 }

 engButton = new Clickable();
 engButton.image = english;
 engButton.imageScale = 1.2;
 engButton.locate(-400, -500);
 engButton.resize(windowWidth*0.03, windowWidth*0.015);
 engButton.text = "         ";
 engButton.color = "#00000000";
 engButton.strokeWeight = 00;
 engButton.onRelease = function() {
   alert('English');
   pageState = 'mainEng'
   shipButton.locate(-400, -500);
 }

 spanButton = new Clickable();
 spanButton.image = spanish;
 spanButton.imageScale = 1.2;
 spanButton.locate(-400, -500);
 spanButton.resize(windowWidth*0.03, windowWidth*0.015);
 spanButton.text = "         ";
 spanButton.color = "#00000000";
 spanButton.strokeWeight = 00;
 spanButton.onRelease = function() {
   alert('Spanish');
   pageState = 'mainSpan'
   shipButton.locate(-400, -500);
 }

 name1 = new Clickable();
 name1.locate(-400, -500);
 //name1.resize(windowWidth*0.03, windowWidth*0.015);
 name1.text = "NAME";
 name1.color = "#00000000";
 name1.strokeWeight = 00;
 name1.onRelease = function() {
   alert('name1');
 }

}