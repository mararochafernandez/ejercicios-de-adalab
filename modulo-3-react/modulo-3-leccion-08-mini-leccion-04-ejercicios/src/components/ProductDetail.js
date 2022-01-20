import { Link } from 'react-router-dom';

const ProductDetail = (props) => {
  const renderSizes = () => {
    return props.product.sizes.map((size, index) => (
      <li key={index}>{size.toUpperCase()}</li>
    ));
  };

  return (
    <article>
      <h2>{props.product.name}</h2>
      <img src={props.product.imageUrl} alt={props.product.name} />
      <p>{props.product.description}</p>
      <p>{props.product.price} €</p>
      <ul>{props.product.sizes ? renderSizes() : null}</ul>
      <Link to="/">Volver al listado de productos</Link>
    </article>
  );
};

export default ProductDetail;
