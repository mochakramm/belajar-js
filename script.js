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

class Buku {
    constructor (judul, penulis ) {
        this._judul = judul
        this._penulis = penulis
    }
    // getter untuk properti judul
    get judul () {
        return this._judul
    }
    // setter untuk properti judul
    set judul (newJudul){
        this._judul = newJudul
    }

    // metode untuk menampilkan informasi buku 
    infobuku(){
        return `Buku : ${this._judul} oleh ${this._penulis}`
    }
}


// Mengekspor fungsi, objek, dan kelas
module.exports = {
    cekGanjilGenap,
    mahasiswa,
    Orang,
    Buku
};
