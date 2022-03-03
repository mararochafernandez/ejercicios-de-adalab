import '../styles/App.scss';
//import { useEffect, useState } from 'react';
//import callToApi from '../services/api';
//import ls from '../services/localstorage';
//import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
//import PropTypes from 'prop-types';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  // api

  //const [data, setData] = useState([]);

  /*
  useEffect(() => {
    callToApi().then((dataFromApi) => {
      setData(dataFromApi);
    });
  }, []);
  */

  // local storage

  //const [name, setName] = useState(ls.get('name', ''));
  //const [email, setEmail] = useState(ls.get('email', ''));

  //useState(ls.get('data', {}).name || '');
  //useState(ls.get('data', {}).email || '');

  /*
  useEffect(() => {
    ls.set('name', name);
    ls.set('email', email);
  }, [name, email]);
  */

  /*
  useEffect(() => {
    ls.set('data', {
      name: name,
      email: email,
    });
  }, [name, email]);
  */

  return (
    // HTML ✨

    <div>Happy coding!</div>
  );
}

// default props

/*
NombreDelComponente.defaultProps = {
  nombreDeLaProp1: 'valorPorDefectoDeLaProp1',
  nombreDeLaProp2: 'valorPorDefectoDeLaProp2',
};
*/

// prop types

/*
NombreDeMiComponente.propTypes = {
  nombreDeMiPropDeTipoStringOpcional: PropTypes.string,
  nombreDeMiPropDeTipoStringObligatoria: PropTypes.string.isRequired
}
*/

export default App;
