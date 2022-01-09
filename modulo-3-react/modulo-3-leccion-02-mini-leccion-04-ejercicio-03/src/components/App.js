import '../styles/App.scss';
import { useState } from 'react';

const App = () => {
  /* Let's do magic! 🦄🦄🦄 */

  const getTitle = (text) => <h1>{text}</h1>;

  const [menu, setMenu] = useState(false);

  const handleMenu = (event) => {
    setMenu(!menu);

    const menuElement = document.querySelector('.js-menu');
    const menuIconElement = document.querySelector('.js-menu-icon');

    menuElement.classList.toggle('hidden');
    menuIconElement.classList.toggle('hidden');
  };

  return (
    // HTML ✨

    <div className="app">
      {getTitle('El menú de hamburguesa')}

      <nav className="nav">
        <button
          className="button button--menu-icon js-menu-icon"
          type="button"
          onClick={handleMenu}
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="menu__container hidden js-menu">
          <button
            className="button button--arrow-icon"
            type="button"
            onClick={handleMenu}
          >
            <i className="fas fa-arrow-left"></i>
          </button>

          <ul className="menu">
            <li className="menu__item">
              <a className="menu__link" href="./">
                Enlace de menú 1
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="./">
                Enlace de menú 2
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="./">
                Enlace de menú 3
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <p className="text">
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
    </div>
  );
};

export default App;
