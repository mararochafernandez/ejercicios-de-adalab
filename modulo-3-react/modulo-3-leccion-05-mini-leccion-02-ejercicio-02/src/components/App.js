import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const [seriesData, setSeriesData] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    callToApi(searchName).then((response) => {
      setSeriesData(response);
    });
  }, [searchName]);

  const handleSearchName = (event) => {
    setSearchName(event.target.value);
  };

  const renderSeries = () => {
    return seriesData.map((serie) => {
      return <li key={serie.id}>{serie.name}</li>;
    });
  };

  //console.log(searchName, seriesData);

  const getTitle = (text) => <h1>{text}</h1>;

  return (
    // HTML ✨

    <div className="app">
      {getTitle('Buscador de series')}

      <form>
        <input
          type="text"
          name="name"
          id="name"
          value={searchName}
          onChange={handleSearchName}
        />
      </form>

      <ul>{renderSeries()}</ul>
    </div>
  );
}

export default App;
