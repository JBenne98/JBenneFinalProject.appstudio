let req=''

hbgGoTo.onclick=function(choice){
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

btnFind.onclick=function(){
  ChangeForm(FindParks)
}

btnPrev.onclick=function(){
  ChangeForm(VisitedParks)
}

btnFav.onclick=function(){
  ChangeForm(FavParks)
}

btnWeather.onclick=function(){
  ChangeForm(Weather)
}
