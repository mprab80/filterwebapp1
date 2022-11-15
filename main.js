x=0;
y=0;
draw_circle="";
draw_rect="";
var speechrecog=window.webkitSpeechRecognition;
var recog=new speechrecog();

function start(){
    document.getElementById("status").innerHTML= " System is listening, please speak now " 
    recog.start()
}


    recog.onresult= function(event){
        console.log(event);
        var content=event.results[0][0].transcript;
        document.getElementById("status").innerHTML= " You want me to draw: " + content;
        if (content=="Circle"){
            x=Math.floor(Math.random()*900)
            y=Math.floor(Math.random()*600)
            document.getElementById("status").innerHTML= " Started drawing a circle ";
            draw_circle="set";
        }
        if (content=="rectangle"){
            x=Math.floor(Math.random()*900)
            y=Math.floor(Math.random()*600)
            document.getElementById("status").innerHTML= " Started drawing a rectangle ";
            draw_rect="set";
        }
    }
    function setup(){
        canvas=createCanvas(900,600)
    }
    
    function draw(){
        if (draw_circle=="set"){
       radius=Math.floor(Math.random()*150)
       circle(x,y,radius)
       draw_circle="";
        }
        if (draw_rect=="set"){
            length=Math.floor(Math.random()*150)
            width=Math.floor(Math.random()*150)
            rect(x,y,length,width)
            draw_rect="";
        }
    }




