let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

input.splice(1,4,'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung','21/05/1989', 'Pria', 'SMA Internasional Metro');

console.log(input);

let bulan = input[3].split('/')[1]
switch(bulan) {
    case '01' :
        console.log('Januari');
        break;
    case '02' :
        console.log('Februari');
        break;
    case '03' :
        console.log('Maret');
        break;
    case '04' :
        console.log('April');
        break;
    case '05' :
        console.log('Mei');
        break;
    case '06' :
        console.log('Juni');
        break;
    case '07' :
        console.log('Juli');
        break;
    case '08' :
        console.log('Agustus');
        break;
    case '09' :
        console.log('September');
        break;
    case '10' :
        console.log('Oktober');
        break;
    case '11' :
        console.log('November');
        break;
    case '12' :
        console.log('Desember');
        break;
}

// let mei = input[3];
// if (mei[3]) {
//     console.log('Mei')
// } awkwkwkwk

let array = input[3].split('/')
console.log([array[2], array[0], array[1]])
// if (mei) {
//     console.log(['1989', '21', '05'])
// }

let ubah = input[3].split('/').join('-')
console.log(ubah);

// if (input[3]) {
//     console.log('21-05-1989')
// }

let nama = input[1].substring(0,15);
console.log(nama)
// function limit (string = '', limit = 15) {
//     return string.substring(0,limit);
// }
// console.log(limit(input[1]))


//  * keluaran yang diharapkan (pada console)
//  *
//  * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
//  * Mei
//  * ["1989", "21", "05"]
//  * 21-05-1989
//  * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
