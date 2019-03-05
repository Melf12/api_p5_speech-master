
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
    img3 = loadImage('billede/wilfi.jpg')
    img2 =loadImage('billede/img2.jpg'); 
    img = loadImage('billede/image.png'); // Load the image
    yizi = loadImage('billede/images.jpg');
    protein = loadImage('billede/protein.jpg');
    swole = loadImage('billede/muscles.jpg');
    gym = loadImage('billede/gym.jpg');

    let SpeechRecognition = window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ||
        window.oSpeechRecognition ||
        window.SpeechRecognition;

    cnv = createCanvas(800, 600);
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
    image(img, 0, height/2, 800, 300);
   } else if(ni == 2){
    image(img2, 0, height/2, 800, 300); 
    
   }else if(ni == 3){
image(img3,0,height/2,800,300)
   }
   else if(ni == 4){
    image(yizi,0,height/2,800,300)
       }
       else if(ni == 5){
        image(protein,0,height/2,800,300)
           }
           else if(ni == 6){
            image(swole,0,height/2,800,300)
               }
               else if(ni == 7){
                image(gym,0,height/2,800,300)
                   }

}



function showResult() {
    if (myRec.resultValue == true) {
        sentence = myRec.resultString;
        resultP.html(sentence);
        var lastIndex = sentence.lastIndexOf(' ');
        var lastWord = sentence.substr(lastIndex);
      
        }

        if (lastWord.includes("kakao")) {
              ni=1;


                    } if (lastWord.includes("Magnus")) {
                ni=2;
                
            
                
               
        }
        if (lastWord.includes("legenden")) {
            ni=3;
            
        
            
           
    }
    
    if(lastWord.includes("easy")){
        ni=4;

    }
    if(lastWord.includes("protein")){
        ni=5;

    }
    if(lastWord.includes("store")){
        ni=6;

    }
    if(lastWord.includes("træneren")){
        ni=7;

    }
    
        }
            
        

        
       /* function switchImage(url){
            if(img == undefined){
                img = createImg(url)
                .position(width/2, height/2)
                .style("width:50px;height:50px");
            }else{
                img.attribute('src', url)
            }
        }*/

    
