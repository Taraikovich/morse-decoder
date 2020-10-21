const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let text = [];
    let temp = '';
    
    while (expr.length > 0) {
        arr.push(expr.substring(0, 10));
        expr = expr.substring(10, expr.length);
    }

    for (i = 0; i < arr.length; i++) {
            if (temp === ' ') {
                text.push(' ');
            } else {
                text.push( MORSE_TABLE[temp] );
            }
            temp = '';
            for (j = 0; j < arr[i].length; j += 2) {
                if (arr[i] === '**********') {
                    temp = ' ';
                } else {
                    if (arr[i].substring(j, j + 2) === '10') {
                        temp += '.';
                    } else if (arr[i].substring(j, j + 2) === '11') {
                        temp += '-';
                    } else {
                        temp += '';
                    }
                }
            }
        }
        text.push( MORSE_TABLE[temp] );
        return text.join('');
}

module.exports = {
    decode
}