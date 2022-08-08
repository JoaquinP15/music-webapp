Song_1 = "";
Song_2 = "";

Left_Wrist_X = 0;
Right_Wrist_X = 0;

Left_Wrist_Y = 0;
Right_Wrist_Y = 0;

function preload(){
    song_1 = loadSong("music1.mp3");
    song_2 = loadSong("music2.mp3");
}

function setup(){
    canvas = createCanvas(600,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,600,400);
}

function modelLoaded(){
    console.log("Model Has Been Loaded");
}

function gotPoses(){
    if(results.length > 0){
        console.log(results);

        Left_Wrist_Y = results[0].pose.leftWrist.y;
        Left_Wrist_X = results[0].pose.leftWrist.x;
        Right_Wrist_Y = results[0].pose.rightWrist.y;
        Right_Wrist_X = results[0].pose.rightWrist.x;
    }
}