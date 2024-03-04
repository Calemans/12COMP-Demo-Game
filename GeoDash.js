/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
// Written by ??? 
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");

const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
const PLAYER_HEIGHT = 25;
const PLAYER_WIDTH = 25;
const OBSTACLE_HEIGHT = 50;
const OBSTACLE_WIDTH = 50;
var  spawnDist = 0+1;
var nextSpawn = 0;
var obstacles;
var score =0;
var screenSelector = "start"
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    console.log("setup: ");
    cnv= new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    obstacles = new Group();

    floor =  new Sprite(SCREEN_WIDTH/2,  SCREEN_HEIGHT, SCREEN_WIDTH, 4, 's');
    floor.color = color("black");
    world.gravity.y = 274;
    
    document.addEventListener("keydown", function(event) {
        if(screenSelector == "start"||screenSelector == "end"){
            screenSelector = "game"
            resetGame();
        }else{
            if(player.y > 568 ){// 568 - found from testing - floor level
                console.log("Key pressed!");
                player.vel.y = -50;
            }
        }
    });
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    if(screenSelector=="game"){
        gameScreen();
    }else if(screenSelector=="end"){
        endScreen();
    }else if(screenSelector=="start"){
        startScreen();
    }else{
         text("no!!!!!", 50, 50);
         console.log("wrong screen")
    }
}
function newObstacle(){
    obstacle = new Sprite((SCREEN_WIDTH -100),  SCREEN_HEIGHT - OBSTACLE_HEIGHT/2, OBSTACLE_WIDTH, OBSTACLE_HEIGHT, 'k');
    obstacle.color = color("black");
    obstacle.vel.x = -15;
    obstacles.add(obstacle);
}

function youDead(_player, _obstacle){
    console.log("YouDied")
    screenSelector = "end";
    player.remove();
    obstacles.removeAll();
}
function startScreen(){
    console.log("Start screen")
    background("white");
    allSprites.visible = false;
    textSize(20);
    fill(20);
    text("welcome to gam", 50, 50);
    textSize(10);
    text("press", 50, 110)
}
function gameScreen(){
    console.log("game screen")
    allSprites.visible = true;
    background("pink");
    player = new Sprite(PLAYER_WIDTH*1.2,  SCREEN_HEIGHT/2, PLAYER_WIDTH, PLAYER_HEIGHT, 'd');
    player.color = color("purple");
    score++;
    if(frameCount> nextSpawn){
        newObstacle();
        nextSpawn = frameCount + random(10,100);
    }
    if (obstacles.collides(player) == true){
        console.log("you died");
        screenSelector ="end";
    }
    textSize(30);
    fill(200);
    stroke(0);
    strokeWeight(4);
    text(score, 50, 50);
}
function endScreen(){
    background("white");
    allSprites.visible = false;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("You died! Too bad :-(", 50, 50);
    textSize(24);
    text("your score was: "+score, 50, 110);
    textSize(14);
    text("press any key to restart", 50, 150);
}
function newGame(){
    player = new Sprite(PLAYER_WIDTH*1.2,  SCREEN_HEIGHT/2, PLAYER_WIDTH, PLAYER_HEIGHT, 'd');
    player.color = color("purple");
    player.collides(obstacles, youDead);
    score = 0;
}
/*******************************************************/
//  END OF APP
/*******************************************************/
