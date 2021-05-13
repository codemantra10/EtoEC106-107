var emotion1="";
var emotion2="";
Webcam.set({
height:300,
width:300,
image_format:"png",
png_quality:90,
});
Webcam.attach("webcamview");
function captureimage(){
Webcam.snap(function(data_uri){
document.getElementById("snapshot").innerHTML="<img src='"+data_uri+"'id='finalimage'>";
})
}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Tp_Lij9eS/model.json",modelLoaded);
function modelLoaded(){
console.log("MY MODEL WORKS !");
}
function identify(){
image=document.getElementById("finalimage");
classifier.classify(image,gotResult);
}
function gotResult(Error,Result){
if (Error) {
console.log(Error);
} else {
console.log(Result);
document.getElementById("e1name").innerHTML=Result[0].label; 
document.getElementById("e2name").innerHTML=Result[1].label;
emotion1=Result[0].label
emotion2=Result[1].label
if (emotion1=="Crying") {
document.getElementById("e1").innerHTML="😭";
} 
else if(emotion1=="Sad"){
    document.getElementById("e1").innerHTML="😞";
}
else if(emotion1=="Nervous"){
    document.getElementById("e1").innerHTML="😩";
}
else if(emotion1=="Scared"){
    document.getElementById("e1").innerHTML="😱";
}
else if(emotion1=="Happy"){
    document.getElementById("e1").innerHTML="😄";
}
else if(emotion1=="Angry"){
    document.getElementById("e1").innerHTML="😡";
}
if (emotion2=="Crying") {
    document.getElementById("e2").innerHTML="😭";
    } 
    else if(emotion2=="Sad"){
        document.getElementById("e2").innerHTML="😞";
    }
    else if(emotion2=="Nervous"){
        document.getElementById("e2").innerHTML="😩";
    }
    else if(emotion2=="Scared"){
        document.getElementById("e2").innerHTML="😱";
    }
    else if(emotion2=="Happy"){
        document.getElementById("e2").innerHTML="😄";
    }
    else if(emotion2=="Angry"){
        document.getElementById("e2").innerHTML="😡";
    }
}
}

