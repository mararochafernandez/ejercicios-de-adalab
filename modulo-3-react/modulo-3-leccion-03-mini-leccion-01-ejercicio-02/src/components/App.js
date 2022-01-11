import '../styles/App.scss';
import { useState } from 'react';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const getTitle = (text) => <h1>{text}</h1>;

  const [comments, setComments] = useState('');

  const handleTextarea = (event) => {
    setComments(
      event.currentTarget.value
        .replace(/[aeou]/g, 'i')
        .replace(/[AEOU]/g, 'I')
        .replace(/[áéóú]/g, 'í')
        .replace(/[ÁÉÓÚ]/g, 'Í')
    );
  };

  return (
    // HTML ✨

    <div className="app">
      {getTitle('Traductor MIMIMI')}

      <label htmlFor="comments">Comentarios:</label>
      <textarea
        id="comments"
        name="comments"
        rows="8"
        cols="40"
        onChange={handleTextarea}
      ></textarea>

      <p>{comments}</p>
    </div>
  );
}

export default App;
