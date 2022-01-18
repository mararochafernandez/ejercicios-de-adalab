import '../styles/Header.scss';
import Logo from './Logo.js';
import Menu from './Menu.js';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
