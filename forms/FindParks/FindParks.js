let requestURL="https://maps.googleapis.com/maps/api/place/textsearch/json?query=parks in Omaha&key=AIzaSyB89p-TgKNE3VDEIpqFpbnd77yqEXO5vW0&location=41.2565, -95.9345&radius=50000"

function onXHRLoad() {
    let message = ""
    let apiData = JSON.parse(this.responseText)
    
    for (i = 0; i <= apiData.results.length - 1; i++) {
        message = message + apiData.results[i].name + "\n"+apiData.results[i].formatted_address+"\n"+"\n"
    }
    
    txaParks.value = message
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    
    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)
    
    xhttp.addEventListener('load', onXHRLoad)
    
    xhttp.send()
}

FindParks.onshow=function(){
  txaParks_contents.style.height = "100px"
  txaParks_contents.style.width="280px"
}

btnFindParks.onclick=function(){
  callAPI(requestURL)
}

hgbGoToFind.onclick=function(choice){
  if (typeof(choice) == "object") {
    return
  }else {
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
