const API_KEY = "9f2239b1b04e6dc69669373b43276c41"
const emoji = ''

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = 
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => { 
          const weather = document.querySelector("#weather span:first-child")
          const city = document.querySelector("#weather span:nth-child(2)")
          const temperature = document.querySelector("#weather span:last-child")
        city.innerText = `at ${data.name}`
        weather.innerText = `${data.weather[0].main}`
        temperature.innerText = `${data.main.temp.toFixed(1)}℃`});
          
       
}
function onGeoError() {
    /*alert("Can't find your location. No weather info will be displayed.")*/
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);




