const Button = (props) => {
  const handleButtonClick = (event) => {
    event.preventDefault();
    props.handleClick();
  };

  return (
    <input
      className={`button ${props.inputClass}`}
      type={props.inputType}
      value={props.inputValue}
      disabled={props.inputDisabled}
      onClick={handleButtonClick}
    />
  );
};

export default Button;
