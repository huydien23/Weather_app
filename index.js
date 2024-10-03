var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var value = document.querySelector('.value');
var time = document.querySelector('.time');
var content = document.querySelector('.content');
var body = document.querySelector('body');

async function changeWeatherUI(capitaSearch) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitaSearch}&appid=e99f8194e74cd35c3d5413f1de8e98ce`
    let data = await fetch(apiURL).then(res => res.json())
    if(data.cod == 200){
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        let temp = Math.round(data.main.temp - 273.15)
        value.innerText = temp  + '°C'
        shortDesc.innerText = data.weather[0]? data.weather[0].main : ''
        time.innerText = new Date().toLocaleTimeString('vi')
       console.log(body)
        body.setAttribute('class', 'cold')
        if(temp >= 25){
            body.setAttribute('class', 'hot')
        }
        if(temp <= 22){
            body.setAttribute('class', 'warm')
        }
        if(temp <= 19){
            body.setAttribute('class', 'cool')
        }
        

    }else {
        content.classList.add('hide')
    }
}

search.addEventListener('keypress', function(e){
    if(e.code === 'Enter'){
        let capitaSearch = search.value.trim()
        changeWeatherUI(capitaSearch)
    }
})

changeWeatherUI('Can Tho')
