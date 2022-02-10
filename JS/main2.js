const data = [
 {
  name: 'Hotel Leopold',
  city: 'Saint Petersburg',
  country: 'Russia',
  imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
 },
 {
  name: 'Apartment Sunshine',
  city: 'Santa  Cruz de Tenerife',
  country: 'Spain',
  imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
 },
 {
  name: 'Villa Kunerad',
  city: 'Vysokie Tatry',
  country: 'Slowakia',
  imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
 },
 {
  name: 'Hostel Friendship',
  city: 'Berlin',
  country: 'Germany',
  imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
 },
 {
  name: 'Radisson Blu Hotel',
  city: 'Kyiv',
  country: 'Ukraine',
  imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
 },
 {
  name: 'Paradise Hotel',
  city: 'Guadalupe',
  country: 'Mexico',
  imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
 },
 {
  name: 'Hotel Grindewald',
  city: 'Interlaken',
  country: 'Switzerland',
  imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
 },
 {
  name: 'The Andaman Resort',
  city: 'Port Dickson',
  country: 'Malaysia',
  imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
 },
];

document.getElementById('im').innerHTML = data.map(user =>
    ` <div class="column homes-column__mobail ">
                <img class="img-homes" src= ${user.imageUrl} alt="Photo"/>
                <p class="label-1">${user.name},</p>
                <p class="label-2">${user.city} ${user.country}</p>
            </div>`
).join('')


let offset = 0; // смещение от левого края
const  sliderLine = document. querySelector('.slider-line');


document.querySelector('.next-slide').addEventListener('click', function (){
    offset = offset + 296;
    if (offset > 1300){
        offset = 0;
    }
    sliderLine.style.left = - offset + 'px';
});


 document.querySelector('.end-slide').addEventListener('click', function (){
    offset = offset - 296;
    if (offset < 0){
        offset = 1180;
    }
    sliderLine.style.left = - offset + 'px';
 });










