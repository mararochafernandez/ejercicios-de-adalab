const callToApi = (searchName) => {
  return fetch(`https://api.tvmaze.com/search/shows?q=${searchName}}`)
    .then((response) => response.json())
    .then((response) => {
      return response.map((element) => {
        return {
          id: element.show.id,
          name: element.show.name,
        };
      });
    });
};

export default callToApi;
