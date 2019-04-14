function collisions(){
    //Maneja colisiones con distintos tipos de fisicas
    this.checkCollide = function(x, y, x2, y2, ancho1, largo1, ancho2, largo2){
        collision = null;
        distance1 = x+ancho1-x2+ancho2
        distance2 = x2+ancho2-x+ancho1
        distance3 = y+largo1-y2+largo2
        distance4 = y2+largo2-y+largo1

        if(distance1==0){
            collision = true;
            return collision;
        }
        if(distance2==0){
            collision = true;
            return collision;
        }
        if(distance3==0){
            collision = true;
            return collision;
        }
        if(distance4==0){
            collision = true;
            return collision;
        }
        
    }
}