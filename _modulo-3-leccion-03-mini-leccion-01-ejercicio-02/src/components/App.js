import '../styles/App.scss';
//import { useState } from 'react';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const getTitle = (text) => <h1>{text}</h1>;

  return (
    // HTML ✨

    <div className="app">{getTitle('Traductor MIMIMI')}</div>
  );
}

export default App;
