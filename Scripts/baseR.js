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

function baseR(base, number, decs) {
    let s = "";
    let period = number.indexOf(".");
    let whole = number.slice(0, period);
    let frac = +("0" + number.slice(period));
    while (whole != 0) {
        let x = whole % base
        s = num2char(x) + s;
        whole = Math.floor(whole/base);
    }
    s += ".";
    let i = 0;
    while (i < decs) {
        let x = Math.floor(frac * base);
        s += num2char(x);
        frac = (frac * base) - x;
        i++;
    }

    return s;
}
module.exports = baseR;