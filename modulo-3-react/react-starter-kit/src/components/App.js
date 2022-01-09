import '../styles/App.scss';
//import { useState } from 'react';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const getTitle = (text) => <h1>{text}</h1>;

  return (
    // HTML ✨

    <div className="app">{getTitle('Hola mundo')}</div>
  );
}

export default App;
