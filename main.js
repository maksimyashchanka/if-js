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


const test6 = Boolean ("");
console.log( typeof test6)  // Boolean


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














