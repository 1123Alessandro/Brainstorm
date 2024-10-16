function test() {
	let s = "0098";
	let x = +("1" + s.slice(2));
	return x/2;
}

module.exports = test;