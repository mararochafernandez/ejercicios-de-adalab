import '../styles/App.scss';
import { useState } from 'react';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const getTitle = (text) => <h1>{text}</h1>;

  const [macarrones, setMacarrones] = useState(false);
  const [patatas, setPatatas] = useState(false);
  const [nueces, setNueces] = useState(false);
  const [huevos, setHuevos] = useState(false);
  const [cebolla, setCebolla] = useState(false);
  const [cerveza, setCerveza] = useState(false);

  const handleForm = (event) => {
    event.preventDefault();
  };

  const handleCheckbox = (event) => {
    const id = event.currentTarget.id;
    if (id === 'macarrones') {
      setMacarrones(event.currentTarget.checked);
    } else if (id === 'patatas') {
      setPatatas(event.currentTarget.checked);
    } else if (id === 'nueces') {
      setNueces(event.currentTarget.checked);
    } else if (id === 'huevos') {
      setHuevos(event.currentTarget.checked);
    } else if (id === 'cebolla') {
      setCebolla(event.currentTarget.checked);
    } else {
      setCerveza(event.currentTarget.checked);
    }
  };

  const getMessage = () => {
    let message = '';
    if (!macarrones && patatas && !nueces && huevos && cebolla && !cerveza) {
      message = 'Eres una persona concebollista';
    } else if (
      !(macarrones || patatas || nueces || huevos || cebolla || cerveza)
    ) {
      message = '';
    } else {
      message = 'Eres un robot sin paladar';
    }
    return message;
  };

  const handleButtonCheckAll = () => {
    setMacarrones(true);
    setPatatas(true);
    setNueces(true);
    setHuevos(true);
    setCebolla(true);
    setCerveza(true);
  };

  const handleButtonUncheckAll = () => {
    setMacarrones(false);
    setPatatas(false);
    setNueces(false);
    setHuevos(false);
    setCebolla(false);
    setCerveza(false);
  };

  return (
    // HTML ✨

    <div className="app">
      {getTitle('Concebollistas controlados')}

      <h2>Selecciona los ingredientes de la tortilla de patatas</h2>

      <form onSubmit={handleForm}>
        <input
          type="checkbox"
          name="macarrones"
          id="macarrones"
          checked={macarrones}
          onChange={handleCheckbox}
        />
        <label htmlFor="macarrones">Macarrones</label>

        <input
          type="checkbox"
          name="patatas"
          id="patatas"
          checked={patatas}
          onChange={handleCheckbox}
        />
        <label htmlFor="patatas">Patatas</label>

        <input
          type="checkbox"
          name="nueces"
          id="nueces"
          checked={nueces}
          onChange={handleCheckbox}
        />
        <label htmlFor="nueces">Nueces</label>

        <input
          type="checkbox"
          name="huevos"
          id="huevos"
          checked={huevos}
          onChange={handleCheckbox}
        />
        <label htmlFor="huevos">Huevos</label>

        <input
          type="checkbox"
          name="cebolla"
          id="cebolla"
          checked={cebolla}
          onChange={handleCheckbox}
        />
        <label htmlFor="cebolla">Cebolla</label>

        <input
          type="checkbox"
          name="cerveza"
          id="cerveza"
          checked={cerveza}
          onChange={handleCheckbox}
        />
        <label htmlFor="cerveza">Cerveza</label>

        <input
          type="button"
          value="Marcar todos"
          onClick={handleButtonCheckAll}
        />
        <input
          type="button"
          value="Desmarcar todos"
          onClick={handleButtonUncheckAll}
        />
      </form>

      <p>{getMessage()}</p>
    </div>
  );
}

export default App;
