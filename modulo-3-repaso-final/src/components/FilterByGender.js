const FilterByGender = (props) => {
  const handleInput = (event) => {
    props.handleFilter({
      key: 'gender',
      value: event.currentTarget.value,
    });
  };

  return (
    <>
      <label className="form__label display-block" htmlFor="gender">
        Género:
      </label>
      <select
        className="form__input-text"
        name="gender"
        id="gender"
        value={props.inputValue}
        onChange={handleInput}
      >
        <option value="all">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
        <option value="no-binary">No binario</option>
      </select>
    </>
  );
};

export default FilterByGender;
