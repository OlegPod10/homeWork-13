// Задание 1
const carInfo = {
    age: 1994,
    brand: "Audi",
    model: "A6",
    letBrand() {
        return (`Брэнд: ${this.brand}`)
    },
    calcNum: function (a,b) {
        return a + b
    }
}
console.log(carInfo.letBrand())

// // Задание 2
carInfo.contry = "Germany"
carInfo.class = "Business Class"

// Задание 3
console.log(carInfo.calcNum(19, 94));
carInfo.letBrand()

// Задание 4
const userInfo = {
    firstName: "Oleg",
    lastName: "Pod",
    city: "Mogilev",
  };
function objConvert() {
    for (let i in userInfo) {
      return (`${i} : ${userInfo[i]}`);
    }
  }
console.log(objConvert())

// Задание 5

const userInfo = {
  name: "Oleg",
  age: 29,
  address: {
    country: "Mogilev",
    street: "Krypskoy",
  },
  nullKey: null,
};


function letObject() {
  for (let key in userInfo) {
    if (typeof userInfo[key] === "object" || null) {
      return false;
    }
  }
  return true;
}

console.log(letObject());
