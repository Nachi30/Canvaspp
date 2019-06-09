function audio(){
    //Funciones de audio
    function audio_controller(file, mode){
      //Cargamos el audio
      audio = new Audio()
      audio.src = file;
      //Detectamos lo que tenemos que hacer con este
      if(mode=="play"){
        audio.play();
      }
      if(mode=="stop"){
        audio.pause();
        audio.currentTime = 0
      }


    }
}
