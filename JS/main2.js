//Header
let button = document.getElementById("btn")
let numberAdults = 1;
let numberChildren = 1;
let numberRooms = 1;
document.getElementById("number").placeholder = `Adults ${numberAdults} — Children ${numberChildren} — Room ${numberRooms}`;

const showHotelsAvailable = (data) => {
    return document.getElementById("im2").innerHTML = data.map(hotel =>
        ` <div class="column homes-column__mobail ">
                <img class="img-homes" src= ${hotel.imageUrl} alt="Photo"/>
                <p class="label-1">${hotel.name},</p>
                <p class="label-2">${hotel.city} ${hotel.country}</p>
            </div>`
    ).join("");

}

const submitForm = () => {

    let search = document.getElementById('search')?.value
    let availableHotel = document.getElementById('search-hotels')
    let sliderData = document.getElementById('im2')

    fetch(`https://fe-student-api.herokuapp.com/api/hotels?search=${search}&adults=${numberAdults}&children=${numberChildren}&rooms=${numberRooms}`)
        .then(data => data.text())
        .then(data => {
            return JSON.parse(data)
        })
        .then(data => {
            availableHotel.classList.remove("available")
            showHotelsAvailable(data)
            data?.length > 0 ? showHotelsAvailable(data) :sliderData.innerHTML = '<p>No data!</p>'
        })


}

button.addEventListener("click", function (event) {
    event.preventDefault()
    submitForm()

})

function view() {
    document.querySelector(".cont").style.display = "block";
}


let count2 = document.getElementById("buttonCountNumber");

document.getElementById("adults-button-plus").addEventListener("click", function () {
    if (numberAdults <= 29) {
        numberAdults++;
        count2.innerHTML = numberAdults;
        document.getElementById("number").placeholder = `Adults ${numberAdults} — Children ${numberChildren} — Room ${numberRooms}`;
    }

});
document.getElementById("adults-button-minus").addEventListener("click", function () {
    if (numberAdults >= 1) {
        numberAdults--;
        count2.innerHTML = numberAdults;
        document.getElementById("number").placeholder = `Adults ${numberAdults} — Children ${numberChildren} — Room ${numberRooms}`;
    }
});


let count1 = document.getElementById("button-count-number");

let childrenButtonPlus = document.getElementById("children-button-plus")
let selectWrapper = document.getElementById('select-wrapper');
childrenButtonPlus.addEventListener("click", plusChildren);
childrenButtonPlus.addEventListener("click", () => {
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


function plusChildren() {
    if (numberChildren <= 16) {
        numberChildren++;
        count1.innerHTML = numberChildren;
        document.getElementById("number").placeholder = `Adults ${numberAdults} — Children ${numberChildren} — Room ${numberRooms}`;
    }

    document.querySelector('.buttonPlus2').textContent
}

function selectOld() {
    document.getElementById("cont-visibility").style.display = "block"
}


let childrenButtonMinus = document.getElementById("children-button-minus")

childrenButtonMinus.addEventListener("click", function () {
    if (numberChildren >= 1) {
        numberChildren--;
        count1.innerHTML = numberChildren;
        const select = document.querySelector('.select-wrapper > select:last-child')
        selectWrapper.removeChild(select)
        document.getElementById("number").placeholder = `Adults ${numberAdults} — Children ${numberChildren} — Room ${numberRooms}`;
    }
});


let count = document.getElementById("btn-count-number");

document.getElementById("rooms-button-plus").addEventListener("click", function () {
    if (numberRooms <= 29) {
        numberRooms++;
        count.innerHTML = numberRooms;
        document.getElementById("number").placeholder = `Adults ${numberAdults} — Children ${numberChildren} — Room ${numberRooms}`;
    }
});
document.getElementById("rooms-button-minus").addEventListener("click", function () {
    if (numberRooms >= 1) {
        numberRooms--;
        count.innerHTML = numberRooms;
        document.getElementById("number").placeholder = `Adults ${numberAdults} — Children ${numberChildren} — Room ${numberRooms}`;
    }
});


const showAllHotels = (data) => {
    document.getElementById("im").innerHTML = data?.map(hotel =>
        ` <div class="column homes-column__mobail ">
                <img class="img-homes" src= ${hotel.imageUrl} alt="Photo"/>
                <p class="label-1">${hotel.name},</p>
                <p class="label-2">${hotel.city} ${hotel.country}</p>
            </div>`
    ).join("");
}


async function getResponse() {
    let response = await fetch(' https://fe-student-api.herokuapp.com/api/hotels/popular')
    let content = await response.json()
    showAllHotels(content)
}

getResponse()


let offset = 0; // смещение от левого края
const sliderLine = document.querySelector(".slider-line");


document.querySelector(".next-slide").addEventListener("click", function () {
    offset = offset + 296;
    if (offset > 3830) {
        offset = 0;
    }
    sliderLine.style.left = -offset + "px";
});


document.querySelector(".end-slide").addEventListener("click", function () {
    offset = offset - 296;
    if (offset < 0) {
        offset = 1810
    }
    sliderLine.style.left = -offset + "px";
});








