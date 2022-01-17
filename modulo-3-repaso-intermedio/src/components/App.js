import '../styles/App.scss';
import contacts from '../data/contacts.json';
import { useState } from 'react';
//import { useEffect, useState } from 'react';
//import callToApi from '../services/api';
//import localStorage from '../services/localstorage';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  // api

  //const [data, setData] = useState({});

  /*
  useEffect(() => {
    callToApi().then((response) => {
      data(response);
    });
  }, []);
  */

  // local storage

  //const [name, setName] = useState(localStorage.get('name', ''));
  //const [email, setEmail] = useState(localStorage.get('email', ''));

  //useState(localStorage.get('data', {}).name || '');
  //useState(localStorage.get('data', {}).email || '');

  /*
  useEffect(() => {
    localStorage.set('name', name);
    localStorage.set('email', email);
  }, [name, email]);
  */

  /*
  localStorage.set('data', {
    name: name,
    email: email,
  });
  */

  const [searchTerm, setSearchTerm] = useState('');
  const [contactList, setContactList] = useState(contacts);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleForm = (event) => {
    event.preventDefault();
  };

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const handleLastnameInput = (event) => {
    setLastname(event.target.value);
  };

  const handlePhoneInput = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handleNewContactButton = (event) => {
    event.preventDefault();
    contactList.push({
      name: name,
      lastname: lastname,
      phone: phone,
      email: email,
    });
    setContactList([...contactList]);
  };

  const renderContactList = () => {
    return contactList
      .filter((contact) =>
        contact.name
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      )
      .map((contact, index) => (
        <li key={index} className="contact__item">
          <p className="contact__name">
            <label className="contact__label">Nombre:</label>
            {`${contact.name} ${contact.lastname}`}
          </p>
          <p className="contact__phone">
            <label className="contact__label">Teléfono:</label>
            <a
              href={`tel:${contact.phone}`}
              title="Pulsa aquí para llamar a Lola"
            >
              {contact.phone}
            </a>
          </p>
          <p className="contact__mail">
            <label className="contact__label">Email:</label>
            <a
              href={`mailto:${contact.email}`}
              title="Pulsa aquí para escribir a Lola"
            >
              {contact.email}
            </a>
          </p>
        </li>
      ));
  };

  return (
    // HTML ✨

    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Mi agenda de contactos</h1>
        <form onSubmit={handleForm}>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar contactos por nombre"
            value={searchTerm}
            onChange={handleSearchInput}
          />
        </form>
      </header>

      <main>
        {/* contact list */}
        <ul className="contact__list">{renderContactList()}</ul>

        {/* new contact */}
        <form className="new-contact__form">
          <h2 className="new-contact__title">Añade un nuevo contacto</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            value={name}
            onChange={handleNameInput}
          />
          <input
            className="new-contact__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Apellidos"
            value={lastname}
            onChange={handleLastnameInput}
          />
          <input
            className="new-contact__input"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Teléfono"
            value={phone}
            onChange={handlePhoneInput}
          />
          <input
            className="new-contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailInput}
          />
          <input
            className="new-contact__btn"
            type="submit"
            value="Añadir"
            onClick={handleNewContactButton}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
