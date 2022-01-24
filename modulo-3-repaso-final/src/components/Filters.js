import FilterName from './FilterName';
import FilterGender from './FilterGender';
import FilterCity from './FilterCity';

const Filters = (props) => {
  return (
    <section>
      <form>
        <FilterName
          users={props.users}
          filterName={props.inputValue}
          handleFilter={props.handleFilter}
        />

        <FilterGender />

        <FilterCity />
      </form>
    </section>
  );
};

export default Filters;
