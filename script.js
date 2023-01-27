//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click",  () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}
//weather application
let temperature = document.getElementById('placetemp');
let weathertype = document.getElementById('weathertype');
let weathertypeimg = document.getElementById('weather-type-img');


function citysubmit() {
    let cityname = document.getElementById('mycity').value;
    // let cityname = "jabalpur";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=a5905030ca9c50c3a516d13d5fd3bd59`
    // console.log(url);
    document.getElementById('displaycityname').innerHTML = cityname;
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        document.getElementById('city-error').style.display = 'none'
        console.log(data);
        weathertype.innerHTML = data.weather[0].main;
        temp = data.main.temp - 273.15;
        temperature.innerHTML = temp.toFixed(2) + ' °C';
        document.getElementById('weathercard').style.display = 'flex'

        if (data.weather[0].main == 'Clouds') {
            weathertypeimg.src = './images/cloudy.png';
        }
        else if (data.weather[0].main == 'Clear') {
            weathertypeimg.src = './images/sun.png';
        }
        else if (data.weather[0].main == 'Rain') {
            weathertypeimg.src = './images/rain.png';
        }
        else if (data.weather[0].main == 'Snow') {
            weathertypeimg.src = './images/snowman.png';
        }
        else if (data.weather[0].main == 'Thunderstorm') {
            weathertypeimg.src = './images/thunder.png';
        }
        else if (data.weather[0].main == 'Drizzle') {
            weathertypeimg.src = './images/drizzle.png';
        }
        else if (data.weather[0].main == 'Mist') {
            weathertypeimg.src = './images/mist.png';
        }
        else if (data.weather[0].main == 'Smoke') {
            weathertypeimg.src = './images/fog.png';
        }
        else if (data.weather[0].main == 'Haze') {
            weathertypeimg.src = './images/haze.png';
        }
        else if (data.weather[0].main == 'Dust') {
            weathertypeimg.src = './images/dust.png';
        }
        else if (data.weather[0].main == 'Fog') {
            weathertypeimg.src = './images/fog.png';
        }
        else if (data.weather[0].main == 'Sand') {
            weathertypeimg.src = './images/sand.png';
        }
        else if (data.weather[0].main == 'Ash') {
            weathertypeimg.src = 'https://img.icons8.com/color/48/000000/fog-day.png';
        }
        else if (data.weather[0].main == 'Squall') {
            weathertypeimg.src = 'https://img.icons8.com/color/48/000000/fog-day.png';
        }
        else if (data.weather[0].main == 'Tornado') {
            weathertypeimg.src = './images/hurricane.png';
        }
        else {
            weathertypeimg.src = './images/sun.png';
        }

    })
        .catch((data) => {
            document.getElementById('city-error').style.display = 'flex'
            document.getElementById('weathercard').style.display = 'none'
        })
}

//Calculator

let sp= document.getElementById("screen");
function send(val)
{   
    sp.value += val;
}
function solve()
{
    let x= sp.value;
    let y= eval(x);
    sp.value=y;
}
function clearall()
{
    sp.value = "";
}
function back()
{
    sp.value = sp.value.substring(0,sp.value.length-1);
}