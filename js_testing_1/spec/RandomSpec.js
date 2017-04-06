
describe("Testing function called throwDice()", function() {

	it("Testing it does not return null", function() {
		expect(throwDice()).not.toBeNull();
	});

	it("Testing it does return an integer", function() {
		expect(throwDice()).toEqual(jasmine.any(Number));
		expect(throwDice()).not.toMatch(/\./);
	});
	
	it("Testing it returns a number greater than zero", function() {
		expect(throwDice()).toBeGreaterThan(0);
	});
	
	it("Testing it returns a number less than seven", function() {
		expect(throwDice()).toBeLessThan(7);
	});
	
	it("Testing other test, it does not return undefined", function() {
		expect(throwDice()).toBeDefined();
	});
	
	// Create a custom match and use it for some test of function throwDice()
	/*
	it("Testing it does not return null", function() {
		expect(throwDice()).toEqual(8);
	});
	*/
});

