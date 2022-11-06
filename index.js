let now = new Date();

let date = now.getDate();
let day = now.getDay();
let hour = now.getHours();
let minute = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[day];

let heading = document.querySelector("h6");
heading.innerHTML = `${currentDay} ${hour}:${minute}`;

/*function change(event) {
  event.preventDefault();
  let citi = document.querySelector("h2");
  let city = document.querySelector("#exampleDataList");
  let abs = city.value;
  citi.innerHTML = `${abs}`;
}


let element = document.querySelector("#btnn");
element.addEventListener("click", change);
*/

/*function apiCall(response) {
  let city = document.querySelector("#exampleDataList");
  let abs = city.value;
  let abd = response;
  console.log(abd);
  let headingOne = document.querySelector("h1");
  headingOne.innerHTML = `${abd}℃`;
  axios.get(apiurl).then(apiCall);
}
let element = document.querySelector("#btnn");
element.addEventListener("click", apiCall);
*/

function apiCallButton() {
  function apiCall(response) {
    console.log(response);
    let citi = document.querySelector("#exampleDataList");
    let city = citi.value;
    let headingOne = document.querySelector("h2");
    headingOne.innerHTML = `${city}`;
    let headingTemp = document.querySelector("h1");
    headingTemp.innerHTML = `${response.data.main.temp}℃`;
    let humidity = document.querySelector(".hum");
    humidity.innerHTML = `Humidity:  ${response.data.main.humidity}%`;
    let wind = document.querySelector(".win");
    wind.innerHTML = `Wind:   ${response.data.wind.speed}km/hr`;

    let sky = document.querySelector(".sky");
    sky.innerHTML = `${response.data.weather[0].main}`;
  }
  let apikey = "73a00877081bd43422bdee0f3022beb5";
  let ci = document.querySelector(".form-control");
  let cit = ci.value;
  let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cit}&appid=${apikey}&units=metric`;
  axios.get(apiurl).then(apiCall);
}

let element = document.querySelector("#btnn");
element.addEventListener("click", apiCallButton);

//GEOLOCATION
function loc(position) {
  console.log(position);
  let lat = `${position.coords.latitude}`;
  let lon = `${position.coords.longitude}`;
  //let city = `${position.data[0].name}`;
  //console.log(city);

  /*let citigeo = document.querySelector("#exampleDataList");
  let city = citigeo.value;
  
  let headingOne = document.querySelector("h2");
  headingOne.innerHTML = `${city}`;
  let headingTemp = document.querySelector("h1");
  headingTemp.innerHTML = `${response.data.main.temp}℃`;
  let humidity = document.querySelector(".hum");
  humidity.innerHTML = `Humidity:  ${response.data.main.humidity}%`;
  let wind = document.querySelector(".win");
  wind.innerHTML = `Wind:   ${response.data.wind.speed}km/hr`;

  let sky = document.querySelector(".sky");
  sky.innerHTML = `${response.data.weather[0].main}`;
*/
  let apikey = "73a00877081bd43422bdee0f3022beb5";
  let apiurl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&&appid=${apikey}`;

  axios.get(apiurl).then(loc);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(loc);
}
let geoelement = document.querySelector("#geolocation");
geoelement.addEventListener("click", getCurrentPosition);

//function celc(abcd) {
//abcd.preventDefault();
//let hCelcuis = document.querySelector("#tempw");
//hCelcuis.innerHTML = "⛅19°";
//}

////let cel = document.querySelector("#celcius");
//cel.addEventListener("click", celc);

//function farh(abcde) {
//abcde.preventDefault();
//let hFarenheit = document.querySelector("#tempw");
//hFarenheit.innerHTML = "⛅60°";
//}

//let far = document.querySelector("#farenheit");
//far.addEventListener("click", farh);
