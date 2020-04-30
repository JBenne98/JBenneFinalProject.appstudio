VisitedParks.onshow=function(){
  
  txaVis_contents.style.height = "100px"
 
 function onXHRLoad() {
    let message = ""
    let apiData = JSON.parse(this.responseText)
    
    for (i = 0; i <= apiData.results.length - 1; i++) {
        dpdVis.addItem(apiData.results[i].name)
    }
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest();
    
    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)

    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
  }
  
  callAPI(requestURL)
}

dpdVis.onclick=function(choice){
  let newPark=''
  let visParks=''
      
    if (typeof(choice)=='object'){
      return
    } else {
      dpdVis.value=choice
      newPark=dpdVis.selection
    }
  
    query=`INSERT INTO visited_park (name) VALUES ('${newPark}')`
    
    req=Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=jgb83474&pass=Iwbn0KS@11:52&database=jgb83474&query=' + query)
    
   if(req.status==200){
      if(req.responseText==500){
      
        query='SELECT * FROM visited_park'
        
        req=Ajax('https://ormond.creighton.edu/courses/375/ajax-connection.php', 'POST', 'host=ormond.creighton.edu&user=jgb83474&pass=Iwbn0KS@11:52&database=jgb83474&query=' + query) 
          
          visParks=JSON.parse(req.responseText)
          
          if(req.status==200){
            let mes='The Park has been added to Visited Parks. All Visited Parks:'
          
            for(i=0;i<=visParks.length-1;i++){
              mes=mes+'\n'+visParks[i][1]
              txaVis.value=mes
            }
          }else{
            txaVis.value=(`The Park was added to Visited Parks, but there was an error in displaying all visited Parks`)
          }
      } else {
        txaVis.value=(`The Park was not added to Visited Parks. Possible Error.`)
        }
    }else{
        txaVis.value= (`ERROR WITH CODE ${req.status}`)
    }
}

hgbGoToVis.onclick=function(choice){
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
