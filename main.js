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


// 10 случайных чисел
let arr = [];
while (arr.length < 10) {
    let r = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);







