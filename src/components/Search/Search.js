import "./Search.css";
import { useNavigate } from 'react-router';

function Search() {
  
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    console.log(formData);
    console.log(formData.get("search"));
    navigate(`/List/${formData.get('search')}`)  /* exemple /List/Titanic */ /* correspond au name de l’input */
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="idSearch">Votre recherche</label>
          <input id="idSearch" name="search" type="text" />
        </fieldset>
        <input type="submit" value="Rechercher" />
      </form>
    </div>
  );
}
export default Search;
