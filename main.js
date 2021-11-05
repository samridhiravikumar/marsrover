canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');
var rover_width = 100;
var rover_height = 90;
bg_image = "mars.jpg";
r_image = "rover.png";
rover_x = 10;
rover_y = 10;
var bg_imgTag;
var rover_imgTag;

function add() {
    bg_imgTag = new Image();
    bg_imgTag.onload = uploadBg;
    bg_imgTag.src = bg_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = r_image;

}
function uploadBg() {
    ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '38') {
        up();
        console.log("up");
    }
    if (keypressed == '40') {
        down();
        console.log("down");
    }
    if (keypressed == '37') {
        left();
        console.log("left");
    }
    if (keypressed == '39') {
        right();
        console.log("right");
    }
}
function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("up x= " + rover_x + " y = " + rover_y);
        uploadBg();
        uploadrover();
    }
}


function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("down x= " + rover_x + " y = " + rover_y);
        uploadBg();
        uploadrover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("left x= " + rover_x + " y = " + rover_y);
        uploadBg();
        uploadrover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("down x= " + rover_x + " y = " + rover_y);
        uploadBg();
        uploadrover();
    }
}





