import '../styles/App.scss';
import { useEffect, useState } from 'react';
import localStorage from '../services/localstorage';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const [tasks, setTasks] = useState(
    localStorage.get('tasks', [
      { task: 'Comprar harina, jamón y pan rallado', completed: true },
      { task: 'Hacer croquetas ricas', completed: true },
      { task: 'Ir a la puerta de un gimnasio', completed: false },
      {
        task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
        completed: false,
      },
    ])
  );
  const [term, setTerm] = useState('');
  const [newTaskInput, setNewTaskInput] = useState('');

  useEffect(() => {
    localStorage.set('tasks', tasks);
  }, [tasks]);

  const handleTask = (event) => {
    const clickedTaskId = event.target.id;
    tasks[clickedTaskId].completed = !tasks[clickedTaskId].completed;
    setTasks([...tasks]);
  };

  const handleNewTaskButton = () => {
    if (newTaskInput) {
      tasks.push({
        task: newTaskInput,
        completed: false,
      });
      setTasks([...tasks]);
      setNewTaskInput('');
    }
  };

  const handleNewTaskInput = (event) => {
    setNewTaskInput(event.target.value);
  };

  const handleSearch = (event) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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

  const renderTitle = () => <h2>Mi lista de tareas</h2>;

  const getTotalOfTasks = () => {
    return searchTasks().length;
  };

  const getCompletedTasks = () => {
    return searchTasks().filter((task) => task.completed).length;
  };

  const getIncompleteTasks = () => {
    return getTotalOfTasks() - getCompletedTasks();
  };

  return (
    // HTML ✨

    <div>
      {renderTitle()}
      <form onSubmit={handleSubmit}>
        <label htmlFor="term">Buscar:</label>
        <input type="text" name="term" value={term} onChange={handleSearch} />
        <label htmlFor="term">Nueva tarea:</label>
        <input
          type="text"
          name="newTaskInput"
          value={newTaskInput}
          onChange={handleNewTaskInput}
        />
        <input
          type="submit"
          name="newTaskButton"
          value="Crear nueva tarea"
          onClick={handleNewTaskButton}
        />
      </form>
      <ol>{renderTasks()}</ol>
      <p>Tareas totales: {getTotalOfTasks()}</p>
      <p>Tareas completadas: {getCompletedTasks()}</p>
      <p>Tareas pendientes: {getIncompleteTasks()}</p>
    </div>
  );
}

export default App;
