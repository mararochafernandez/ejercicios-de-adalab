// 2. Filtra por género

// Fichero index.js

server.get('/movies', (req, res) => {
  const gender = req.query.gender;

  // filter by gender
  const filteredMovies = movies.filter((movie) =>
    gender === '' ? true : movie.gender === gender
  );

  const response = {
    success: true,
    movies: filteredMovies,
  };

  res.json(response);
});

// Fichero api-movies.js

const getMoviesFromApi = (params) => {
  console.log(params);
  return fetch(`//localhost:4000/movies?gender=${params.gender}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
