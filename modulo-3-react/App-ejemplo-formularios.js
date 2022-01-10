import '../styles/App.scss';
import { useState } from 'react';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const getTitle = (text) => <h1>{text}</h1>;

  const [name, setName] = useState('');
  //const [size, setSize] = useState('S');
  const [size, setSize] = useState('');
  const [giftWrap, setGiftWrap] = useState(false);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSize = (event) => {
    setSize(event.target.value);
  };

  const handleGiftWrap = (event) => {
    setGiftWrap(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    // HTML ✨

    <div className="app">
      {getTitle('Ejemplo: formularios')}

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Escribe un nombre:</label>
        <input
          type="name"
          name="name"
          id="name"
          placeholder="María García"
          onChange={handleName}
        />

        {/*<label htmlFor="size">Selecciona tu talla de camiseta:</label>
        <select name="size" id="size" onChange={handleSize}>
          <option>S</option>
          <option>M</option>
          <option>L</option>
        </select>*/}

        <label htmlFor="size">Selecciona tu talla de camiseta:</label>
        <label htmlFor="sizeS">Talla S</label>
        <input
          type="radio"
          id="sizeS"
          name="size"
          value="S"
          onChange={handleSize}
        />
        <label htmlFor="sizeM">Talla M</label>
        <input
          type="radio"
          id="sizeM"
          name="size"
          value="M"
          onChange={handleSize}
        />
        <label htmlFor="sizeL">Talla L</label>
        <input
          type="radio"
          id="sizeL"
          name="size"
          value="L"
          onChange={handleSize}
        />

        <label htmlFor="giftWrap">
          ¿Quieres envolver para regalo tu compra?
        </label>
        <input
          type="checkbox"
          name="gitWrap"
          id="gitWrap"
          onChange={handleGiftWrap}
        />

        <p>Tu nombre es: {name}</p>
        <p>Tu talla de camiseta es: {size}</p>
        <p>{giftWrap === true ? 'Sí' : 'No'} te lo envolveremos para regalo</p>
      </form>
    </div>
  );
}

export default App;
