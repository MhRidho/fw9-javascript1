let panjang = 5
let hasil = ""
for (let i = panjang; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        hasil = hasil + j + " "
    }
    hasil = hasil + "\n"
}
console.log(hasil)
