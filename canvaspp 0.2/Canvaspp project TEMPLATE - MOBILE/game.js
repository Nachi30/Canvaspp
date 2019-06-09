//VARIABLES
var canvas;
var ctx;
//FUNCIONES BÁSICAS
function borraCanvas(){
    canvas.width = 640
    canvas.height = 480

}




//FUNCIONES PRINCIPALES DE CANVASPP

function logic(){
    //Aquí va la logica del juego
    //Tambien podemos poner las primeras funciones
    //CARGAMOS EL CANVAS EN EL LOGIC
    //Despues dibujamos en la funcion "graphic"
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")
    console.log(x)

}
function graphic(){
    //Aquí va todo lo que halla que mostrar
    //Antes de dibujar :
    //Hay que refrescar el canvas con la función "borraCanvas"
    borraCanvas();


}
