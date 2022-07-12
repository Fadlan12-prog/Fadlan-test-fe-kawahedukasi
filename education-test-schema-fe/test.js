const arrayToCount = [1, 2, 3, 5, 2, 8, 9, 2];
const i = 2;
const result = arrayToCount.filter(i => i === 2).length;
console.log('total data paling banyak keluar adalah ' + i + ' dengan jumlah ' + result);


function segitiga1(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log('\n');
console.log(segitiga1(6));

function segitiga2(panjang) {
    let hasil = '';
    for (let i = 1; i <= panjang; i++) {
        for (let j = panjang-1; j >= i; j--) {
            hasil += '  ';
        }
        for (let k = 1; k <=i; k++){
            hasil += ' *'
        }
        hasil += '\n';
    }
    return hasil;
}
console.log('\n');
console.log(segitiga2(6));