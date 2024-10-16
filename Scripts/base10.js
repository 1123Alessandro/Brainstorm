function char2num(char) {
    let num = undefined;
    switch (char) {
        case "A":
            num = 10;
            break;
        case "B":
            num = 11;
            break;
        case "C":
            num = 12;
            break;
        case "D":
            num = 13;
            break;
        case "E":
            num = 14;
            break;
        case "F":
            num = 15;
            break;
        case "G":
            num = 16;
            break;
        case "H":
            num = 17;
            break;
        case "I":
            num = 18;
            break;
        case "J":
            num = 19;
            break;
        case "K":
            num = 20;
            break;
        default:
            num = (+char);
    }
    return num;
}

function base10(radix, number) {
    let i = 0;
    let sum = 0;
    let bias = number.indexOf(".");
    bias = (bias == -1) ? (number + ".").indexOf(".") : bias;
    while (true) {
        sum += char2num(number[i]) * (radix ** (bias-i-1));
        // console.log(`Number: ${number[i]} || Exponent: ${bias-i-1} || current sum: ${sum} \n`);
        i++;
        if (i == bias) { 
            i++;
            break;
        }
    }

    while (i < number.length) {
        sum += char2num(number[i]) * (radix ** (bias-i));
        // console.log(`Number: ${number[i]} || Exponent: ${bias-i} || current sum: ${sum} \n`);
        i++;
    }

    return sum;
}
module.exports = base10;