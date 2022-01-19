const InputGroupRadio = (props) => {
  const handlePaymentType = (event) => {
    props.handleChange(event.target.value);
  };

  return (
    <div className="input-group-radio">
      <label className="label-radio" htmlFor={props.inputId}>
        {props.labelText}
      </label>
      <input
        type="radio"
        name="paymentType"
        id={props.inputId}
        value={props.inputValue}
        checked={props.inputChecked}
        onChange={handlePaymentType}
      />
    </div>
  );
};

export default InputGroupRadio;
