const InputGroupText = (props) => {
  const handleInputChange = (event) => {
    props.handleChange(event.target.value);
  };

  return (
    <div className="input-group-text">
      <label className="label-text" htmlFor={props.inputId}>
        {props.labelText}
      </label>
      <input
        className="input-text"
        type="text"
        name={props.inputName}
        id={props.inputId}
        placeholder={props.inputPlaceholder}
        value={props.inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputGroupText;
