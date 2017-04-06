
var listaPrecios = {"ALFA ROMEO": {"STELVIO": 38382.51, "GIULIA": 22037.36},
                    "AUDI": {"A4": 33000.00, "A3": 20254.97}};

var myButton = document.getElementById("precio");
myButton.addEventListener("click", handleClick, false);


function handleClick() {
	var strMarca = document.getElementById("marca").value;
	var strModelo = document.getElementById("modelo").value;
	var nPrecio = 0;

	if (strMarca != null && strMarca != undefined && strMarca != "" &&
	    strModelo != null && strModelo != undefined && strModelo != "") {
		try {
			nPrecio = eval("listaPrecios." + strMarca.toUpperCase() + "." + strModelo.toUpperCase());
		} catch(err) {
			nPrecio = 0;
		}
		if (nPrecio > 0) {
			alert("El precio del veh\u00edculo con marca: " + strMarca + " y modelo: " + strModelo + " es: " + nPrecio + "\u20ac");
		} else {
			alert("Actualmente no tenemes el precio de ese coche.");
		}
	}
}
