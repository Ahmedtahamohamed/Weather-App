const apiKey = "cf14816581e47c2a3c365e230c7cb624";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const SearchBox = document.querySelector(".search input");
const SearchButton = document.querySelector(".search button");
const WeatherImg = document.querySelector(".weather-img");

async function CheckWeather(city){
    const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();


        console.log(data)
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        
        if(data.weather[0].main =="Clouds"){
            WeatherImg.src = "Images/clouds.png";
        }
        else if(data.weather[0].main =="Clear"){
            WeatherImg.src = "Images/clear.png";
        }
        else if(data.weather[0].main =="Drizzle"){
            WeatherImg.src = "Images/drizzle.png";
        }
        else if(data.weather[0].main =="Mist"){
            WeatherImg.src = "Images/mist.png";
        }
        else if(data.weather[0].main =="Rain"){
            WeatherImg.src = "Images/rain.png";
        }
        else if(data.weather[0].main =="Snow"){
            WeatherImg.src = "Images/snow.png";
        }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }






}
SearchButton.addEventListener("click" , ()=>{
    CheckWeather(SearchBox.value);
})
