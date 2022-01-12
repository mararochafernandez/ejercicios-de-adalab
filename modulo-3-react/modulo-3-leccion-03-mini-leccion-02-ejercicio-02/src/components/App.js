import '../styles/App.scss';
import { useState } from 'react';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const getTitle = (text) => <h1>{text}</h1>;

  const [operation, setOperation] = useState('suma');
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);

  const handleForm = (event) => event.preventDefault();

  const handleOperation = (event) => setOperation(event.currentTarget.value);

  const handleNumberA = (event) => setNumberA(event.target.value);

  const handleNumberB = (event) => setNumberB(event.target.value);

  const getTotal = () => {
    let total = 0;
    if (operation === 'suma') {
      total = parseInt(numberA) + parseInt(numberB);
    } else if (operation === 'resta') {
      total = parseInt(numberA) - parseInt(numberB);
    } else if (operation === 'multiplicación') {
      total = parseInt(numberA) * parseInt(numberB);
    } else if (operation === 'división') {
      total = parseInt(numberA) / parseInt(numberB);
    }
    return total;
  };

  const handleReset = () => {
    setOperation('suma');
    setNumberA(0);
    setNumberB(0);
    getTotal();
  };

  return (
    // HTML ✨

    <div className="app">
      {getTitle('La calculadora')}

      <form onSubmit={handleForm}>
        <label>
          Escribe un número:
          <input
            type="number"
            name="a"
            value={numberA}
            onChange={handleNumberA}
          />
        </label>
        <label>
          Escribe otro número:
          <input
            type="number"
            name="b"
            value={numberB}
            onChange={handleNumberB}
          />
        </label>

        <label>
          Operación:
          <select
            name="operation"
            id="operation"
            value={operation}
            onChange={handleOperation}
          >
            <option value="suma">Sumar</option>
            <option value="resta">Restar</option>
            <option value="multiplicación">Multiplicar</option>
            <option value="división">Dividir</option>
          </select>
        </label>

        <button onClick={handleReset}>Reset</button>
      </form>

      <p>
        La {operation} de <strong>{numberA}</strong> y
        <strong> {numberB}</strong> es <strong>{getTotal()}</strong>.
      </p>
    </div>
  );
}

export default App;
