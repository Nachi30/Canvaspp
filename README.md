<h1>Canvaspp</h1>
<br>
<h2>ENG</h2> 
<h3>Requisites</h3><br>
&nbsp; Html & JS knowledge.<br>
&nbsp; Canvas Knowledge.<br>
&nbsp; A web explorer (like Chrome or Firefox).<br>
&nbsp; A code editor (like Visual Studio code or Notepad++).<br>
<h3>Download</h3>

First, you click "Clone or download" and "Download ZIP".<br>
Then extract the file "Canvaspp 0.3".<br>
Open the "Canvaspp 0.3" folder.<br>
And copy the "Canvaspp Project TEMPLATE".<br>
Paste it on the desktop, and change the name of the folder to the name of your project.<br>
Then open it with your favourite code editor (in my case Visual studio code).<br>

<h3>FUNCTIONS OF CANVASPP 0.3:</h3>
<b>CHECKING COLLISIONS:</b>
<code></p>canvaspp.collisions.checkCollide(object1x, object1y, object2x, object2y, object1Width, object1Height, object2Width, object2Height)</p></code> ---> This returns a boolean "collision" which you can use in your code.
For example:
<code></p>
 if(collision==true){
 console.log("The collision is real")
 }
 </p></code>
<b>DRAW:</b>
<h5>Drawing sprites</h5>
<code></p>canvaspp.draw.drSprite(image, x, y)</p></code>
<h5>Drawing Color rects</h5>
<code></p>canvaspp.draw.drCRect(x, y, width, height, color)</p></code>
<b>GETTING RANDOM NUMBERS</b>
<code></p>canvaspp.random.randomize(min, max)</p></code>
<b>Play, stop or loop audio</b>
<pre><code>
audio_controller(file, mode)<br>
//To play audio<br>
audio_controller("bgm.mp3", "play")<br>
//To loop audio<br>
audio_controller("bgm.mp3", "loop")<br>
//To stop audio<br>
audio_controller("bgm.mp3", "stop")<br>
</code>
</pre>
<b>Gameloop functions</b>
<pre><code>
<br>
function app_load(){<br>
//Here you can load  the resources & put the events<br>
}<br>
function logic(){<br>
//Here you control the game at every-moment
<br>}<br>
function graphic(){<br>
//Here you draw the elements of your game
<br>}
</code></pre>
