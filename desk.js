img="";
status="";
objects=[];
function preload(){
    img=loadImage("desk.avif");
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
}
function draw(){
    image(img,0,0,640,420);
    if(status!=""){
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="status:object detected";
            fill("blueviolet");
            precent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+precent+"%",objects[i].x-350,objects[i].y-350);
            noFill();
            stroke("blue");
            rect(objects[i].x-400,objects[i].y-400,objects[i].width-200,objects[i].height-200)
        }  
    }
    

    
}