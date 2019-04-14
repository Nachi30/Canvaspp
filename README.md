<h1>Canvaspp</h1>
<br>
<h2>ENG</h2> 
<h3>Requisites</h3><br>
&nbsp; Html & JS knowledge.<br>
&nbsp; A web explorer (like Chrome or Firefox).<br>
&nbsp; A code editor (like Visual Studio code or Notepad++).<br>
<h3>Download</h3>

First, you click "Clone or download" and "Download ZIP".<br>
Then extract the file "Canvaspp-master".<br>
Open the "Canvaspp + Template" folder.<br>
And copy the "Canvaspp Project TEMPLATE".<br>
Paste it on the desktop, and change the name of the folder to "My first game".<br>
Then open it with your favourite code editor (in my case Visual studio code).<br>
<h3>A small look</h3>
<img src="https://i.imgur.com/gVOGfst.png"></img><br>
 &nbsp; First we open the "index.html" file.<br>
<img src=https://i.imgur.com/uwJhK9r.png"></img><br>
&nbsp; In this file, the game load all the Canvaspp libraries to work.<br>
&nbsp; Also you can edit the "width" & the "height" of the canvas to set your game's resolution.
                                                   
<h3>A small look to "game.js"</h3>
<img src="https://i.imgur.com/F6gyavB.png"></img>
<h3>Basic functions of CANVASPP</h3>
&nbsp; logic() - In this funcion is all the logic of the game, for example: movement & events.
<br>
&nbsp; graphic() - In this function is all the things that the game needs to draw, for example: Player & enemys.
<br>
&nbsp; canvaspp.draw.drSprite(image, x, y) - This function is used to draw sprites.
<br>
&nbsp; canvaspp.draw.drCRect(x, y, width, height, color) - This function is used to draw color rects.
<br>
&nbsp; canvaspp.collisions.checkCollide(x, y, x2, y2, width, height, width2, height2) - This funcion is used to check collisions between &nbsp; 2 objects. Then you can make an if to say what is going to happen.<br>
&nbsp; AUDIO FUNCTIONS:<br>
&nbsp; Comming soon, the audio functions were not tested.
