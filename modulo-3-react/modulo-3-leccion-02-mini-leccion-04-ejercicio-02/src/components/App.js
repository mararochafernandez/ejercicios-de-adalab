import '../styles/App.scss';
import { useState } from 'react';

const App = () => {
  /* Let's do magic! 🦄🦄🦄 */

  const getTitle = (text) => <h1>{text}</h1>;

  const [mode, setMode] = useState(false);

  const handleButton = (event) => {
    setMode(!mode);
    event.target.parentNode.classList.toggle('darkmode');
  };

  const renderDarkModeText = (text) => (mode ? <p>{text}</p> : null);

  return (
    // HTML ✨

    <div className="app">
      {getTitle('Dark mode')}

      {renderDarkModeText('Tienes activado el dark mode')}

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet
        malesuada erat, at mollis tortor aliquam nec. Duis in hendrerit diam, a
        viverra nunc. Phasellus elementum, neque tincidunt lobortis semper,
        lorem arcu pretium orci, vitae tincidunt quam metus a augue. Ut semper
        placerat est. Pellentesque vehicula mauris augue, nec cursus nisl
        porttitor sed. Proin sed pretium ex. Duis ipsum mi, vestibulum ut
        maximus eget, consectetur non tortor. Vivamus varius arcu ut libero
        feugiat fringilla. Vivamus ipsum ante, maximus eget dui sit amet,
        porttitor iaculis tellus. Duis odio dolor, bibendum ut consectetur vel,
        hendrerit sit amet libero. Nullam viverra luctus maximus. Etiam turpis
        turpis, venenatis quis dui quis, lobortis lobortis odio. Proin augue
        dolor, imperdiet commodo venenatis aliquam, pellentesque quis velit.
        Aliquam a vestibulum velit. Nullam ut lorem fringilla, ultricies ex
        ultricies, dignissim quam.
      </p>

      <button
        className="button"
        type="button"
        name="button"
        onClick={handleButton}
      >
        Des / activar dark mode
      </button>
    </div>
  );
};

export default App;
