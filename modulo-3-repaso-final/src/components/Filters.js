import FilterByName from './FilterByName';
import FilterByGender from './FilterByGender';
import FilterByCities from './FilterByCities';

const Filters = (props) => {
  return (
    <section>
      <form>
        <FilterByName
          inputValue={props.nameFilter}
          handleFilter={props.handleFilter}
        />

        <FilterByGender
          inputValue={props.genderFilter}
          handleFilter={props.handleFilter}
        />

        <FilterByCities
          cities={props.cities}
          handleFilter={props.handleFilter}
        />
      </form>
    </section>
  );
};

export default Filters;
