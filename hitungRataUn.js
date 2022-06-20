const bhsIndonesia = 80
const bhsInggris = 90
const mtk = 89
const ipa = 69

const rata2 = (bhsIndonesia + bhsInggris + mtk + ipa) / 4

if (rata2 >= 90 && rata2 <= 100) {
    console.log("Rata-rata = " + rata2)
    console.log("Grade = A")
}
else if (rata2 >= 80 && rata2 <= 89) {
    console.log("Rata-rata = " + rata2)
    console.log("Grade = B")
}
else if (rata2 >= 70 && rata2 <= 79) {
    console.log("Grade = C")
}
else if (rata2 >= 60 && rata2 <= 69) {
    console.log("Grade = D")
} else {
    console.log("Grade = E")
}