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

  const renderTitle = () => <h2>Mi lista de tareas</h2>;

  const handleTask = (event) => {
    const clickedTask = event.target.textContent;
    const foundIndex = tasks.findIndex((task) => task.task === clickedTask);
    tasks[foundIndex].completed = !tasks[foundIndex].completed;
    setTasks([...tasks]);
  };

  const renderTasks = () =>
    tasks.map((task, index) => (
      <li
        key={index}
        id={index}
        onClick={handleTask}
        className={`task ${task.completed ? 'task--completed' : ''}`}
      >
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
