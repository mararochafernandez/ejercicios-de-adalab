import { useState } from 'react';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const [series, setSeries] = useState([
    { id: '123', isFavorite: false, name: 'Juego de tronos' },
    { id: '456', isFavorite: false, name: 'Las chicas Gilmore' },
    { id: '678', isFavorite: false, name: 'Gambita de Dama' },
  ]);

  const handleFavorite = (ev) => {
    const clickedSerieId = ev.currentTarget.id;
    const foundSerie = series.find((serie) => serie.id === clickedSerieId);
    foundSerie.isFavorite = !foundSerie.isFavorite;
    setSeries([...series]);
  };

  const renderSeries = () =>
    series.map((serie) => (
      <li key={serie.id} id={serie.id} onClick={handleFavorite}>
        <h2>{serie.name}</h2>
        <p>Es mi serie favorita: {serie.isFavorite ? 'Sí' : 'No'}</p>
      </li>
    ));

  return (
    // HTML ✨

    <div>
      <h1>Lista de series favoritas:</h1>
      <ul>{renderSeries()}</ul>
    </div>
  );
}

export default App;
