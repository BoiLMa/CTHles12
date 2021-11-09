var xAuto = -250;
var yAuto = 200;
var B = 255;

function setup() {
	canvas = createCanvas(1500,500);
	canvas.parent('processing');
    noFill();
	frameRate(30);
}

function draw() {
	background(0,0,B);
	tijd(); // in deze functie wordt de lucht langzaam donkerder totdat het 'nacht' is.
	noStroke(); // in regels 16 tot en met 18 wordt het gras getekent.
	fill('green');
	rect(-5,100,1505,500);
	stroke('white'); // in regels 19 tot en met 22 wordt de racebaan getekent met een witte rand van 3 pixels erom heen.
	strokeWeight(3);
	fill('grey');
	rect(0,150,1500,250); 
	noStroke(); // in regels 23 tot en met 25 wordt de tribune getekent, er zit geen rand omheen.
	fill(83,83,83);
	rect(900,50,500,150);
	push(); 
	// de functie tekenBomen spreekt volgens mij voor zich, deze word hier aangekondigd.
	tekenBomen();
	//de for statements in regel 29-38 zorgen ervoor dat er zitplaatsen ontstaan op de tribune.
	for(var n = 0;n < 3;n++){
		var hoogtecrowd = 50*n;
		fill('grey');
		rect(920,60 + hoogtecrowd,460,25);
	}
	for (var n = 0;n < 10;n++) {
	  translate(150,0);
	  fill('white');
	  rect(0,250,50,25);
	} 
	pop(); //in de regels 40-44 worden de verschillende functies toegepast.
	tekenFinish();
	gefinished();
	tekencrowd();
	bewegenV();	
	instructies();

}

function gefinished() { //in deze functie wordt de tekst gemaakt die in beeld verschijnd wanneer je over de finish heen rijdt.
	if (xAuto>1150) {
			text("Je bent gefinished!",200,200);
	}
}

function tekenFinish() { //deze functie zorgt ervoor dat er een finishlijn wordt getekend.
	fill('white');
	rect(1200,200,50,200);
	yFinish = 200;
	for (var n = 0; n < 4; n++)	{
		fill('black');
		rect(1200,yFinish,25,25);
		rect(1225,yFinish+25,25,25);
		yFinish += 50;
	}
}

function bewegenV() { //deze functie zorgt ervoor dat er een auto onstaat door middel van 'vertex' en 'ellipse'en zorgt ervoor dat deze auto kan rijden.
	if (xAuto <= 1200){
		if (keyIsDown(RIGHT_ARROW)) {
		xAuto += 10;
		beweegUpDown();
		}
		if (keyIsDown(LEFT_ARROW)) {
		xAuto -= 10;
		beweegUpDown();
		}
	}

	xAuto = constrain(xAuto,-250,height + 750); //regel 78-79 zorgen ervoor dat de auto niet buiten de aangegeven coordinaten kan rijden.  	
	yAuto = constrain(yAuto,200,370);
  
    fill('red');
	beginShape(); 
	vertex(xAuto,yAuto); 
	vertex(xAuto+50,yAuto); 
	vertex(xAuto+30,yAuto);
	vertex(xAuto+50,yAuto-15); 
	vertex(xAuto+100,yAuto-15); 
	vertex(xAuto+120,yAuto); 
	vertex(xAuto+165,yAuto); 
	vertex(xAuto+165,yAuto+20); 
	vertex(xAuto,yAuto+20); 
	endShape(CLOSE);
	fill('black');
	ellipse(xAuto+20,yAuto+20,25); 
	ellipse(xAuto+120,yAuto+20,25);  
}
	
function beweegUpDown() { //deze functie zorgt ervoor dat de auto ook naar boven en beneden kan rijden mits er ook naar voren of achter wordt gereden.
  if (keyIsDown(UP_ARROW)) {
    yAuto -= 1;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAuto += 1;
  }
}

function tijd() { //deze functie telt de tijd, dit is nodig om de achtergrond van dag naar nacht te veranderen.
	if (B > 120) {
		B -= 0.25;
	}
}

function tekenBomen() { //in deze functie worden de bomen getekend.
	for(var bomen = 0; bomen < 4; bomen++) {
	bomenafstand = bomen * 250;
	fill('brown');
	rect(bomenafstand+50,35,35,100);
	fill('green');
	ellipse(bomenafstand+65,10,100);
	}
}

function instructies() { //deze functie zorgt ervoor dat de instructies in het sherm staan mits de xAuto onder de 100 is.
	fill('white');
	textSize(50);
	if(xAuto < -100) {
	text("Gebruik de pijltjestoetsen om de raceauto te bewegen",100,450);
	push();
	textSize(30);
	text("Hint: start met rechts",1000,490);
	pop();
	}
	
}
	





function tekencrowd() { //deze functie tekent de crowd en sorgt ervoor dat ze juichem.
	if (xAuto > 800){
		tekencrowdjuigend();
	} else {
		tekencrowdstil();
	}	
}

function tekencrowdstil() { //deze functie tekent de crowd wanneer de auto niet in de buurt is, ze juichen nog niet.
	for(var crowdy = 0;crowdy < 3;crowdy++){
		for(var crowdnummer = 0;crowdnummer < 12;crowdnummer++){
				var xcrowdnummer = crowdnummer*40;
				var ycrowdnummer = crowdy*50;
				fill('red');
				rect(923+xcrowdnummer,60 + ycrowdnummer,10,20);
				fill(255,224,189);
				rect(923+xcrowdnummer,50+ycrowdnummer,10,7);
		}
	}
	for(var crowdy2 = 0;crowdy2 < 3;crowdy2++){
		for(var crowdnummer2 = 0;crowdnummer2 < 11;crowdnummer2++){
				var xcrowdnummer2 = crowdnummer2*40;
				var ycrowdnummer2 = crowdy2*50;
				fill('blue');
				rect(943+xcrowdnummer2,60 + ycrowdnummer2,10,20);
				fill(255,224,189);
				rect(943+xcrowdnummer2,50+ycrowdnummer2,10,7);
		}
	}
}

function tekencrowdjuigend() { //deze functie tekent de crowd wanneer de auto wel in de buurt is, ze juichen wel.
	for(var crowdy = 0;crowdy < 3;crowdy++){
		for(var crowdnummer = 0;crowdnummer < 12;crowdnummer++){
				var xcrowdnummer = crowdnummer*40;
				var ycrowdnummer = crowdy*50;
				var yrandom = random(45,65);
				fill('red');
				rect(923+xcrowdnummer,yrandom + ycrowdnummer,10,20);
				fill(255,224,189);
				rect(923+xcrowdnummer,yrandom+ycrowdnummer,10,7);
		}
	}
	for(var crowdy2 = 0;crowdy2 < 3;crowdy2++){
		for(var crowdnummer2 = 0;crowdnummer2 < 11;crowdnummer2++){
				var xcrowdnummer2 = crowdnummer2*40;
				var ycrowdnummer2 = crowdy2*50;
				var yrandom2 = random(45,65);
				fill('blue');
				rect(943+xcrowdnummer2,yrandom2 + ycrowdnummer2,10,20);
				fill(255,224,189);
				rect(943+xcrowdnummer2,yrandom2+ycrowdnummer2,10,7);
		}
	}
}