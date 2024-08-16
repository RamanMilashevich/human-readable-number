module.exports = function toReadable (number) {
    const numbersText_1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const numbersText_2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const numbersText_3 = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    const numbersText_11_19 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const numbersText_10 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


    if (number < 0 || number > 999) {
        return 'Number out of range';
    }

    if (number === 0) {
        return 'zero';
    }

    const numStr = number.toString();
    let result = '';

    if (numStr.length === 3) {
        const hundredDigit = parseInt(numStr[0]);
        const tenDigit = parseInt(numStr[1]);
        const oneDigit = parseInt(numStr[2]);

        result = numbersText_3[hundredDigit - 1];
        
        if (tenDigit === 1 && oneDigit > 0) {
            result += ' ' + numbersText_11_19[oneDigit - 1];
        } else if (tenDigit >= 1 && oneDigit === 0) {
            result += ' ' + numbersText_10[tenDigit - 1];
        } else {
            if (tenDigit > 1) {
                result += ' ' + numbersText_2[tenDigit];
            }
            if (oneDigit > 0) {
                result += ' '  + numbersText_1[oneDigit - 1];
            }

        }
        return result.trim();
    }

    if (numStr.length === 2) {
        const tenDigit = parseInt(numStr[0]);
        const oneDigit = parseInt(numStr[1]);

        if (tenDigit === 1 && oneDigit > 0) {
            return numbersText_11_19[oneDigit - 1];
        }

        if (tenDigit > 1) {
            let result = numbersText_2[tenDigit];
            if (oneDigit > 0) {
                result += ' ' + numbersText_1[oneDigit - 1];
            }
            return result.trim();
        }
        
        if (tenDigit === 1 && oneDigit === 0) {
            return 'ten';
        }
    }

    if (numStr.length === 1) {
        const oneDigit = parseInt(numStr[0]);
        if (oneDigit === 0) return 'zero';
        return numbersText_1[oneDigit - 1];
    }

    return 'Invalid number';

}
