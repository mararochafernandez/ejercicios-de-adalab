import '../styles/App.scss';
import header from '../images/ico-menu.svg';

function App() {
  return (
    <div className="app">
      {/* header */}
      <header className="header">
        {/* burger menu */}
        <a
          className="header__burger"
          href="https://adalab.es"
          title="Main menu"
        >
          <img
            className="header__image"
            src={header}
            alt="Main menu"
            title="Main menu"
          />
        </a>
      </header>
      {/* hero */}
      <section className="hero" id="top">
        <div className="hero__image">
          {/* hero article */}
          <article className="hero__article">
            <h1 className="hero__title">Anonymous Proxy</h1>
            <p className="hero__text">In hac habitasse platea dictumst.</p>
            {/* hero button */}
            <a
              className="button button__hero"
              href="./#reasons"
              title="Go to 3 Reasons To Purchase"
            >
              <span className="button__mask"></span>
            </a>
          </article>
        </div>
      </section>
      {/* main */}
      <main className="main">
        {/* main content section */}
        <section className="main-content">
          <article className="main-content__article">
            <p className="main-content__category">Insomnia Tips</p>
            <h2 className="main-content__title">Looking Through A Window</h2>
            <p className="main-content__text">
              Donec accumsan, nulla ut volutpat porttitor, quam odio tempus
              felis, at luctus ex diam nec lectus. Vivamus semper sodales
              rutrum.
            </p>
            {/* go button */}
            <a
              className="main-content__button"
              href="./"
              title="Go to Looking Through A Window"
            >
              Go
            </a>
          </article>
        </section>
        {/* reasons to purchase section */}
        <section className="reasons" id="reasons">
          <h3 className="reasons__title">3 Reasons To Purchase</h3>
          {/* first article */}
          <article className="reasons__article reasons__article--first">
            <h4 className="reasons__subtitle">Ut sed metus</h4>
            <p className="reasons__text">
              Lorem ipsum dolor sit amet, consecteur.
            </p>
          </article>
          {/* second article */}
          <article className="reasons__article reasons__article--second">
            <h4 className="reasons__subtitle">Curabitur ac erat</h4>
            <p className="reasons__text">
              Mauris mattis urna quis lorem molestie.
            </p>
          </article>
          {/* third article */}
          <article className="reasons__article reasons__article--third">
            <h4 className="reasons__subtitle">Morbi dictum</h4>
            <p className="reasons__text">
              Aliquam in dolor et dolor tincidunt.
            </p>
          </article>
          {/* more reasons button -*/}
          <a
            className="reasons__button"
            href="./"
            title="Go to Reasons To Purchase"
          >
            More reasons
          </a>
        </section>
      </main>
      {/* footer button */}
      <a className="button button__footer" href="./#top" title="Go to top">
        <span className="button__mask"></span>
      </a>
      {/* footer */}
      <footer className="footer">
        {/* footer menu */}
        <nav className="menu menu__footer">
          <ul className="menu__container">
            <li className="menu__item">
              <a
                className="menu__link"
                href="https://adalab.es"
                title="Articles"
              >
                Articles
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="https://adalab.es" title="Books">
                Books
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="https://adalab.es" title="Events">
                Events
              </a>
            </li>
            <li className="menu__item">
              <a
                className="menu__link"
                href="https://adalab.es"
                title="Reasons"
              >
                Reasons
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="https://adalab.es" title="Tips">
                Tips
              </a>
            </li>
          </ul>
        </nav>
        {/* social media menu */}
        <nav className="menu menu__socialmedia">
          <ul className="menu__container">
            <li className="menu__item">
              <a
                className="menu__link"
                href="https://twitter.com/Adalab_Digital"
                title="Twitter"
              >
                Twitter
              </a>
            </li>
            <li className="menu__item">
              <a
                className="menu__link"
                href="https://www.instagram.com/adalab_digital"
                title="Instagram"
              >
                Instagram
              </a>
            </li>
            <li className="menu__item">
              <a
                className="menu__link"
                href="https://adalab.es"
                title="Mastodon.social"
              >
                Mastodon.social
              </a>
            </li>
          </ul>
        </nav>
        {/* copyright secction */}
        <section className="copyright">
          <p>&copy; 2021</p>
          <p>
            we <i className="fas fa-heart"></i> components
          </p>
        </section>
      </footer>
    </div>
  );
}

export default App;
