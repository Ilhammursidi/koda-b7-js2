function menghitungDiskon(jumlahPembelian) {
    if (jumlahPembelian < 500000) {
        return (jumlahPembelian);
    } else if (jumlahPembelian < 1000000) {
        return (jumlahPembelian-(jumlahPembelian*0.05));
    } else {
        return (jumlahPembelian-(jumlahPembelian*0.10));
    }
}

console.log(menghitungDiskon(800000));