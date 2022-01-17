import '../styles/App.scss';
import contacts from '../data/contacts.json';
import { useState } from 'react';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const [contactList, setContactList] = useState(contacts);
  const [searchTerm, setSearchTerm] = useState('');
  const [newContact, setNewContact] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
  });

  const handleForm = (event) => {
    event.preventDefault();
  };

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleNewContactForm = (event) => {
    setNewContact({
      ...newContact,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const handleNewContactButton = (event) => {
    event.preventDefault();
    setContactList([...contactList, newContact]);
    setNewContact({
      name: '',
      lastname: '',
      phone: '',
      email: '',
    });
  };

  const renderContactList = () => {
    return contactList
      .filter(
        (contact) =>
          contact.name
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase()) ||
          contact.lastname
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
            value={newContact.name}
            onChange={handleNewContactForm}
          />
          <input
            className="new-contact__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Apellidos"
            value={newContact.lastname}
            onChange={handleNewContactForm}
          />
          <input
            className="new-contact__input"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Teléfono"
            value={newContact.phone}
            onChange={handleNewContactForm}
          />
          <input
            className="new-contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={newContact.email}
            onChange={handleNewContactForm}
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
