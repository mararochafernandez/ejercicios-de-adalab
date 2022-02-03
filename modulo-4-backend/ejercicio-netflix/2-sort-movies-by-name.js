// 3. Ordena por nombre

// Fichero index.js

server.get('/movies', (req, res) => {
  const genderFilter = req.query.gender;
  const sortFilter = req.query.sort;

  const filteredMovies = movies
    // filter by gender
    .filter((movie) =>
      genderFilter === '' ? true : genderFilter === movie.gender
    )
    // sort by name
    .sort((a, b) =>
      sortFilter === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
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
  return fetch(
    `//localhost:4000/movies?gender=${params.gender}&sort=${params.sort}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
