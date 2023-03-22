img="";
status="";
objects=[];
function preload(){
    img=loadImage("bedroom.jpeg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelloaded);
}
function modelloaded(){
    console.log("model has been initialated");
    status=true;
    objectDetector.detect(img,gotresults);
    document.getElementById("status").innerHTML="status:detecting objects";
}
function gotresults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects=results;
    if(status!=""){
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="status:object detected";
            fill("red");
            precent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+precent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke("blue");
            rect(objects[i].x,objects[i].y,objects[i].width-100,objects[i].height-100)
        }
    }
}
function draw(){
    image(img,0,0,640,420);
    if(status!=""){
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="status:object detected";
            fill("");
            precent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+precent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke("blue");
            rect(objects[i].x,objects[i].y,objects[i].width-2000,objects[i].height-1000)
        }
    }
    

    
}