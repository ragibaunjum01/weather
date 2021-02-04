const APIkey = '710ce9784a6ddfc52b4dfa7f80625147';
const unit = 'metric';
document.getElementById('search').addEventListener('click', function () {
    let cityName = document.getElementById('cityInput').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=${unit}`)
        .then(res => res.json())
        .then(data => {
                document.getElementById('cityName').innerText = data.name;
                document.getElementById('temprature').innerText = data.main.temp;
                document.getElementById('condition').innerText = data.weather[0].main;
        })
})