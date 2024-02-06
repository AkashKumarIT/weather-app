const API_KEY = `63739e7eabd4d28a661ac8a90f8b4200`;
//const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
//const IMG_URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async(city) => {
    weather.innerHTML = `<h2>Loading...</h2>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    showWeather(data);
}

const showWeather = (data)=>{
    if(data.cod == 404){
        weather.innerHTML = `<h2>City not found</h2>`;
        return;
    };
    weather.innerHTML = `
            <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="image" class="image">
            </div>
            <div>
                <h4>${data.weather[0].main}</h4>
                <h2>${data.main.temp}</h2>
            </div>
            `
}

form.addEventListener("submit",
function(event){
    getWeather(search.value);
    event.preventDefault();
})