let user = ("John Doe");
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

let isResultat = min(24, 42);
console.log(isResultat);


function isMin(a, b) {
    return a < b ? a : b;
}

let isResulMim = isMin(24, 42);
console.log(isResulMim);

//Max
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let isResu = max(24, 42);
console.log(isResu);


function isMax(a, b) {
    return a > b ? a : b;
}

let isResMax = isMax(24, 42);
console.log(isResMax);




let mas = [];
const lowNumber = 0;
const higNumber = 100;
for(let i = 0; i < 10; i++){
    mas.push(Math.floor(Math.random() * (higNumber + 1) + Math.ceil(lowNumber)));
}
console.log(mas);
function zero(newArray){
    let masZero = [];
    for(let elementArray of newArray){
        if(elementArray.toString().includes("0")){
            elementArray = elementArray.toString();
            let reg = 0;
            elementArray = elementArray.replaceAll(reg, "zero");
        }
        masZero.push(elementArray);
    }
    return masZero;
}
console.log(zero(mas));



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



