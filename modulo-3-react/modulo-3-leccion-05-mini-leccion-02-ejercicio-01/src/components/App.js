import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const [seriesData, setSeriesData] = useState([]);

  const getTitle = (text) => <h1>{text}</h1>;

  useEffect(() => {
    callToApi().then((response) => {
      setSeriesData(response);
    });
  }, []);

  console.log(seriesData);

  return (
    // HTML ✨

    <div className="app">{getTitle('Paranormal activity')}</div>
  );
}

export default App;
