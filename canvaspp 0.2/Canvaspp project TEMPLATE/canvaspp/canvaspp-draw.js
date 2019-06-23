function draw(){
    
    this.drSprite = function (image, x, y){
        ctx.drawImage(image, x, y)

    }
    
    this.drCRect = function(x, y, ancho, largo, color){
        ctx.fillStyle = color;
        ctx.fillRect(x, y, ancho, largo);

    }
}