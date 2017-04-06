
// Create a function called throwDice() that returns a random integer that can only be 1, 2, 3, 4, 5 or 6
function throwDice() {
	var numeroAleatorio = Math.floor((Math.random() * 6) + 1);
	
	return numeroAleatorio;
}
