
const mymap = L.map('issmap').setView([0, 0], 1);
const attribution = 
'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const tileURL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileURL,{attribution});
tiles.addTo(mymap);


// making a marker with a custom icon 
const issicon = L.icon({
  iconUrl:'images/location.png',
  iconSize: [50,32],
  iconAnchor: [25,16]
});

const marker = L.marker([0,0],{icon:issicon}).addTo(mymap);
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
  
  // set this function every 1 seconde
  window.setInterval('getISS()',1000);
  //async the fuction getiss and make wait the fecth to fetch data 
  async function getISS () {
   
if ('geolocation' in navigator) {
console.log("geolocation is avilable")
navigator.geolocation.getCurrentPosition(async position => {
const latitude = position.coords.latitude;
const longitude = position.coords.longitude;
const data = {latitude,longitude};
marker.setLatLng([latitude,longitude])
      mymap.setView([latitude,longitude],15)
});
} else {
alert("please give us the premession from setting up and try again ")
}
  }

getISS()


function SendDataToPostMan () {

const body = document.querySelector("body");
const confirm_BTN = document.getElementById("confirm_BTN");
const yes = document.getElementById("yes");
const no = document.getElementById("no");

yes.onclick = () => {
  yes.classList.add("active")
  no.classList.remove("active")
}
no.onclick = () => {
  no.classList.add("active")
  yes.classList.remove("active")

}
window.onload = () => {
  yes.classList.add("active")
}

confirm_BTN.onclick = (e) => {
  if(no.classList.contains("active")) {
    no.style.setProperty("pointer:events","none");
    

  } else if (yes.classList.contains("active")) {
    // send data to the server and save it in data base but github host deosn't support server side
  }
}
}

SendDataToPostMan()
