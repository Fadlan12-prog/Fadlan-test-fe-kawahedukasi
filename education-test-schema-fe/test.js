const arrayToCount = [1, 2, 3, 5, 2, 8, 9, 2];
const i = 2;
const result = arrayToCount.filter(i => i === 2).length;
console.log('total data paling banyak keluar adalah ' + i + ' dengan jumlah ' + result);


function leftTriangle(long) {
    let result = '';
    for (let i = 0; i < long; i++) {
        for (let j = 0; j <= i; j++) {
            result += '* ';
        }
        result += '\n';
    }
    return result;
}
console.log('\n');
console.log(leftTriangle(6));

function rightTriangle(long) {
    let result = '';
    for (let i = 1; i <= long; i++) {
        for (let j = long-1; j >= i; j--) {
            result += '  ';
        }
        for (let k = 1; k <=i; k++){
            result += ' *'
        }
        result += '\n';
    }
    return result;
}
console.log('\n');
console.log(rightTriangle(6));