const Button = (props) => {
  const handleButtonClick = (event) => {
    event.preventDefault();
    props.handleClick();
  };

  const className = props.inputClass ? `button ${props.inputClass}` : 'button';

  return (
    <input
      className={className}
      type={props.inputType}
      value={props.inputValue}
      disabled={props.inputDisabled}
      onClick={handleButtonClick}
    />
  );
};

export default Button;
