// let user = ("John Doe");
// console.log(user); //John Doe
//
//
// const student = ("Maksim");
// console.log(student); // Maksim
//
//
// user = student;
// console.log(user); // Maksim
//
//
// let test = 1;
//  test++;
// console.log(test) //2
//
// test += '1';
// console.log(test) //21
//
// test--;
// console.log(test); //20
//
// test = true;
// console.log(typeof test)  // Boolean
//
//
// let result = 1;
// let arr = [2, 3, 5, 8 ]
//     for (let i = 0; i < arr.length; i++) {
//         result *= arr[i]
//     }
//     console.log(result) //240
//
//
//
// let lol = [2, 5, 8, 15, 0, 6, 20, 3]
//     for( let i = 0; i < lol.length; i++) {
//         if(lol[i] > 5 && lol[i] < 10) {
//             console.log(lol[i]); // 6 8
//
//         }
//     }
//
//
//
//
// let num = [2, 5, 8, 15, 0, 6, 20, 3]
//     for( let i = 0; i < num.length; i++ )
//     {
//         if ((num[i] % 2 ) === 0)
//         {
//             console.log(num[i]); //2 8 0 6 20
//         }
// }
// */
//
//
// //Palindrome
//
// function palindrome(str) {
//     let strPalindrome = str.split("").reverse("").join("");
//     if (strPalindrome === str) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// console.log(palindrome("radar"));
//
// //Min
// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
//
// let result = min(24, 42);
// console.log(result);
//
//
// function isMin(a, b) {
//     return a < b ? a : b;
// }
//
// let isResultMim = isMin(24, 42);
// console.log(isResultMim);
//
// //Max
// function max(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }
//
// let isResult = max(24, 42);
// console.log(isResult);
//
//
// function isMax(a, b) {
//     return a > b ? a : b;
// }
//
// let isResultMax = isMax(24, 42);
// console.log(isResultMax);
//
//
// let mas = [];
// const lowNumber = 0;
// const higNumber = 100;
// for (let i = 0; i < 10; i++) {
//     mas.push(Math.floor(Math.random() * (higNumber + 1) + Math.ceil(lowNumber)));
// }
// console.log(mas);
//
// function zero(newArray) {
//     let masZero = [];
//     for (let elementArray of newArray) {
//         if (elementArray.toString().includes("0")) {
//             elementArray = elementArray.toString();
//             let reg = 0;
//             elementArray = elementArray.replaceAll(reg, "zero");
//         }
//         masZero.push(elementArray);
//     }
//     return masZero;
// }
//
// console.log(zero(mas));
//
//
// function curry(number1) {
//     return function (number2) {
//         return number1 + number2;
//     };
//
// }
//
// console.log(curry(5)(2)); //7
//
//
//  const arrColors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];
//
//  const textOne = document.getElementById("text1");
//  const textTwo = document.getElementById("text2");
//  const textThree = document.getElementById("text3");
//
//  function changeColor() {
//      let color = 0;
//     return function () {
//          this.style.color = arrColors[color];
//          color++;
//          if (color === arrColors.length) {
//              color = 0;
//          }
//      };
//  }
//
//  textOne.addEventListener("click", changeColor());
//  textTwo.addEventListener("click", changeColor());
//  textThree.addEventListener("click", changeColor());
//
//
//  const date = new Date();
//  console.log(date. getFullYear()); //Год
//  console.log(date. getMonth());  //Месяц
//  console.log(date. getDate());   //Дата
//  console.log(date. getDay());    //День
//  console.log(date. getHours());  //Час
//  console.log(date. getMinutes());    //Минуты
//  console.log(date. getSeconds());    //Секунды
//  console.log(date. getTime());   //  1605556458000
//
//
//
//
//
//
//  const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
//
//  function getUserTime(t = new Date()){
//      let y = t.getFullYear();
//      let m = t.getMonth() +1;
//      let d = t.getDate();
//      let D = days[t.getDay()];
//
//      console.log(y, m, d, D,);
//     return `${d}.${m}.${y}.${D}`;
//  }
//
//  console.log(getUserTime(new Date(1606420458000)));
//
//
//  const data = [
//      {
//          country: "Russia",
//          city: "Saint Petersburg",
//          hotel: "Hotel Leopold",
//      },
//      {
//          country: "Spain",
//          city: "Santa Cruz de Tenerife",
//          hotel: "Apartment Sunshine",
//      },
//      {
//          country: "Slowakia",
//          city: "Vysokie Tatry",
//          hotel: "Villa Kunerad",
//      },
//      {
//          country: "Germany",
//          city: "Berlin",
//         hotel: "Hostel Friendship",
//      },
//      {
//          country: "Indonesia",
//          city: "Bali",
//          hotel: "Ubud Bali Resort&SPA",
//      },
//      {
//          country: "Netherlands",
//          city: "Rotterdam",
//          hotel: "King Kong Hostel",
//      },
//     {
//          country: "Marocco",
//          city: "Ourika",
//          hotel: "Rokoko Hotel",
//      },
//      {
//          country: "Germany",
//          city: "Berlin",
//          hotel: "Hotel Rehberge Berlin Mitte",
//      },
//  ];
//
//  const newData = [];
//  const resultOfSearch = [];
//  for (let i = 0; i < data.length; i++) {
//      newData.push(`${data[i].country}, ${data[i].city}, ${data[i].hotel}`);
//  }
//
//  function search(str) {
//      for (let g = 0; g < newData.length; g++) {
//         if ((newData[g].toLowerCase()).includes(str.toLowerCase())) {
//              resultOfSearch.push(newData[g]);
//          }
//      }
//      if (resultOfSearch.length !== 0) {
//          console.log(resultOfSearch);
//      }
//  }
//  search("Russia");
//
//  function isPalindrom(t){
//      return t === t.split("").reverse().join("");
//  }
//
//  console.log(isPalindrom("madam"));
//
//  const hotels = [
//     {
//          name: 'Hotel Leopold',
//          city: 'Saint Petersburg',
//          country: 'Russia',
//     },
//      {
//          name: 'Apartment Sunshine',
//          city: 'Santa Cruz de Tenerife',
//          country: 'Spain',
//      },
//      {
//         name: 'Villa Kunerad',
//          city: 'Vysokie Tatry',
//          country: 'Slowakia',
//      },
//      {
//          name: 'Hostel Friendship',
//          city: 'Berlin',
//          country: 'Germany',
//      },
//      {
//          name: 'Radisson Blu Hotel',
//          city: 'Kyiv',
//          country: 'Ukraine',
//      },
//      {
//          name: 'Paradise Hotel',
//          city: 'Guadalupe',
//          country: 'Mexico',
//      },
//      {
//          name: 'Hotel Grindewald',
//          city: 'Interlaken',
//         country: 'Switzerland',
//      },
//      {
//          name: 'The Andaman Resort',
//          city: 'Port Dickson',
//          country: 'Malaysia',
//      },
//      {
//          name: 'Virgin Hotel',
//          city: 'Chicago',
//          country: 'USA',
//      },
//      {
//         name: 'Grand Beach Resort',
//          city: 'Dubai',
//          country: 'United Arab Emirates',
//      },
//      {
//          name: 'Shilla Stay',
//          city: 'Seoul',
//          country: 'South Korea',
//      },
//      {
//          name: 'San Firenze Suites',
//          city: 'Florence',
//          country: 'Italy',
//      },
//      {
//          name: 'The Andaman Resort',
//          city: 'Port Dickson',
//          country: 'Malaysia',
//      },
//      {
//          name: 'Black Penny Villas',
//          city: 'BTDC, Nuca Dua',
//          country: 'Indonesia',
//      },
//      {
//          name: 'Koko Hotel',
//          city: 'Tokyo',
//         country: 'Japan',
//      },
//      {
//          name: 'Ramada Plaza',
//          city: 'Istanbul',
//          country: 'Turkey',
//      },
//      {
//          name: 'Waikiki Resort Hotel',
//          city: 'Hawaii',
//          country: 'USA',
//      },
//      {
//          name: 'Puro Hotel',
//          city: 'Krakow',
//          country: 'Poland',
//      },
//      {
//          name: 'Asma Suites',city: 'Santorini',
//          country: 'Greece',
//      },
//      {
//          name: 'Cityden Apartments',
//          city: 'Amsterdam',
//          country: 'Netherlands',
//      },
//      {
//          name: 'Mandarin Oriental',
//          city: 'Miami',
//          country: 'USA',
//      },
//      {
//          name: 'Concept Terrace Hotel',
//          city: 'Rome',
//          country: 'Italy',
//      },
//      {
//          name: 'Ponta Mar Hotel',
//          city: 'Fortaleza',
//          country: 'Brazil',
//      },
//      {
//          name: 'Four Seasons Hotel',
//         city: 'Sydney',
//          country: 'Australia',
//      },
//      {
//          name: 'Le Meridien',
//          city: 'Nice',
//          country: 'France',
//      },
//      {
//          name: 'Apart Neptun',
//          city: 'Gdansk',
//          country: 'Poland',
//      },
//      {
//          name: 'Lux Isla',
//          city: 'Ibiza',
//          country: 'Spain',
//      },
//      {
//          name: 'Nox Hostel',
//          city: 'London',
//          country: 'UK',
//      },
//      {
//          name: 'Leonardo Vienna',
//          city: 'Vienna',
//          country: 'Austria',
//      },
//      {
//          name: 'Adagio Aparthotel',
//          city: 'Edinburgh',
//          country: 'UK',
//      },
//      {
//          name: 'Steigenberger Hotel',
//          city: 'Hamburg',
//          country: 'Germany',
//      },
//  ];
//
//  const separatedBetweenCounties = {};
//  hotels.forEach(el => {
//  if (separatedBetweenCounties[el.country] && !separatedBetweenCounties[el.country].includes(el.city)) {
//          separatedBetweenCounties[el.country].push(el.city);
//      }
//      else {
//          separatedBetweenCounties[el.country] = [el.city];
//      }
//  })
//  console.log(separatedBetweenCounties);
//
//
// const res = [];
// function getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek) {
//     let weekInMonth = Math.ceil(daysInMonth/daysInWeek - 1);
//     if (daysInMonth === 28) {
//         weekInMonth = 5;
//     }
//     const arrDays = []  ;
//     for (let i = 1; i <= daysInMonth; i++) {
//         arrDays.push(String(i))
//     }
//     for (let i = 0; i < dayOfWeek; i++) {
//         arrDays.unshift(arrDays.pop());
//     }
//     for (let i = 0; i < Math.ceil(arrDays.length/daysInWeek); i++) {
//         res.push(arrDays.slice(i*daysInWeek, i*daysInWeek + daysInWeek));
//     }
//     for (let i = 0; i <= dayOfWeek; i++) {
//         res[weekInMonth].push(arrDays[i])
//     }
//     return res
// }
//
// console.log(getCalendarMonth(31,7,5));
//
//
//
// const obj1 = {
//     a: 'a',
//     b: {
//         a: 'a',
//         b: 'b',
//         c: {
//             a: 1,
//         },
//     },
// };
// const obj2 = {
//     b: {
//         c: {
//             a: 1,
//         },
//         b: 'b',
//         a: 'a',
//     },
//     a: 'a',
// };
// const obj3 = {
//     a: {
//         c: {
//             a: 'a',
//         },
//         b: 'b',
//         a: 'a',
//     },
//     b: 'b',
// };

// const deepEqual = (object1, object2) => {
//     let obj1 = JSON.stringify(object1).split('').sort().join('');
//     let obj2 = JSON.stringify(object2).split('').sort().join('');
//     console.log(obj1 === obj2);
// }
//
// deepEqual(obj1, obj2); // true
// deepEqual(obj1, obj3); // false


// const studentsData = [
//     {
//         firstName: "Василий",
//         lastName: "Петров",
//         admissionYear: 2019,
//         courseName: "Java",
//     },
//     {
//         firstName: "Иван",
//         lastName: "Иванов",
//         admissionYear: 2018,
//         courseName: "JavaScript",
//     },
//     {
//         firstName: "Александр",
//         lastName: "Федоров",
//         admissionYear: 2017,
//         courseName: "Python",
//     },
//     {
//         firstName: "Николай",
//         lastName: "Петров",
//         admissionYear: 2019,
//         courseName: "Android",
//     },
// ];
//
//
// class User {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//
//     get fullName() {
//         return this.firstname + " " + this.lastname;
//     }
// }
//
// class Student extends User {
//     constructor({ firstName, lastName, admissionYear, courseName }) {
//         super(firstName, lastName);
//         this.admissionYear = admissionYear;
//         this.courseName = courseName;
//     }
//
//     get fullname() {
//         return super.fullName;
//     }
//
//     get course() {
//         const currentYear = new Date().getFullYear();
//         return currentYear - this.admissionYear;
//     }
// }
//
// class Students {
//     constructor(students) {
//         this.students = students;
//     }
//
//     sortByCourse = () => this.students.sort((a, b) => a.course - b.course);
//
//     getInfo() {
//         return this.students.forEach((student) => {
//             console.log(
//                 `${student.fullname} - ${student.courseName}, ${student.course } курс `
//             );
//         });
//     }
// }
// const studentInstances = studentsData.map((student) => new Student(student));
// const students = new Students(studentInstances);
// students.sortByCourse();
// students.getInfo();



// const colors = {
//     data: ["magenta", "cyan", "firebrick", "springgreen", "skyblue"],
// };
// function* gen() {
//     for(let element of colors.data){
//         yield element;
//     }
// }
// function changeStyle() {
//     let index = 1;
//     return function () {
//         let iterator = gen();
//         for(let i = 0; i < index; i++){
//             this.style.color = iterator.next().value;
//         }
//         iterator.next().done ? index = 1 : index++;
//     };
// }
//
// document.getElementById("text1").addEventListener("click", changeStyle());
// document.getElementById("text2").addEventListener("click", changeStyle());
// document.getElementById("text3").addEventListener("click", changeStyle());






