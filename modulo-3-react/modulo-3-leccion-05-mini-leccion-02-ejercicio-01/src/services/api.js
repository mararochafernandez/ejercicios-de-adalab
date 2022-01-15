const callToApi = () => {
  return fetch('https://api.tvmaze.com/search/shows?q=paranormal')
    .then((response) => response.json())
    .then((response) => {
      return response.map((element) => {
        return {
          name: element.show.name,
        };
      });
    });
};

export default callToApi;
