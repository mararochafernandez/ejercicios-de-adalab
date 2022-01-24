import '../styles/App.scss';
import { useEffect, useState } from 'react';
import getDataFromApi from '../services/getDataFromApi';
import { Route, Switch } from 'react-router-dom';
import Filters from './Filters';
import UserList from './UserList';
import UserDetail from './UserDetail';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  // state

  const [users, setUsers] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('all');
  const [citiesFilter, setCitiesFilter] = useState([]);

  // api

  useEffect(() => {
    getDataFromApi().then((dataFromApi) => setUsers(dataFromApi));
  }, []);

  // event handlers

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setNameFilter(data.value);
    } else if (data.key === 'gender') {
      setGenderFilter(data.value);
    } else if (data.key === 'location') {
      if (data.checked) {
        setCitiesFilter([...citiesFilter, data.value]);
      } else {
        const cityIndex = citiesFilter.indexOf(data.value);
        citiesFilter.splice(cityIndex, 1);
        setCitiesFilter([...citiesFilter]);
      }
    }
  };

  // render helpers

  const filteredUsers = users
    .filter((user) =>
      user.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase())
    )
    .filter((user) =>
      genderFilter === 'all' ? true : genderFilter === user.gender
    )
    .filter((user) =>
      citiesFilter.length === 0 ? true : citiesFilter.includes(user.city)
    );

  const renderUserDetail = (props) => {
    const foundUser = users.find((user) => user.id === props.match.params.id);
    if (foundUser !== undefined) {
      return <UserDetail user={foundUser} />;
    }
  };

  const getCities = () => {
    return users.map((user) => user.city);
  };

  return (
    // HTML ✨

    <>
      <h1 className="title--big">Directorio de personas</h1>
      <div className="col2">
        <Switch>
          <Route path="/user/:id" render={renderUserDetail} />
        </Switch>
        <Filters
          nameFilter={nameFilter}
          genderFilter={genderFilter}
          cities={getCities()}
          handleFilter={handleFilter}
        />
        <UserList users={filteredUsers} />
      </div>
    </>
  );
}

export default App;
