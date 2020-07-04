var gameState =  0;
var playerCount = 0;
var form, player,game;
var database;
var position;
function setup(){
    database=firebase.database();
    createCanvas(500,500);
    game= new Game();
    
   
    //var ball1position = database.ref('ball/position')
    /*ball1position.on("value",function(data){
        position= data.val();
        ball1.x= position.x;
        ball1.y= position.y;
    })*/
    game.getState();
    game.start();
}

function draw(){
    background("white");
    
    drawSprites();
}


function writePosition(x,y){
    database.ref('ball/position').set(
        {
            x:position.x+x,
            y:position.y+y
        }        
            )
}