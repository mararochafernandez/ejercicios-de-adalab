import '../styles/App.scss';
import { useState } from 'react';
import Preview from './Preview';
import InputGroupText from './InputGroupText';
import InputGroupSelect from './InputGroupSelect';

const App = () => {
  /* Let's do magic! 🦄🦄🦄 */

  // state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('España peninsular');
  const [paymentType, setPaymentType] = useState('');
  const [legalTerms, setLegalTerms] = useState(false);

  // events

  const handleName = (value) => {
    //debugger;
    setName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleRegion = (value) => {
    setRegion(value);
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
      <form className="form" onSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className="form">
          {/* name */}
          <InputGroupText
            labelText="Escribe un nombre:"
            inputName="name"
            inputId="name"
            inputValue={name}
            inputPlaceholder="María García"
            handleChange={handleName}
          />

          {/* email */}
          <InputGroupText
            labelText="Escribe un email:"
            inputName="email"
            inputId="email"
            inputValue={email}
            inputPlaceholder="mariagarcia@gmail.com"
            handleChange={handleEmail}
          />

          {/* region */}
          <InputGroupSelect region={region} handleChange={handleRegion} />

          {/* payment type */}
          <label className="label-text">Indica tu método de pago:</label>

          <div className="input-group-radio">
            <label className="label-radio" htmlFor="creditCard">
              Tarjeta de crédito
            </label>
            {/* Este radio solo debe aparecer activo cuando paymentType sea creditCard */}
            <input
              type="radio"
              name="paymentType"
              id="creditCard"
              value="creditCard"
              checked={paymentType === 'creditCard'}
              onChange={handlePaymentType}
            />
          </div>

          <div className="input-group-radio">
            <label className="label-radio" htmlFor="cash">
              Efectivo
            </label>
            {/* Este radio solo debe aparecer activo cuando paymentType sea cash */}
            <input
              type="radio"
              name="paymentType"
              id="cash"
              value="cash"
              checked={paymentType === 'cash'}
              onChange={handlePaymentType}
            />
          </div>

          <div className="input-group-radio">
            <label className="label-radio" htmlFor="cashOnDelivery">
              Contra reembolso
            </label>
            {/* Este radio solo debe aparecer activo cuando paymentType sea cashOnDelivery */}
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
          <div className="input-group-checkbox">
            <label className="label-check" htmlFor="legalTerms">
              Debes aceptar nuestros términos legales para completar la compra:
            </label>
            {/* Este radio solo debe aparecer activo cuando legalTerms sea true */}
            <input
              type="checkbox"
              name="legalTerms"
              id="legalTerms"
              checked={legalTerms}
              onChange={handleLegalTerms}
            />
          </div>
        </div>

        <Preview
          name={name}
          email={email}
          region={region}
          paymentType={paymentType}
          legalTerms={legalTerms}
        />

        {/* reset */}
        {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
        <input
          className="button"
          type="submit"
          value="Enviar"
          disabled={isValidForm() === false}
        />

        {/* send */}
        <button className="button reset" onClick={handleResetButton}>
          Limpiar el formulario
        </button>
      </form>
    </div>
  );
};

export default App;
