
function onXHRLoad() {
    let message = ""
    
    let apiData = JSON.parse(this.responseText)
   
    message ='Temp '+apiData[0].temp.value+ "\n"+'Wind Speed '+apiData[0].wind_speed.value+'mph'+'\n'+'Precipitation '+apiData[0].precipitation.value+'in/hr'+'\n'
   
    txaWeather.value = message
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)

    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}

Weather.onshow=function(){
   txaWeather_contents.style.height = "100px"
  txaWeather_contents.style.width="280px"
}

btnGetWeather.onclick=function(){
  let reqURL="https://api.climacell.co/v3/weather/nowcast?lat=41.25716&lon=-95.995102&unit_system=us&timestep=5&start_time=now&fields=precipitation&apikey=NRpfPJ4rrdtDiaO0Af9KsI0sAhpiEUyG&fields=temp&fields=feels_like&fields=wind_speed"
  callAPI(reqURL)
}

hbgGoToWeather.onclick=function(choice){
  if (typeof(choice) == "object") {
   return
 } else {
    switch(choice){
      case 'Home':
        ChangeForm(Home)
        break
      case 'Find Parks':
        ChangeForm(FindParks)
        break
      case 'Visited Parks':
        ChangeForm(VisitedParks)
        break
      case 'Favorite Parks':
        ChangeForm(FavParks)
        break
      case 'Weather':
        ChangeForm(Weather)
        break
    }
  }
}

