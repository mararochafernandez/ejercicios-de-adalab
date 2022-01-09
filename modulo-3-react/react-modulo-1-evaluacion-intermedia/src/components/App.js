import '../styles/App.scss';
import logo from '../images/adalab-logo-155x61.png';

function App() {
  return (
    <div className="app">
      <header className="header">
        <a
          className="header__logo"
          href="https://adalab.es/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="header__image"
            src={logo}
            alt="Adalab"
            title="Adalab"
          />
        </a>
        <nav className="header__nav">
          <ul className="menu">
            <li>
              <a
                className="menu__link"
                href="https://adalab.es/"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="menu__link"
                href="https://adalab.es/"
                target="_blank"
                rel="noreferrer"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <h1 className="main__title">Creando diversidad digital</h1>
      </main>
    </div>
  );
}

export default App;
