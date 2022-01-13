import '../styles/App.scss';
import { useState } from 'react';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const [series, setSeries] = useState([
    { id: '123', name: 'Juego de tronos' },
    { id: '456', name: 'Las chicas Gilmore' },
    { id: '789', name: 'Gambita de Dama' },
  ]);
  const [favorites, setFavorites] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchIsFavorite, setSearchIsFavorite] = useState(false);

  const renderTitle = () => <h2>Lista de series</h2>;

  const handleFavorite = (event) => {
    const foundSerie = series.find(
      (serie) => serie.id === event.currentTarget.id
    );
    const foundIndex = favorites.findIndex(
      (favorite) => favorite.id === event.currentTarget.id
    );
    if (foundIndex === -1) {
      favorites.push(foundSerie);
    } else {
      favorites.splice(foundIndex, 1);
    }
    setFavorites([...favorites]);
  };

  const handleSearchName = (event) => {
    setSearchName(event.target.value);
  };

  const handleSearchIsFavorite = (event) => {
    setSearchIsFavorite(event.target.checked);
  };

  const funcionPatata = (id) => {
    const foundFavorite = favorites.find((favorite) => favorite.id === id);
    if (foundFavorite) {
      return true;
    } else {
      return false;
    }
  };

  const renderSeries = () =>
    series
      .filter((serie) =>
        serie.name.toLowerCase().includes(searchName.toLowerCase())
      )
      .filter((serie) => {
        if (searchIsFavorite === true) {
          return funcionPatata(serie.id);
        } else {
          return true;
        }
      })
      .map((serie) => (
        <li key={serie.id} id={serie.id} onClick={handleFavorite}>
          <h2>{serie.name}</h2>
          <p>Es mi serie favorita: {funcionPatata(serie.id) ? 'Sí' : 'No'}</p>
        </li>
      ));

  return (
    // HTML ✨

    <div>
      {renderTitle()}

      <ul>{renderSeries()}</ul>

      <form>
        <label htmlFor="searchName">Buscar por nombre de serie</label>
        <input
          type="text"
          id="searchName"
          value={searchName}
          onChange={handleSearchName}
        />
        <label htmlFor="searchIsFavorite">Mostrar solo las favoritas</label>
        <input
          type="checkbox"
          id="searchIsFavorite"
          checked={searchIsFavorite}
          onChange={handleSearchIsFavorite}
        />
      </form>
    </div>
  );
}

export default App;
