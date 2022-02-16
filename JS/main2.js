function view() {
    document.querySelector(".cont").style.display = "block";
};


// document.getElementById('number').addEventListener("click", hidden);
// function hidden() {
//     let lol = document.getElementById('.cont');
//     if (lol.style.display =="none"){
//         lol.style.display = "block";
//     } else {
//         lol.style.display = "none"}
// };


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


let offset = 0; // смещение от левого края
const sliderLine = document.querySelector(".slider-line");


document.querySelector(".next-slide").addEventListener("click", function () {
    offset = offset + 296;
    if (offset > 1320) {
        offset = 0;
    }
    sliderLine.style.left = -offset + "px";
});


document.querySelector(".end-slide").addEventListener("click", function () {
    offset = offset - 296;
    if (offset < 0) {
        offset = 1180;
    }
    sliderLine.style.left = -offset + "px";
});


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
document.getElementById("children-button-plus").addEventListener("click", plusChildren);
document.getElementById("children-button-plus").addEventListener("click", selectOld);
// document.getElementById("children-button-plus").addEventListener("click", minusChildren);
// document.getElementById("children-button-minus").addEventListener("click", selectOld1);

function plusChildren(){
    if (numberChildren <= 16) {
        numberChildren++;
        count1.innerHTML = numberChildren;
    }

}
function selectOld(){
    document.getElementById("cont-visibility").style.display = "block"
}


document.getElementById("children-button-minus").addEventListener("click", function () {
    if (numberChildren >= 1) {
        numberChildren--;
        count1.innerHTML = numberChildren;
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






