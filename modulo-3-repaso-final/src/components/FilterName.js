const FilterName = (props) => {
  const handleInput = (event) => {
    props.handleFilter({
      key: event.currentTarget.id,
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
        value={props.filterName}
        onChange={handleInput}
      />
    </>
  );
};

export default FilterName;
