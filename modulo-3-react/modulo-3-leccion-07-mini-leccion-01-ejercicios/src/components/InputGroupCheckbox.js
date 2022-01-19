const InputGroupCheckbox = (props) => {
  const handleLegalTerms = (event) => {
    props.handleChange(event.target.checked);
  };

  return (
    <div className="input-group-checkbox">
      <label className="label-check" htmlFor={props.inputId}>
        {props.labelText}
      </label>
      <input
        type="checkbox"
        name={props.inputName}
        id={props.inputId}
        checked={props.inputChecked}
        onChange={handleLegalTerms}
      />
    </div>
  );
};

export default InputGroupCheckbox;
