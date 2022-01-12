import { useState } from 'react';

const App = () => {
  // Estados del componente
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('España peninsular'); // Iniciamos el componente con la primera opción del select
  const [paymentType, setPaymentType] = useState('');
  const [legalTerms, setLegalTerms] = useState(false);

  // Eventos
  const handleName = (ev) => {
    setName(ev.target.value);
  };

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handleRegion = (ev) => {
    setRegion(ev.target.value);
  };

  const handlePaymentType = (ev) => {
    setPaymentType(ev.target.value);
  };

  const handleLegalTerms = (ev) => {
    // Como lo que nos interesa es si está activo o no guardamos el checked
    setLegalTerms(ev.target.checked);
  };

  const handleResetButton = () => {
    // Ponemos los mismo valores que hemos usado arriba en los useState
    setName('');
    setEmail('');
    setRegion('España peninsular');
    setPaymentType('');
    setLegalTerms(false);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    console.log('Enviando datos al servidor...');
  };

  // Funciones que nos ayudan a renderizar
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
    // El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado una tipo de pago y cuando los términos legales sean true
    // También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
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
    <div>
      <form className="form" onSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className="form">
          {/* name */}
          <label className="label-text" htmlFor="name">
            Escribe un nombre:
          </label>
          <input
            className="input-text"
            type="text"
            name="name"
            id="name"
            placeholder="María García"
            value={name}
            onChange={handleName}
          />

          {/* email */}
          <label className="label-text" htmlFor="email">
            Escribe un email:
          </label>
          <input
            className="input-text"
            type="email"
            name="email"
            id="email"
            placeholder="mariagarcia@gmail.com"
            value={email}
            onChange={handleEmail}
          />

          {/* region */}
          <label className="label-text" htmlFor="region">
            Indica tu región:
          </label>
          <select
            className="input-select"
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

        <div className="preview">
          <h2>Tus datos son:</h2>
          <ul>
            <li>Nombre: {name}</li>
            <li>Email: {email}</li>
            <li>Región: {region}</li>
            <li>Método de pago: {renderPaymentTypeText()}</li>
            <li>
              Has aceptado nuestros términos legales:{' '}
              {legalTerms === true ? 'Sí' : 'No'}
            </li>
          </ul>
        </div>

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
