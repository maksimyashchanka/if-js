//Header
function view() {
    document.querySelector(".cont").style.display = "block";
};


let count2 = document.getElementById("buttonCountNumber");
let numberAdults = 0;
document.getElementById("adults-button-plus").addEventListener("click", function () {
    if (numberAdults <= 29) {
        numberAdults++;
        count2.innerHTML = numberAdults;
    }
});
document.getElementById("adults-button-minus").addEventListener("click", function () {
    if (numberAdults >= 1) {
        numberAdults--;
        count2.innerHTML = numberAdults;
    }
});





let count1 = document.getElementById("button-count-number");
let numberChildren = 0;
let childrenButtonPlus = document.getElementById("children-button-plus")
let selectWrapper = document.getElementById('select-wrapper');
childrenButtonPlus.addEventListener("click", plusChildren);
childrenButtonPlus.addEventListener("click", ()=>{
    const select = document.createElement('select')
    select.classList.add('select')
    selectWrapper.appendChild(select);
    for (let i = 0; i < 18; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = `${i} years old`;
        select.appendChild(option);
    }

})
document.getElementById("children-button-plus").addEventListener("click", selectOld);


function plusChildren(){
    if (numberChildren <= 16) {
        numberChildren++;
        count1.innerHTML = numberChildren;
    }

}
function selectOld(){
    document.getElementById("cont-visibility").style.display = "block"
}


let childrenButtonMinus = document.getElementById("children-button-minus")

childrenButtonMinus.addEventListener("click", function () {
    if (numberChildren >= 1) {
        numberChildren--;
        count1.innerHTML = numberChildren;
        const select = document.querySelector('.select-wrapper > select:last-child')
        selectWrapper.removeChild(select)
    }
});


let count = document.getElementById("btn-count-number");
let numberRooms = 0;
document.getElementById("rooms-button-plus").addEventListener("click", function () {
    if (numberRooms <= 29) {
        numberRooms++;
        count.innerHTML = numberRooms;
    }
});
document.getElementById("rooms-button-minus").addEventListener("click", function () {
    if (numberRooms >= 1) {
        numberRooms--;
        count.innerHTML = numberRooms;
    }
});











//  const sel = document.getElementById("selectCont");
//  sel.addEventListener("change", function (){
//      console.log(this.value);
//  })
// //
// //
// const select1 = document.getElementById("selectCont");
// const selectChildNodes = select1.childNodes;
// for(let i = 0; i < selectChildNodes.length; i++ ){
//     let node = selectChildNodes[i];
//     console.log(node);
// }









//Homes
const data = [
    {
        name: "Hotel Leopold",
        city: "Saint Petersburg",
        country: "Russia",
        imageUrl: "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg",
    },
    {
        name: "Apartment Sunshine",
        city: "Santa  Cruz de Tenerife",
        country: "Spain",
        imageUrl: "https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg",
    },
    {
        name: "Villa Kunerad",
        city: "Vysokie Tatry",
        country: "Slowakia",
        imageUrl: "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg",
    },
    {
        name: "Hostel Friendship",
        city: "Berlin",
        country: "Germany",
        imageUrl: "https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg",
    },
    {
        name: "Radisson Blu Hotel",
        city: "Kyiv",
        country: "Ukraine",
        imageUrl: "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg",
    },
    {
        name: "Paradise Hotel",
        city: "Guadalupe",
        country: "Mexico",
        imageUrl: "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg",
    },
    {
        name: "Hotel Grindewald",
        city: "Interlaken",
        country: "Switzerland",
        imageUrl: "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg",
    },
    {
        name: "The Andaman Resort",
        city: "Port Dickson",
        country: "Malaysia",
        imageUrl: "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg",
    },
];


document.getElementById("im").innerHTML = data.map(hotel =>
    ` <div class="column homes-column__mobail ">
                <img class="img-homes" src= ${hotel.imageUrl} alt="Photo"/>
                <p class="label-1">${hotel.name},</p>
                <p class="label-2">${hotel.city} ${hotel.country}</p>
            </div>`
).join("");

async function getResponse(){
    let response = await fetch(' https://fe-student-api.herokuapp.com/api/hotels/popular')
    let content = await response.json()
    // console.log(content)
    let list = document.getElementById('im')
     let key;
    for(key in content){
        list.innerHTML += `
        <div id ="im" >
            <img class="imgHomes" src = "${content[key].imageUrl}"/>
            <p class="label-1">${content[key].name},</p>
            <p class="label-2">${content[key].city} ${content[key].country}</p>
          </div>`
        // console.log(content[key])
    }
}
getResponse()



let offset = 0; // смещение от левого края
const sliderLine = document.querySelector(".slider-line");


document.querySelector(".next-slide").addEventListener("click", function () {
    offset = offset + 296;
    if (offset > 3800) {
        offset = 0;
    }
    sliderLine.style.left = -offset + "px";
});


document.querySelector(".end-slide").addEventListener("click", function () {
    offset = offset - 296;
    if (offset < 0) {
        offset = 1560;
    }
    sliderLine.style.left = -offset + "px";
});









