/*let user = ("John Doe");
console.log(user); //John Doe


const student = ("Maksim");
console.log(student); // Maksim


user = student;
console.log(user); // Maksim


let test = 1;
 test++;
console.log(test) //2

test += '1';
console.log(test) //21

test--;
console.log(test); //20

test = true;
console.log(typeof test)  // Boolean


let result = 1;
let arr = [2, 3, 5, 8 ]
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i]
    }
    console.log(result) //240



let lol = [2, 5, 8, 15, 0, 6, 20, 3]
    for( let i = 0; i < lol.length; i++) {
        if(lol[i] > 5 && lol[i] < 10) {
            console.log(lol[i]); // 6 8

        }
    }




let num = [2, 5, 8, 15, 0, 6, 20, 3]
    for( let i = 0; i < num.length; i++ )
    {
        if ((num[i] % 2 ) === 0)
        {
            console.log(num[i]); //2 8 0 6 20
        }
}
*/


//Palindrome

function palindrome(str) {
    let strPalindrome = str.split("").reverse("").join("");
    if (strPalindrome === str) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome("radar"));

//Min
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

let result = min(24, 42);
console.log(result);


function isMin(a, b) {
    return a < b ? a : b;
}

let isResultMim = isMin(24, 42);
console.log(isResultMim);

//Max
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let isResult = max(24, 42);
console.log(isResult);


function isMax(a, b) {
    return a > b ? a : b;
}

let isResultMax = isMax(24, 42);
console.log(isResultMax);


let mas = [];
const lowNumber = 0;
const higNumber = 100;
for (let i = 0; i < 10; i++) {
    mas.push(Math.floor(Math.random() * (higNumber + 1) + Math.ceil(lowNumber)));
}
console.log(mas);

function zero(newArray) {
    let masZero = [];
    for (let elementArray of newArray) {
        if (elementArray.toString().includes("0")) {
            elementArray = elementArray.toString();
            let reg = 0;
            elementArray = elementArray.replaceAll(reg, "zero");
        }
        masZero.push(elementArray);
    }
    return masZero;
}

console.log(zero(mas));


function curry(number1) {
    return function (number2) {
        return number1 + number2;
    };

}

console.log(curry(5)(2)); //7


const arrColors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];

const textOne = document.getElementById("text1");
const textTwo = document.getElementById("text2");
const textThree = document.getElementById("text3");

function changeColor() {
    let color = 0;
    return function () {
        this.style.color = arrColors[color];
        color++;
        if (color === arrColors.length) {
            color = 0;
        }
    };
}

textOne.addEventListener("click", changeColor());
textTwo.addEventListener("click", changeColor());
textThree.addEventListener("click", changeColor());





const date = new Date();
console.log(date. getFullYear()); //Год
console.log(date. getMonth());  //Месяц
console.log(date. getDate());   //Дата
console.log(date. getDay());    //День
console.log(date. getHours());  //Час
console.log(date. getMinutes());    //Минуты
console.log(date. getSeconds());    //Секунды
console.log(date. getTime());   //  1605556458000






const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];

function getUserTime(t = new Date()){
    let y = t.getFullYear();
    let m = t.getMonth() +1;
    let d = t.getDate();
    let D = days[t.getDay()];

    console.log(y, m, d, D,);
    return `${d}.${m}.${y}.${D}`;
}

console.log(getUserTime(new Date(1606420458000)));




const data = [
    {
        country: "Russia",
        city: "Saint Petersburg",
        hotel: "Hotel Leopold",
    },
    {
        country: "Spain",
        city: "Santa Cruz de Tenerife",
        hotel: "Apartment Sunshine",
    },
    {
        country: "Slowakia",
        city: "Vysokie Tatry",
        hotel: "Villa Kunerad",
    },
    {
        country: "Germany",
        city: "Berlin",
        hotel: "Hostel Friendship",
    },
    {
        country: "Indonesia",
        city: "Bali",
        hotel: "Ubud Bali Resort&SPA",
    },
    {
        country: "Netherlands",
        city: "Rotterdam",
        hotel: "King Kong Hostel",
    },
    {
        country: "Marocco",
        city: "Ourika",
        hotel: "Rokoko Hotel",
    },
    {
        country: "Germany",
        city: "Berlin",
        hotel: "Hotel Rehberge Berlin Mitte",
    },
];

const newData = [];
const resultOfSearch = [];
for (let i = 0; i < data.length; i++) {
    newData.push(`${data[i].country}, ${data[i].city}, ${data[i].hotel}`);
}

function search(str) {
    for (let g = 0; g < newData.length; g++) {
        if ((newData[g].toLowerCase()).includes(str.toLowerCase())) {
            resultOfSearch.push(newData[g]);
        }
    }
    if (resultOfSearch.length !== 0) {
        console.log(resultOfSearch);
    }
}
search("Russia");





