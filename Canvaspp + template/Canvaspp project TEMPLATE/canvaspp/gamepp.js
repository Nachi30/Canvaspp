//AL INICIO
var gamepp = function(){
    this.FPS = 30
    logic();
    gameSh = function(){
        graphic()
    }
   
    setInterval(this.gameSh, 1000/FPS)
}
//FIN DE INICIO
gamepp();