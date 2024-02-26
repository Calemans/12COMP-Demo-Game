/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
// Written by ??? 
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");

const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
const PLAYER_WIDTH = 30;
const PLAYER_HEIGHT = 30;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    console.log("setup: ");
    world.gravity.y = 1;
    world.gravity.x = 0;
    cnv = new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    player = new Sprite(100, 100, PLAYER_WIDTH, PLAYER_HEIGHT, 'd');
    player.color = 'red';
    floor = new Sprite(SCREEN_WIDTH/2,  SCREEN_HEIGHT, SCREEN_WIDTH, 4, 's');
    floor.color = 'black';
    document.addEventListener("keydown", function(event) {
    if (event.code === 'Space') {
        console.log("Key pressed ");
        player.vel.y = '-5';
    }
});
    
    
 }
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    background('pink');
}


/*******************************************************/
//  END OF APP
/*******************************************************/
