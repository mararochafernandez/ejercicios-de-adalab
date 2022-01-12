function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const getTitle = (text) => <h1>{text}</h1>;

  const adalabers = [
    { id: '8341', name: 'María' },
    { id: '2676', name: 'Lucía' },
    { id: '1004', name: 'Sofía' },
  ];

  const renderAdalabers = () =>
    adalabers.map((adalaber) => (
      <li>
        <span>El nombre de la alumna es: </span>
        <strong>{adalaber.name}</strong>
      </li>
    ));

  return (
    // HTML ✨

    <div>
      {getTitle('Pintar un array de objetos')}

      <h2>Lista de Adalabers</h2>
      <ul>{renderAdalabers()}</ul>
    </div>
  );
}

export default App;
