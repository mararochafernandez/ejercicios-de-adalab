import { useState } from 'react';

const App = () => {
  /* Let's do magic! 🦄🦄🦄 */

  const getTitle = (text) => <h1>{text}</h1>;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleForm = (event) => event.preventDefault();

  const handleInput = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    if (inputName === 'name') {
      setName(inputValue);
    } else if (inputName === 'email') {
      setEmail(inputValue);
    }
  };

  return (
    // HTML ✨

    <div>
      {getTitle('Eventos y estado')}

      <h2>Generador de emails</h2>

      <form onSubmit={handleForm}>
        <label>
          Escribe tu nombre:
          <input type="text" name="name" onChange={handleInput} />
        </label>

        <label>
          Escribe tu email:
          <input type="email" name="email" onChange={handleInput} />
        </label>
      </form>

      <p>Tu nombre es: {name}</p>
      <p>Tu email es: {email}</p>
      <p>
        Pulsa en <a href={`mailto:${email}`}>{email}</a> para enviar un email.
      </p>
    </div>
  );
};

export default App;
