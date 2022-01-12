function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const getTitle = (text) => <h1>{text}</h1>;

  const adalabers = ['María', 'Lucía', 'Sofía'];

  const renderAdalabers = () =>
    adalabers.map((adalaber, index) => (
      <li key={index}>
        <span>El nombre de la alumna es: </span>
        <strong>{adalaber}</strong>
      </li>
    ));

  return (
    // HTML ✨

    <div>
      {getTitle('Propiedad key: cuando no tenemos un id')}

      <h2>Lista de Adalabers</h2>
      <ul>{renderAdalabers()}</ul>
    </div>
  );
}

export default App;
