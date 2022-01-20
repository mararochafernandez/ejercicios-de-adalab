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
      <img
        src={
          props.product.imageUrl
            ? props.product.imageUrl.replace(
                '//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/tshirt-eshop-v1',
                'https://raw.githubusercontent.com/mararochafernandez/ejercicios-de-adalab/master/modulo-3-react/modulo-3-leccion-08-mini-leccion-04-ejercicio-01/src'
              )
            : null
        }
        alt={props.product.name}
      />
      <p>{props.product.description}</p>
      <p>{props.product.price} €</p>
      <ul>{props.product.sizes ? renderSizes() : null}</ul>
      <Link to="/">Volver al listado de productos</Link>
    </article>
  );
};

export default ProductDetail;
