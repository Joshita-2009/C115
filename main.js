function preload(){

}
function setup(){
          canvas=createCanvas(300, 300);
          canvas.center();
          video=createCapture(VIDEO);
          video.size(300, 300);
          video.hide();
}
function draw(){
image(video, 0, 0, 300, 300);
poseNet=ml5.poseNet(video, modelLoaded);
function poseNet(){
          console.log("poseNet is initialized")
          poseNet.on('pose', gotPoses);
}
}
function take_snapshot(){
          save("myfilter.jpg");
}
function gotPoses(){
          if(results.length > 0){
                    console.log(results);
                    console.log("lips x = " + results[0].pose.lips.x);
                    console.log("lips y = " + results[0].pose.lips.y);
          }
}