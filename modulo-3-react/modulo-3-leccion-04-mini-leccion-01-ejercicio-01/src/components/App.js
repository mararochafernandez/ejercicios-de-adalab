import '../styles/App.scss';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const tasks = [
    'Comprar harina, jamón y pan rallado',
    'Hacer croquetas ricas',
    'Ir a la puerta de un gimnasio',
    'Comerme las croquetas mirando a la gente que entra en el gimnasio',
  ];

  const renderTitle = () => <h2>Mi lista de tareas</h2>;

  const renderTasks = () =>
    tasks.map((task, index) => <li key={index}>{task}</li>);

  return (
    // HTML ✨

    <div>
      {renderTitle()}
      <ol>{renderTasks()}</ol>
    </div>
  );
}

export default App;
