
/*
Make a web page with two buttons, if button1 is pushed an alert with the message "Button 1 pushed" must appear and if button2 is pushed an alert with the message "Button 2 pushed"
Try to do it with only one handler function
*/


var myButton1 = document.getElementById("boton1");
myButton1.addEventListener("click", handleClick, false);
var myButton2 = document.getElementById("boton2");
myButton2.addEventListener("click", handleClick, false);


function handleClick(evento) {
	alert("Button " + evento.target.value + " pushed");
}
