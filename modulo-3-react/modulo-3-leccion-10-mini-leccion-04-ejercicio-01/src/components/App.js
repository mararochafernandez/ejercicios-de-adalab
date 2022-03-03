import MenuItem from './MenuItem';

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <MenuItem text="Blog" href="https://adalab.es/blog" openInNewTab />
            <MenuItem text="Contacto" href="https://adalab.es/contacto" />
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default App;
