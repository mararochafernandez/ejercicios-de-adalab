const callToApi = () => {
  return fetch('URL')
    .then((response) => response.json())
    .then((response) => response);
};

export default callToApi;
