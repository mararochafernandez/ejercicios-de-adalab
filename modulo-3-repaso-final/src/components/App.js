import '../styles/App.scss';
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
//import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import UserList from './UserList';
import Filters from './Filters';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const [users, setUsers] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterGender, setFilterGender] = useState('');

  useEffect(() => {
    getDataFromApi().then((dataFromApi) => {
      setUsers(dataFromApi);
    });
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase()) &&
      user.name.toLocaleLowerCase().includes(filterGender.toLocaleLowerCase())
  );

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
    } else if (data.key === 'gender') {
      setFilterGender(data.value);
    }
  };

  return (
    // HTML ✨

    <>
      <h1 className="title--big">Directorio de personas</h1>
      <div className="col2">
        <Filters filterName={filterName} handleFilter={handleFilter} />

        <UserList users={filteredUsers} />
      </div>
    </>
  );
}

export default App;
