import { Link } from 'react-router-dom';

const Catalog = (props) => {
  const renderPoducts = () =>
    props.products.map((product) => (
      <article key={product.id}>
        <h2>{product.name}</h2>
        <img
          src={product.imageUrl.replace(
            '//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/tshirt-eshop-v1',
            'https://raw.githubusercontent.com/mararochafernandez/ejercicios-de-adalab/master/modulo-3-react/modulo-3-leccion-08-mini-leccion-04-ejercicio-01/src'
          )}
          alt={product.name}
        />
        <p>{product.price} €</p>
        <Link to={`/product-detail/${product.id}`}>
          Ver detalle del producto
        </Link>
      </article>
    ));

  return <section>{renderPoducts()}</section>;
};

export default Catalog;
