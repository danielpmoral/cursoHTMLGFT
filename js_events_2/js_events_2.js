
/*
Make a web page with a text area and write the characters that are written
in the texarea in the console as soon as they are typed
*/


var myText = document.getElementById("texto");
myText.addEventListener("keypress", handleKeyPress, false);


function handleKeyPress(evento) {
	console.log(evento.key);
}
