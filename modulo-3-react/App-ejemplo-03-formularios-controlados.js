import { useState } from 'react';

const App = () => {
  /* Let's do magic! 🦄🦄🦄 */

  const getTitle = (text) => <h1>{text}</h1>;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('España peninsular');
  const [paymentType, setPaymentType] = useState('');
  const [legalTerms, setLegalTerms] = useState(false);

  // event handlers

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleRegion = (event) => {
    setRegion(event.target.value);
  };

  const handlePaymentType = (event) => {
    setPaymentType(event.target.value);
  };

  const handleLegalTerms = (event) => {
    setLegalTerms(event.target.checked);
  };

  const handleResetButton = () => {
    setName('');
    setEmail('');
    setRegion('España peninsular');
    setPaymentType('');
    setLegalTerms(false);
  };

  const handleForm = (event) => {
    event.preventDefault();
    console.log('Enviando datos al servidor...');
  };

  // render helpers

  const renderPaymentTypeText = () => {
    if (paymentType === 'creditCard') {
      return 'Tarjeta de crédito';
    } else if (paymentType === 'cash') {
      return 'Efectivo';
    } else if (paymentType === 'cashOnDelivery') {
      return 'Contra reembolso';
    }
  };

  const isValidForm = () => {
    if (
      name !== '' &&
      email !== '' &&
      paymentType !== '' &&
      legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    // HTML ✨

    <div>
      {getTitle('Formularios controlados')}

      <form onSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div>
          {/* name */}
          <label htmlFor="name">Escribe un nombre:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="María García"
            value={name}
            onChange={handleName}
          />

          {/* email */}
          <label htmlFor="email">Escribe un email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="mariagarcia@gmail.com"
            value={email}
            onChange={handleEmail}
          />

          {/* region */}
          <label htmlFor="region">Indica tu región:</label>
          <select
            name="region"
            id="region"
            value={region}
            onChange={handleRegion}
          >
            <option>España peninsular</option>
            <option>Islas Canarias</option>
            <option>Islas Baleares</option>
            <option>Ceuta</option>
            <option>Melilla</option>
          </select>

          {/* payment type */}
          <label>Indica tu método de pago:</label>

          <div>
            <label htmlFor="creditCard">Tarjeta de crédito</label>
            <input
              type="radio"
              name="paymentType"
              id="creditCard"
              value="creditCard"
              checked={paymentType === 'creditCard'}
              onChange={handlePaymentType}
            />
          </div>

          <div>
            <label htmlFor="cash">Efectivo</label>
            <input
              type="radio"
              name="paymentType"
              id="cash"
              value="cash"
              checked={paymentType === 'cash'}
              onChange={handlePaymentType}
            />
          </div>

          <div>
            <label htmlFor="cashOnDelivery">Contra reembolso</label>
            <input
              type="radio"
              name="paymentType"
              id="cashOnDelivery"
              value="cashOnDelivery"
              checked={paymentType === 'cashOnDelivery'}
              onChange={handlePaymentType}
            />
          </div>

          {/* legal terms */}
          <label htmlFor="legalTerms">
            Debes aceptar nuestros términos legales para completar la compra:
          </label>
          <input
            type="checkbox"
            name="legalTerms"
            id="legalTerms"
            checked={legalTerms}
            onChange={handleLegalTerms}
          />
        </div>

        <div>
          <h2>Tus datos son:</h2>
          <ul>
            <li>Nombre: {name}</li>
            <li>Email: {email}</li>
            <li>Región: {region}</li>
            <li>Método de pago: {renderPaymentTypeText()}</li>
            <li>
              Has aceptado nuestros términos legales:
              {legalTerms === true ? 'Sí' : 'No'}
            </li>
          </ul>
        </div>

        {/* reset */}
        <input
          type="submit"
          value="Enviar"
          disabled={isValidForm() === false}
        />

        {/* send */}
        <button onClick={handleResetButton}>Limpiar el formulario</button>
      </form>
    </div>
  );
};

export default App;
