function audio(){
    //Funciones de audio
    function audioController(file, funcion){
        audio = document.createElement("audio")
        document.body.appendChild(audio)
        audio.setAtrribute('src', file)

        if(funcion=="play"){
            audio.play();
        }
        if(funcion=="stop"){
            audio.pause();
            audio.currentTime = 0
        }


    }
}