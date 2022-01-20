import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import Catalog from './Catalog.js';
import ProductDetail from './ProductDetail.js';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

function App() {
  /* Let's do magic! 🦄🦄🦄 */

  const getTitle = (text) => <h1>{text}</h1>;

  // state
  const [products, setProducts] = useState([]);

  // api
  useEffect(() => {
    callToApi().then((response) => {
      setProducts(response);
    });
  }, []);

  // router
  const routeData = useRouteMatch('/product-detail/:id');
  const getRouteProduct = () => {
    if (routeData !== null) {
      const routeId = routeData !== null ? routeData.params.id : '';
      const routeProduct = products.find((product) => product.id === routeId);
      return routeProduct || {};
    }
  };

  return (
    // HTML ✨

    <div className="app">
      {getTitle('Tienda de camisetas')}

      <Switch>
        <Route exact path="/">
          <Catalog products={products} />
        </Route>
        <Route path="/product-detail/:id">
          <ProductDetail product={getRouteProduct()} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
