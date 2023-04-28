const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const discription = document.querySelector('.discription');
const humidity = document.querySelector('.humidity');
const windspeed = document.querySelector('.windspeed');


async function checkWeather(city){
    const api_key = "6f6c3c31118bbf51ce1f2f07126f050d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then
    (response => response.json());


   temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
   discription.innerHTML = `${weather_data.weather[0].description}`;
   humidity.innerHTML = `${weather_data.main.humidity}%`;
   //windspeed.innerHTML = `${weather_data.wind.speed}KM/Hr`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "img/cloud-removebg-preview.png";
            break
        case 'Haze':
            weather_img.src = "img/clear-removebg-preview.png";
            break
        case 'Rain':
            weather_img.src = "img/rain-removebg-preview.png";
            break
        case 'Snow':
            weather_img.src = "img/snow-removebg-preview.png";
            break
        case 'Mist':
            weather_img.src = "img/mist.png";
            break
    }
}
searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
})

