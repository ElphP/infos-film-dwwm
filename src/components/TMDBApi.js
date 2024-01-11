  //*** fichier TMDBApi.js ***
//   API Key  4ec11d5ceeb80a31782078cc46166394
//   Jeton d'accès en lecture:  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWMxMWQ1Y2VlYjgwYTMxNzgyMDc4Y2M0NjE2NjM5NCIsInN1YiI6IjY1N2MyMTM2OGUyYmE2MDBmZTczYjEzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2TlwarX_moQpzfo3nHiCIAUm-8I-yMaD-P039H8zLis
  

  const API_TOKEN = "4ec11d5ceeb80a31782078cc46166394";
  	
  //le paramètre text = film cherché, page = nombre de page voulu
  export function getFilmsFromTMdbWithText(text, page) {
  	
  const url =
      "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN +
       "&language=fr&query=" + text + '&page=' + page

  	
    return fetch(url)
      .then((response)=> response.json())
      .catch((error) => console.log(error))
  }

  
