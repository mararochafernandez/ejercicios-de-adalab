const callToApi = () => {
  return fetch(
    'https://beta.adalab.es/pw-recursos/apis/tshirt-eshop-v1/products.json'
  )
    .then((response) => response.json())
    .then((response) => response.items);
};

export default callToApi;
