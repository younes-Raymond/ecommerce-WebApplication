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
  
  // set this function every 1seconde
  window.setInterval('getISS()',1000);
  //async the fuction getiss and make wait the fecth to fetch data 
  async function getISS () {


   //    const response = await fetch(api_url);
   //    const data = await response.json();
   //    const {latitude,longitude} = data;
   
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

