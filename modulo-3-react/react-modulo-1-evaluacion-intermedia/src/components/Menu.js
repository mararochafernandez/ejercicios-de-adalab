import '../styles/Menu.scss';
import Link from './Link';

const Menu = () => {
  return (
    <nav className="header__nav">
      <ul className="menu">
        <Link
          class="menu__link"
          url="https://adalab.es/"
          name="Blog"
          openInNewTab
        />
        <Link class="menu__link" url="https://adalab.es/" name="Contacto" />
      </ul>
    </nav>
  );
};

export default Menu;
