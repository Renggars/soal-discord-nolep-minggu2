let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

input.splice(1,4,'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung','21/05/1989', 'Pria', 'SMA Internasional Metro');

console.log(input);

let mei = input[3];
if (mei[3]) {
    console.log('Mei')
}

if (mei) {
    console.log(['1989', '21', '05'])
}

if (input[3]) {
    console.log('21-05-1989')
}

function limit (string = '', limit = 15) {
    return string.substring(0,limit);
}
console.log(limit(input[1]))


//  * keluaran yang diharapkan (pada console)
//  *
//  * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
//  * Mei
//  * ["1989", "21", "05"]
//  * 21-05-1989
//  * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
