//Строка с  заглавной буквы
function toCapitalize(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase();
}
console.log(toCapitalize('hello world'));
console.log(toCapitalize('hello World'));

//Возведение в степень
function pow(x, y) {
    let _x = 1;
    for (let i = 0; i < y; i++) {
        _x *= x;
    }
    return _x;
}
console.log(pow(2, 3));
console.log(pow(4, 2));

//Проверка на палиндром
function isPalindrom(str) {
    let x = '';
    for (let i = 0; i < str.length; i++) {
        x += str[str.length - 1 - i]
    }
    return str.toLowerCase() === x.toLowerCase();
}
console.log(isPalindrom('hahah'));
console.log(isPalindrom('aaaccfsdg'));

//Факториал
function factorial(n = 1) {
    let f = n;
    while (--n) {
        f *= n;
    }
    return f;
}
console.log(factorial(5));

//Генератор целых случайных чисел в заданном диапазоне
function randomInt(a = 0, b = 1) {
    const max = b - a;
    return Math.round(max * Math.random() + a);
}

for (let i = 10; i--;) {
    console.log(randomInt(0, 10));
}

//Перевод единиц времени
function timeTransform(value = [], need = 's') {
    let currrent = value[value.length - 1];
    value = parseFloat(value);

    if (currrent === 's') {
        if (need === 'h') {
            return `${value / (60 * 60)} h`;
        } else if (need === 'm') {
            return `${value / 60} m`
        }
    } else if (currrent === 'm') {
        if (need === 'h') {
            return `${value / 60} h`;
        } else if (need === 's') {
            return `${value * 60} s`
        }
    } else if (currrent === 'h') {
        if (need === 'm') {
            return `${value * 60} m`;
        } else if (need === 's') {
            return `${value * 60 * 60} s`
        }
    } else {
        throw 'Error format';
    }
    return value;
}

console.log(timeTransform('3600s', 'h'));
console.log(timeTransform('3600s', 'm'));
console.log(timeTransform('60m', 'h'));
console.log(timeTransform('1.5m', 's'));