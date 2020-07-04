class Game{
constructor(){

}
getState(){
    var gamestateref = database.ref('gameState');
    gamestateref.on("value",function(data){
        gameState= data.val();
     
    })
}

start(){
if(gameState === 0){
    player= new Player();
form = new Form();
form.display();    
}

}



}