function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const getTitle = (text) => <h1>{text}</h1>;

  //const list = [<li>Element #0</li>, <li>Element #1</li>, <li>Element #2</li>];

  const list = [];

  for (let i = 0; i < 5; i++) {
    list.push(<li>Element #{i}</li>);
  }

  return (
    // HTML ✨

    <div>
      {getTitle('Trabajando con arrays')}

      <ul>{list}</ul>
    </div>
  );
}

export default App;
