import InputGroupText from './InputGroupText';
import InputGroupSelect from './InputGroupSelect';
import InputGroupRadio from './InputGroupRadio';
import InputGroupCheckbox from './InputGroupCheckbox';
import Button from './Button';

const Form = (props) => {
  const isValidForm = () => {
    if (
      props.name !== '' &&
      props.email !== '' &&
      props.paymentType !== '' &&
      props.legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <form className="form">
      <h2>Rellena tus datos para finalizar la compra:</h2>
      <div className="form">
        <InputGroupText
          labelText="Escribe un nombre:"
          inputName="name"
          inputId="name"
          inputPlaceholder="María García"
          inputValue={props.name}
          handleChange={props.handleName}
        />

        <InputGroupText
          labelText="Escribe un email:"
          inputName="email"
          inputId="email"
          inputPlaceholder="mariagarcia@gmail.com"
          inputValue={props.email}
          handleChange={props.handleEmail}
        />

        <InputGroupSelect
          labelText="Indica tu región:"
          inputName="region"
          inputId="region"
          inputValue={props.region}
          options={[
            'España peninsular',
            'Islas Canarias',
            'Islas Baleares',
            'Ceuta',
            'Melilla',
          ]}
          handleChange={props.handleRegion}
        />

        <label className="label-text">Indica tu método de pago:</label>

        <InputGroupRadio
          labelText="Tarjeta de crédito"
          inputName="paymentType"
          inputId="creditCard"
          inputValue="creditCard"
          inputChecked={props.paymentType === 'creditCard'}
          handleChange={props.handlePaymentType}
        />

        <InputGroupRadio
          labelText="Efectivo"
          inputName="paymentType"
          inputId="cash"
          inputValue="cash"
          inputChecked={props.paymentType === 'cash'}
          handleChange={props.handlePaymentType}
        />

        <InputGroupRadio
          labelText="Contra reembolso"
          inputName="paymentType"
          inputId="cashOnDelivery"
          inputValue="cashOnDelivery"
          inputChecked={props.paymentType === 'cashOnDelivery'}
          handleChange={props.handlePaymentType}
        />

        <InputGroupCheckbox
          labelText="Debes aceptar nuestros términos legales para completar la compra:"
          inputName="legalTerms"
          inputId="legalTerms"
          inputChecked={props.legalTerms}
          handleChange={props.handleLegalTerms}
        />
      </div>

      <Button
        inputType="submit"
        inputValue="Enviar"
        inputDisabled={isValidForm() === false}
        handleClick={props.handleForm}
      />

      <Button
        inputClass="reset"
        inputType="reset"
        inputValue="Limpiar el formulario"
        handleClick={props.handleReset}
      />
    </form>
  );
};

export default Form;
