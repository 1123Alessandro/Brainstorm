function num2char(num) {
	let char = undefined;
	switch (num) {
		case 10:
			char = "A";
			break;
		case 11:
			char = "B";
			break;
		case 12:
			char = "C";
			break;
		case 13:
			char = "D";
			break;
		case 14:
			char = "E";
			break;
		case 15:
			char = "F";
			break;
		case 16:
			char = "G";
			break;
		case 17:
			char = "H";
			break;
		case 18:
			char = "I";
			break;
		case 19:
			char = "J";
			break;
		case 20:
			char = "K";
			break;
		default:
			char = `${num}`;
	}
	return char;
}

function rand_digit(base) {
	let x = Math.random() * base;
	return num2char(Math.floor(x));
}

function random_number(base, length, decimals) {
	let s = "";
	for (let i = 0; i < length; i++) {
		s += rand_digit(base);
		if (i == (length-decimals-1) && decimals > 0) {
			s += ".";
		}
	}
	return s;
}
module.exports = random_number;