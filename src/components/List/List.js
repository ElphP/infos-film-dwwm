//*** fichier List.js ***
import { useParams } from "react-router-dom";
  import './List.css';
import Film from "../Film/Film";
import { getFilmsFromTMdbWithText } from "../TMDBApi";
import { useState, useEffect } from "react";

function List() {
    const [films, setFilms] = useState([]);
    const search = useParams();
    const [page,setPage] = useState(1);
    
    function pagePrec() {(page>1) && setPage(page-1)}
    function pageSuiv() {(setPage(page+1))}  
       
    useEffect(() => {
        getFilmsFromTMdbWithText(search.data, page).then((data) => {
            setFilms(data.results);
        }, page);

    });

    return (
        <div className="container">
            <h2>Liste des films contenant le mot "{search.data}"</h2>
            <ul className="navigation_pages">
                <li>
                    <button onClick={pagePrec}>Page précédente</button>
                </li>
                <li>Page {page}</li>
                <li>
                    <button onClick={pageSuiv}>Page suivante</button>
                </li>
            </ul>
           
            {films.map((film) => {
                return (
                    <Film
                        key={film.id}
                        title={film.title}
                        poster={film.poster_path}
                        abstract={film.overview}
                    />
                );
            })}
        </div>
    );
}

export default List;
