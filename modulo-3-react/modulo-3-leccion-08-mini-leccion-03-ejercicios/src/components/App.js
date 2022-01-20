import '../styles/App.scss';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';

//console.log(uuid());

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const getTitle = (text) => <h1>{text}</h1>;

  return (
    // HTML ✨

    <div className="app">
      <Header />

      {getTitle('Happy coding!')}

      <Switch>
        <Route exact path="/">
          <h2>Overview page</h2>
        </Route>

        <Route path="/repositories">
          <h2>Repositories page</h2>
        </Route>

        <Route path="/packages">
          <h2>Packages page</h2>
        </Route>

        <Route path="/people">
          <h2>People page</h2>
        </Route>

        <Route path="/teams">
          <h2>Teams page</h2>
        </Route>

        <Route path="/projects">
          <h2>Projects page</h2>
        </Route>

        <Route path="/settings">
          <h2>Settings page</h2>
        </Route>

        <Route>
          <h2>Page not found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
