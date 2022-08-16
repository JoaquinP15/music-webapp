Song_1 = "";
Song_2 = "";

Status = "";

Left_Wrist_X = 0;
Right_Wrist_X = 0;

Left_Wrist_Y = 0;
Right_Wrist_Y = 0;

Score_Left_Wrist = 0;
Score_Right_Wrist = 0;

function preload(){
    Song_1 = loadSound("music1.mp3");
    Song_2 = loadSound("music2.mp3");
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
    Status_Of_Song_1 = Song_1; 
    fill("red");

    if(Score_Left_Wrist < 0.2){

        circle(Left_Wrist_X, Left_Wrist_Y, 20);

        Song_2.stop();

        if(Status_Of_Song_1 == false){

            Song_1.play();

            document.getElementById("heading").innerHTML = 'song_1'
        }
    }

    Status_Of_Song_2 = Song_2; 
    if(Score_Right_Wrist < 0.2){

        circle(Right_Wrist_X, Right_Wrist_Y, 20);

        Song_1.stop();

        if(Status_Of_Song_2 == false){

            Song_2.play();

            document.getElementById("heading").innerHTML = 'song_2'
        }
    }

}

function modelLoaded(){
    console.log("Model Has Been Loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        Left_Wrist_Y = results[0].pose.leftWrist.y;
        Left_Wrist_X = results[0].pose.leftWrist.x;
        Right_Wrist_Y = results[0].pose.rightWrist.y;
        Right_Wrist_X = results[0].pose.rightWrist.x;

        Score_Left_Wrist =  results[0].pose.keypoints[9].score;
        Score_Right_Wrist =  results[0].pose.keypoints[10].score;
    }
}