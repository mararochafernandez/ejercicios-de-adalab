import '../styles/App.scss';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const tasks = [
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ];

  const renderTitle = () => <h2>Mi lista de tareas</h2>;

  const renderTasks = () =>
    tasks.map((task, index) => (
      <li key={index} className={task.completed ? 'completed' : ''}>
        {task.task}
      </li>
    ));

  return (
    // HTML ✨

    <div>
      {renderTitle()}
      <ol>{renderTasks()}</ol>
    </div>
  );
}

export default App;
