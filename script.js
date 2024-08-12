function cekGanjilGenap(angka) {
    if (angka % 2 === 0) {
        return "genap";
    } else {
        return "ganjil";
    }
}

const mahasiswa = {
    nama: "Ahmad",
    umur: 21,
    cetakMhs() {
        return `Halo nama saya ${this.nama} dan saya berumur ${this.umur} tahun.`;
    }
}

class Orang {
    constructor() {
        console.log(`Objek Orang telah dibuat!`);
    }
}

// Mengekspor fungsi, objek, dan kelas
module.exports = {
    cekGanjilGenap,
    mahasiswa,
    Orang
};
