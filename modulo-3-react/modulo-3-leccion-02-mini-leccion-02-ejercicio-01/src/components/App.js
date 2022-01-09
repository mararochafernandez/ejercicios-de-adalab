import '../styles/App.scss';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const getTitle = (text) => <h1>{text}</h1>;

  const handleForm = (event) => event.preventDefault();

  const handleInput = (event) => {
    const text = event.currentTarget.value;
    if (text) {
      console.log(text[text.length - 1]);
    }
  };

  return (
    // HTML ✨

    <div className="app">
      {getTitle('Consolea la tecla pulsada')}

      <form method="post" onSubmit={handleForm}>
        <input type="text" name="text" onChange={handleInput} />
      </form>
    </div>
  );
}

export default App;
