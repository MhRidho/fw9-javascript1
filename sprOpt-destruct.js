let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulkas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    hobby: "Drawing"
}
data.name = "Muhammad Ridho"
data.username = "Ridho"
data.email = "rmuhammad952@gmail.com"
data.hobby = "Coders"

// Desructuring data street
const street = data.address
const street1 = street.street

// Desructuring data city
const city = data.address
const city3 = city.city

// cetak hasil Desructuring street dan city
console.log(street1)
console.log(city3)