import '../styles/App.scss';
import { useState } from 'react';
import Preview from './Preview';
import InputGroupText from './InputGroupText';
import InputGroupSelect from './InputGroupSelect';
import InputGroupRadio from './InputGroupRadio';
import InputGroupCheckbox from './InputGroupCheckbox';
import Button from './Button';

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

  const handlePaymentType = (value) => {
    setPaymentType(value);
  };

  const handleLegalTerms = (checked) => {
    setLegalTerms(checked);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setRegion('España peninsular');
    setPaymentType('');
    setLegalTerms(false);
  };

  const handleForm = () => {
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
      <form className="form">
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
          <InputGroupSelect
            labelText="Indica tu región:"
            inputName="region"
            inputId="region"
            inputValue={region}
            handleChange={handleRegion}
            options={[
              'España peninsular',
              'Islas Canarias',
              'Islas Baleares',
              'Ceuta',
              'Melilla',
            ]}
          />

          {/* payment type */}
          <label className="label-text">Indica tu método de pago:</label>

          <InputGroupRadio
            labelText="Tarjeta de crédito"
            inputName="paymentType"
            inputId="creditCard"
            inputValue="creditCard"
            inputChecked={paymentType === 'creditCard'}
            handleChange={handlePaymentType}
          />

          <InputGroupRadio
            labelText="Efectivo"
            inputName="paymentType"
            inputId="cash"
            inputValue="cash"
            inputChecked={paymentType === 'cash'}
            handleChange={handlePaymentType}
          />

          <InputGroupRadio
            labelText="Contra reembolso"
            inputName="paymentType"
            inputId="cashOnDelivery"
            inputValue="cashOnDelivery"
            inputChecked={paymentType === 'cashOnDelivery'}
            handleChange={handlePaymentType}
          />

          {/* legal terms */}
          <InputGroupCheckbox
            labelText="Debes aceptar nuestros términos legales para completar la compra:"
            inputName="legalTerms"
            inputId="legalTerms"
            inputChecked={legalTerms}
            handleChange={handleLegalTerms}
          />
        </div>

        <Preview
          name={name}
          email={email}
          region={region}
          paymentType={paymentType}
          legalTerms={legalTerms}
        />

        {/* send */}
        <Button
          inputType="submit"
          inputValue="Enviar"
          inputDisabled={isValidForm() === false}
          handleClick={handleForm}
        />

        {/* reset */}
        <Button
          inputClass="reset"
          inputType="reset"
          inputValue="Limpiar el formulario"
          handleClick={handleReset}
        />
      </form>
    </div>
  );
};

export default App;
