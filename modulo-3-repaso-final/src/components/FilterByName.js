const FilterByName = (props) => {
  const handleInput = (event) => {
    props.handleFilter({
      key: 'name',
      value: event.currentTarget.value,
    });
  };

  return (
    <>
      <label className="form__label display-block" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input
        className="form__input-text"
        type="text"
        name="name"
        id="name"
        value={props.inputValue}
        onChange={handleInput}
      />
    </>
  );
};

export default FilterByName;
