//Объекты

// const someCustomer = {
//     accountNumber: 123456,
//     balance: 123,
//     walleSymbol: "$",
//     name: "Any Customer"
// }

// console.log(someCustomer.balance);//123
// console.log(someCustomer['name']);//Any Customer
// console.log(someCustomer['none']);//undefined
//console.log(someCustomer['none'].toUpperCase);//Error

//Для проверки существует ли свойство в объекте

// if (someCustomer.name) {
//     console.log("exist");
// } else {
//     console.log(" not exist?");
// }

//Для проверки есть ли поле в объекте

// someCustomer.index = 0;
// console.log('index' in someCustomer);
// console.log('none' in someCustomer);

//Для перебора ключей объекта

// for (let key in someCustomer) {
//     console.log(key, someCustomer[key]);
// }

//Получить массив ключей

// const keys = Object.keys(someCustomer);
// console.log(keys);
// keys.forEach(console.log);

//Методы - функции внутри объектов

// const someCustomer = {
//     accountNumber: 123456,
//     balance: 123,
//     walleSymbol: "$",
//     firstName: "Any",
//     lastName: "Customer",
//     showFullName : () => {
//         const { firstName = '', lastName = ''} = someCustomer;//деструктуризация
//         console.log(`${firstName} ${lastName}`)
//     }
// }
// someCustomer.showFullName();

//this для объктов созданных автоматически или получены с сервера (=> не исп.)

// const someCustomer = {
//     accountNumber: 123456,
//     balance: 123,
//     walleSymbol: "$",
//     firstName: "Any",
//     lastName: "Customer",
//     showFullName: function () {
//         const { firstName = '', lastName = '' } = this;
//         console.log(`${firstName} ${lastName}`)
//     }
// }
// someCustomer.showFullName();

//Классы для объектов одного типа

class Customer {
    constructor(
        balance = 0,
        firstName = '',
        lastName = '',
        accountNumber = -1,
    ) {
        this.balance = balance;
        this.firstName = firstName;
        this.lastName = lastName;
        this.accountNumber = accountNumber;
    }
    showFullName() {
        console.log(this)
    }
}
const someCustomer = new Customer();
console.log(someCustomer);