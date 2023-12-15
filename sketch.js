let startButton;
let nextButton;
let soundButton;
let isStarted = false;
let isNextPressed = false;
let img;
let sound;

function preload() {
  img = loadImage('Children.jpg');
  sound = loadSound('laughing.mp3');
}

function setup() {
  createCanvas(850, 550);

  startButton = createButton('ΕΙΣΟΔΟΣ');
  startButton.position(width / 2 - startButton.width / 1, height / 2);
  startButton.style('width', '150px');
  startButton.style('height', '80px');
  startButton.style('font-size', '30px');
  startButton.mousePressed(() => {
    isStarted = true;
    startButton.style('display', 'none'); 
    nextButton.style('display', 'inline');
    soundButton.style('display', 'inline'); 
  });

  nextButton = createButton('ΠΛΗΡΟΦΟΡΙΕΣ ΕΡΓΟΥ');
  nextButton.position(width / 7 - nextButton.width / 2, height - 500);
  nextButton.mousePressed(showNextLayer);
  nextButton.style('display', 'none');
  
  soundButton = createButton('ΗΧΟΣ');
  soundButton.position(width - 120, height - 40);
  soundButton.style('width', '85px');
  soundButton.style('height', '25px');
  soundButton.style('font-size', '13px');
  soundButton.mousePressed(playSound);
  soundButton.style('display', 'none'); 
}

function draw() {
  if (isStarted) {
    image(img, 0, 0, width, height); 
      if (isNextPressed) {
      
      fill(150);
      noStroke();
      rectMode(CENTER);
      let boxWidth = 600;  
      let boxHeight = 200;  
      rect(width / 2, height / 1.78, boxWidth, boxHeight);

      
      fill(255);
      textSize(18);
      textAlign(CENTER, CENTER);
      text("*Το έργο με τίτλο “Παιδιά στην Αυλή” είναι", width / 2, height / 2);
      text("δημιούργημα του Πάνου Αραβαντινού. ", width / 2, height / 1.8)
      text("*Το έργο είναι φτιαγμένο με λάδι σε καμβά", width / 2, height / 1.6)
      text("και έχει μέγεθος 26 x 28,5 εκ.   ", width / 2, height / 1.5)
    }
  } else {
        background(0);
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("“Παιδιά στην Αυλή”", width / 2, height / 2 - 30);
  }
}

function showNextLayer() {
  isNextPressed = !isNextPressed; 
}

function playSound() {
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.play();
  }
}