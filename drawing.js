//Make a small drawing program with p5 speech 
//reference: http://ability.nyu.edu/p5.js-speech/
//cloned from github.com/simmoe/p5_api_speech

let myRec, browserCompatible, pen, direction, displayWord;
let a = +0.1;
let r = +1;
let q = 2
let tid;
let tegning = false;

function setup() {
    cnv = createCanvas(400, 400);
    background('red');
    //Check browser compatibility
    browserCompatible = window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ||
        window.oSpeechRecognition ||
        window.SpeechRecognition;
    //If compatible browser - instantiate 
    if (browserCompatible !== undefined) {
        myRec = new p5.SpeechRec();
        myRec.continuous = true;
        myRec.interimResults = true;
        myRec.onResult = showResult;
        myRec.start();
    }
    displayWord = createDiv();


    ni = {
        x: width / 2,
        y: height / 2,
        size: 6,
        col: color(255, 255, 255, 150),
        show: function () {
            fill(this.col)
            ellipseMode(CENTER)
            ellipse(this.x, this.y, this.size, this.size)
        },
        bounce: function () {
            // if(ni.x < 0){
            // ni.x = 0;
            this.x = this.x < 0 ? 0 : this.x;

            this.x > width ? width : this.x;

            this.y = this.y < 0 ? 0 : this.y;

            this.y > height ? height : this.y;



            //if(this.y>600)

        },
        move: function () {
            if (!tegning) {
                tegning = true;
                tid = millis();

            }
            var tids = millis() - tid;

            if (tids < 1000) {
                ni.x--;
            }
            if (tids < 1600 && tids > 1000) {
                ni.y--;
                ni.x--;
            }
            if (tids < 2500 && tids > 1600) {
                ni.y--;
            }
            if (tids < 3100 && tids > 2500) {
                ni.y--;
                ni.x++;
            }

            if (tids < 4100 && tids > 3100) {

                ni.x++;
            }
            if (tids < 4700 && tids > 4100) {
                ni.y++;
                ni.x++;

            }
            if (tids < 5600 && tids > 4700) {
                ni.y++;
            }

            if (tids < 6200 && tids > 5600) {
                ni.y++;
                ni.x--;
            }
            if (tids < 6300 && tids > 6200) {
                ni.y = (113)
                ni.x = (137)
            }
            if (tids < 6400 && tids > 6300) {
                ni.y = (113)
                ni.x = (188)
            }
            if (tids < 6500 && tids > 6400) {
                ni.y = (163)
                ni.x = (183)
            }
            if (tids < 6700 && tids > 6500) {
                ni.y++
                ni.x--
            }
            if (tids < 7000 && tids > 6700) {
                ni.x--
            }
            if (tids < 7200 && tids > 7000) {
                ni.y--
                ni.x--
            }
            if (tids < 7300 && tids > 7200) {
                ni.y = (202)
                ni.x = (163)
            }
            if (tids < 8800 && tids > 7400) {
                ni.y++
            }
            if (tids < 10000 && tids > 8800) {
                ni.y--
                ni.x++
            }
            if (tids < 11200 && tids > 10000) {
                ni.y++
                ni.x--
            }
            if (tids < 12000 && tids > 11200) {
                ni.y++

            }
            if (tids < 13000 && tids > 12000) {
                ni.y++
                ni.x++
            }
            if (tids < 14000 && tids > 13000) {
                ni.y--
                ni.x--
            }
            if (tids < 15000 && tids > 14000) {
                ni.y++
                ni.x--

            }
            if (tids < 16000 && tids > 15000) {
                ni.y--
                ni.x++
            }
            if (tids < 16800 && tids > 16000) {
                ni.y--
            }
            if (tids < 18000 && tids > 16800) {
                ni.y--
                ni.x--
            }
            if (tids < 19200 && tids > 18000) {
                ni.y++
                ni.x++
            }
            if (tids < 20000 && tids > 19200) {
                ni.y=(214)
                ni.x=(236)
            }
            if(tids < 20500 && tids > 20000){
                pen.size = 16
                this.col = color(255,0,0,255)
                ni.y--
                ni.x++
                    }
                    if(tids < 21500 && tids > 20500){
                        ni.size +=10
                        this.col = color(255,0,0,255)
                        ni.y--
                
                            }












            if (tids > 30000) {
                tegning = false;
                direction = "";
            }

        },
        vistid: function () {
            var urDiv = document.getElementById('ur');

            urDiv.innerText = hour() + ":" + minute() + ":" + second();

        }


    }
}






function draw() {
    if (direction == "left") ni.x--;
    if (direction == "right") ni.x++;
    if (direction == "up") ni.y--;
    if (direction == "down") ni.y++;
    if (direction == "move") ni.move();
    console.log(mouseX, mouseY)
    // setInterval(vistid, 1000);
    // if(direction == "hvad er klokken") ni.vistid();



    //if(!tegning){
    //   smiley = true;


    //  }



    //let timer = millis-timer;

    /* if(direction == "big") ni.size +;
     if(direction == "small") ni.size -= 10;*/

    /*  ni.x = direction == "left" ? ni.x -- : direction = "right" ? ni.x ++ : direction == "up" ? ni.y -- : direction = "down" ? ni.y ++ : ni.x;*/

    ni.bounce();
    ni.show();
    ni.vistid();

}

function showResult() {
    if (!tegning) {
        if (myRec.resultValue == true) {
            word = myRec.resultString.split(' ').pop();
            displayWord.html(word.toLowerCase());
            switch (word) {



                case 'hej':
                    direction = "move"
                    break;

                case 'tid':
                    direction = "hvad er klokken"
                    break;

                case 'left':
                    direction = "left"
                    break;
                case 'right':
                    direction = "right"
                    break;
                case 'up':
                    direction = "up"
                    break;
                case 'down':
                    direction = "down"
                    break;

                case "fisk":
                    ni.size += 50;
                    break;
                case "sko":
                    ni.size -= 50;
                    break;

                default:
                    direction = "stop"


            }
        }

    } else {
        sig = "tegner"
    }
    displayWord.html(sig.toLowerCase());
}


/*
OPGAVER 

Vi skal forsøge at lave et lille tegneprogram, som bruger stemmegenkendelse til at føre pennen rundt på skærmen. 

Det første vi gør er at lave et objekt, pen, med Javascript Object notation. Objektet skal have følgende properties og metoder:

x, y, size, col
show() - metode som laver fill(this.col), og viser en ellipse(this.x, this.y, this.size, this.size)

Se hvordan her: https://www.w3schools.com/jS/js_objects.asp

Objektet skal laves i setup() - og metoden pen.show() skal kaldes i draw() 

Nu skal vi så bruge variablen word til at flytte rundt på objektet. Til det skal vi bruge et såkaldt switch statement i draw. 

Læs dokumentationen her - og se om du kan sørge for at ordene 'left', 'right', 'up', 'down' flytter vores pen rundt
https://www.w3schools.com/js/js_switch.asp

Se så om du kan tilføje endnu en metode i objektet - bounce - som sørger for at pennen ikke kommer længere, 
når x er mindre end nul eller større end bredden. Og tilsvarende for y.

Bemærk at der findes en smart måde at skrive comditions på, således:

a = a < 0 ? 0 : a;

Som betyder - sæt a til (er a mindre end nul?) 0, ellers a

_ _ _ _ _ _ _ _

Se om du kan lave programmet så man kan skifte farver - ved for eksempel at sige green, red, blue

Se om du kan lave programmet så man kan skifte størrelse ved at sige bigger, smaller

*/