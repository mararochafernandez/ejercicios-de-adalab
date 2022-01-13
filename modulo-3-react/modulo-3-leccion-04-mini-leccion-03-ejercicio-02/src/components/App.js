import '../styles/App.scss';
import { useState } from 'react';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ]);
  const [term, setTerm] = useState('');

  const renderTitle = () => <h2>Mi lista de tareas</h2>;

  const handleTask = (event) => {
    const clickedTaskId = event.target.id;
    tasks[clickedTaskId].completed = !tasks[clickedTaskId].completed;
    setTasks([...tasks]);
  };

  const handleSubmit = (event) => event.preventDefault();

  const handleSearch = (event) => setTerm(event.target.value);

  const searchTasks = () =>
    tasks.filter((task) =>
      task.task.toLowerCase().includes(term.toLowerCase())
    );

  const renderTasks = () =>
    searchTasks().map((task, index) => (
      <li
        key={index}
        id={index}
        className={`task ${task.completed ? 'task--completed' : ''}`}
        onClick={handleTask}
      >
        {task.task}
      </li>
    ));

  const getTotalOfTasks = () => searchTasks().length;

  const getCompletedTasks = () =>
    searchTasks().filter((task) => task.completed).length;

  const getIncompleteTasks = () => getTotalOfTasks() - getCompletedTasks();

  return (
    // HTML ✨

    <div>
      {renderTitle()}
      <form onSubmit={handleSubmit}>
        <label htmlFor="term">Buscar:</label>
        <input type="text" name="term" value={term} onChange={handleSearch} />
      </form>
      <ol>{renderTasks()}</ol>
      <p>Tareas totales: {getTotalOfTasks()}</p>
      <p>Tareas completadas: {getCompletedTasks()}</p>
      <p>Tareas pendientes: {getIncompleteTasks()}</p>
    </div>
  );
}

export default App;
