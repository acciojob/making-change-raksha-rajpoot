const makeChange = (c) => {
  // your name here
	let change = { q:0, d:0, n:0, p:0};

	const Quater= 25;
	const Dime=10;
	const Nickel=5;
	const Penny=1;

	change.q = Math.floor(c/Quater);
	c%=Quater;

	change.d = Math.floor(c/Dime);
	c%=Dime;

	change.n = Math.floor(c/Nickel);
	c%=Nickel;

	change.p = Math.floor(c/Penny);
	c%=Penny;

	return change;
};

// Do not the change the code below
const c = prompt("Enter c: ");    
alert(JSON.stringify(makeChange(c)));
