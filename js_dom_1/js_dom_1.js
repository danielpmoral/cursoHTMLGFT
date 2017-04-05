
// <p>Paragraph with an <em>emphasized</em> word and <strong>others more emphasized </strong></p>

var strTextoStrong = document.createTextNode("others more emphasized ");
var strTextoEm = document.createTextNode("emphasized");
var strTextoOne = document.createTextNode("Paragraph with an ");
var strTextoTwo = document.createTextNode(" word and ");

var eParrafo = document.createElement("p");
eParrafo.appendChild(strTextoOne);

var eEm = document.createElement("em");
eEm.appendChild(strTextoEm);
eParrafo.appendChild(eEm);

eParrafo.appendChild(strTextoTwo);

var eStrong = document.createElement("strong");
eStrong.appendChild(strTextoStrong);
eParrafo.appendChild(eStrong);

document.body.appendChild(eParrafo);
