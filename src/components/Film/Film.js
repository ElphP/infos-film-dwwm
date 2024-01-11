//*** fichier Film.js ***
  	
import './Film.css';
  	
function Film({abstract, poster, title}) {
    
  return (
      <div className="film">
          <img
              src={`https://image.tmdb.org/t/p/w300${poster}`}
              alt="poster du film"
          />
          <div className='text'>
            <p>{title}</p>
            <p>{abstract}</p>
          </div>
      </div>
  );
}
export default Film;
