//AL INICIO
var gamepp = function(){
    this.FPS = 30
    app_load()

    
     
    
    gameLoop = function(){
        
        graphic();
        logic();
    }

    setInterval(gameLoop, 1000 / this.FPS);
}
//FIN DE INICIO
gamepp();
