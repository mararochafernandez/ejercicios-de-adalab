import '../styles/App.scss';
import { useState } from 'react';

const App = () => {
  /* Let's do magic! 🦄🦄🦄 */

  const getTitle = (text) => <h1>{text}</h1>;

  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    let number = counter;
    setCounter(++number);
  };

  const handleDecrease = () => {
    let number = counter;
    setCounter(--number);
  };

  const handleReset = () => setCounter(0);

  return (
    // HTML ✨

    <div className="app">
      {getTitle('El contador')}

      <p>Contador: {counter}</p>

      <button type="button" name="increase" onClick={handleIncrease}>
        Incrementar
      </button>

      <button type="button" name="decrease" onClick={handleDecrease}>
        Decrementar
      </button>

      <button type="button" name="reset" onClick={handleReset}>
        Reiniciar
      </button>
    </div>
  );
};

export default App;
