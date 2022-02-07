const express = require('express');
const cors = require('cors');
const films = require('./films-data.json');

// create app server
const app = express();

// set express middlewares
app.use(express.json());
app.use(cors());

// set template engine middlewares
app.set('view engine', 'ejs');

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints

app.get('/es/film:filmId.html', (req, res) => {
  // body params
  const filmId = req.params.filmId;

  // find film data
  const filmData = films.find((film) => film.id === filmId);
  console.log('film data', filmData);

  // query params
  const awardsYear = req.query.awardsYear;
  console.log('awards year', awardsYear);

  // response with rendered template
  if (filmData) {
    //filmData.awards = filmData.awards.filter((award) => award.year === '2004');

    // filter awards by year
    filmData.awards = filmData.awards.filter(
      (award) => award.year === awardsYear
    );

    // ensure data
    filmData.title = filmData.title || '';
    filmData.year = filmData.year || '';
    filmData.director = filmData.director || '';
    filmData.country = filmData.country || '';
    filmData.awards = filmData.awards || [];

    res.render('pages/film', filmData);
  } else {
    res.render('pages/film-not-found');
  }
});
