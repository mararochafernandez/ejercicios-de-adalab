import '../styles/Loader.scss';

const Loader = (props) => {
  return props.isLoading ? <div className="loader"></div> : null;
};

export default Loader;
