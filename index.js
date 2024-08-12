const { cekGanjilGenap, mahasiswa, Orang, Buku } = require('./script.js');

console.log(cekGanjilGenap(3)); // Output: ganjil
console.log(mahasiswa.cetakMhs()); // Output: Halo nama saya Ahmad dan saya berumur 21 tahun.
const orangBaru = new Orang(); // Output: Objek Orang telah dibuat!
//membuat objek baru dari kelas buku
let bukuBaru = new Buku('Belajar JavaScript', 'John Doe');
console.log(bukuBaru.infobuku()); // Output: Buku: Belajar JavaScript oleh John Doe

