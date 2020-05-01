FavParks.onshow=function(){
  let parks=''
  
  query='SELECT name FROM visited_park'
  
  req=Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=jgb83474&pass=Iwbn0KS@11:52&database=jgb83474&query=' + query) 

  if(req.status==200) {
  
    parks=JSON.parse(req.responseText)
    
    if(parks.length==0){
      txaFav.value=(`There are no visited parks.`)
    } else{
      sltFav.clear()
      
        for(i=0;i<=parks.length-1;i++){
          sltFav.addItem(parks[i])
        }
    }
  } else {
    txaFav.value=(`AN ERROR OCCURRED WITH CODE ${req.status}`)
  }
}

btnEnter.onclick=function(choice){
  let rating=iptRat.value
  let numberRating=parseInt(rating)
  
  let favParts=[]
  let favPartOne=iptFavPart.value
  let favPartTwo=ipt2FavPart.value
  let favPartThree=ipt3FavPart.value
  favParts.push(favPartOne)
  favParts.push(favPartTwo)
  favParts.push(favPartThree)
  let favPartsString=favParts.toString()

  let favoritePark=sltFav.text
  let favParks=''
  
  query=`INSERT INTO favorite_park (name, rating, favorite_parts) VALUES ('${favoritePark}', ${numberRating}, '${favPartsString}')`
    
  req=Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=jgb83474&pass=Iwbn0KS@11:52&database=jgb83474&query=' + query)
    
   if(req.status==200){
      if(req.responseText==500){
        query='SELECT * FROM favorite_park'
        
        req=Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=jgb83474&pass=Iwbn0KS@11:52&database=jgb83474&query=' + query) 
          
          favParks=JSON.parse(req.responseText)
          
          if(req.status==200){
            let mes='The Park has been added to Favorite Parks. All Favorite Parks:'
          
              for(i=0;i<=favParks.length-1;i++){
                mes=mes+'\n'+favParks[i][1]+'\n'+'Rating: '+favParks[i][2]+'\n'+'Favorite Parts: '+favParks[i][3]+'\n'+'\n'
                txaFav.value=mes
              }
          }else{
            txaFav.value=(`The Park was added to Favorite Parks, but there was an error in displaying all Favorite Parks`)
          }
      } else {
        txaFav.value=(`The Park was not added to Favorite Parks. Possible Error.`)
        }
    }else{
        txaFav.value= (`ERROR WITH CODE ${req.status}`)
    }
  
}

btnDirection.onclick=function(){
   $("#tstFav").toast("show")
}



btnView.onclick=function(){
  let favParks=''

  query='SELECT * FROM favorite_park'
        
        req=Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=jgb83474&pass=Iwbn0KS@11:52&database=jgb83474&query=' + query) 
          
          favParks=JSON.parse(req.responseText)
          
          if(req.status==200){
            let mes='All Favorite Parks:'
          
              for(i=0;i<=favParks.length-1;i++){
                mes=mes+'\n'+favParks[i][1]+'\n'+'Rating: '+favParks[i][2]+'\n'+'Favorite Parts: '+favParks[i][3]+'\n'+'\n'
                txaFav.value=mes
              }
          } else {
           txaVis.value=(`Error in displaying Parks`) 
          }
}



hbgGoToFav.onclick=function(choice){
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
