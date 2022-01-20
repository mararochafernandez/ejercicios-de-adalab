import { Link } from 'react-router-dom';

const Catalog = (props) => {
  const renderPoducts = () =>
    props.products.map((product) => (
      <article key={product.id}>
        <h2>{product.name}</h2>
        <img src={product.imageUrl} alt={product.name} />
        <p>{product.price} €</p>
        <Link to={`/product-detail/${product.id}`}>
          Ver detalle del producto
        </Link>
      </article>
    ));

  return <section>{renderPoducts()}</section>;
};

export default Catalog;
