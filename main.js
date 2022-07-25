song_1 = "";
song_2 = "";

function preload(){
    song_1 = loadSong("music1.mp3");
    song_2 = loadSong("music2.mp3");
}

function setup(){
    canvas = createCanvas(600,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,400);
}