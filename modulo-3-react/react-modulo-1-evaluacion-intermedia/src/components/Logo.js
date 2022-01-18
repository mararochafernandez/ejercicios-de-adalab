import '../styles/Logo.scss';
import logo from '../images/adalab-logo-155x61.png';

const Logo = () => {
  return (
    <a
      className="header__logo"
      href="https://adalab.es/"
      target="_blank"
      rel="noreferrer"
    >
      <img className="header__image" src={logo} alt="Adalab" title="Adalab" />
    </a>
  );
};

export default Logo;
