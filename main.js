
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
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jNwo-9N0x/model.json",modelLoaded);
function modelLoaded(){
console.log("MY MODEL WORKS AND WILL CRUSH OTHERS!😈");
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
}
}