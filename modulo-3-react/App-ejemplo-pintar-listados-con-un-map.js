function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const getTitle = (text) => <h1>{text}</h1>;

  const adalabers = ['María', 'Lucía', 'Sofía', 'Nerea'];

  const renderAdalabers = () =>
    adalabers.map((adalaber) => <li>{adalaber}</li>);

  return (
    // HTML ✨

    <div>
      {getTitle('Pintar listados con un map')}

      <h2>Lista de Adalabers</h2>
      <ul>{renderAdalabers()}</ul>
    </div>
  );
}

export default App;
