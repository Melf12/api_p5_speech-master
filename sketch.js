
let words = [];
let sentence = "";
let resultP;
let leftDiv;
let counter;
let cnv, myRec, btn, txt;
let img;
let img2;
let ni=0;
//kommentar
function setup() {
    img2 =loadImage('billede/img2.jpg'); 
    img = loadImage('billede/image.png'); // Load the image
    let SpeechRecognition = window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ||
        window.oSpeechRecognition ||
        window.SpeechRecognition;

    cnv = createCanvas(400, 600);
    background('red');
    txt = createElement("h5", "Say something..")
        .position(40, 200)
        .style("color:white;")
        .hide();

    resultP = createP("")
        .position(40, 220)
        .parent(txt);
    //Check browser comp
    if (SpeechRecognition !== undefined) {
        btn = createButton("Klik for at aktivere mikrofon")
            .position(40, 200)
            .style("font-size:1em;background-color:#33C3F0;border-color:#33C3F0;border-radius:8px;color:white;cursor:pointer;")
            .mousePressed(function () {
                btn.hide();
                txt.show();
                myRec = new p5.SpeechRec();
                myRec.continuous = true;
                myRec.interimResults = true;
                myRec.default_language ="da-DK";
                myRec.onResult = showResult;
                myRec.start();
            });
    }
}

function draw() {
   if(ni == 1){
    image(img, 0, height/2, 400, 300);
   } else{if(ni == 2){
    image(img2, 0, height/2, 400, 300);
    
   }}

}

function showResult() {
    if (myRec.resultValue == true) {
        sentence = myRec.resultString;
        resultP.html(sentence);

      
        }

        if (sentence.includes("kakao")) {
              ni=1;



                    }else{
            if (sentence.includes("Magnus")) {
                ni=2;
                
            
                
               
        }
        if (sentence.includes("Homeboy")) {
            ni=3;
            
        
            
           
    }  
        }
            
        
        }

    
