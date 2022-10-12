//To check how it works on a browser terminal, uncomment this paragraf below:

/*
getAllDirectors(movies);
const directorMovies = getMoviesFromDirector(movies, 'Quentin Tarantino');
moviesAverageOfDirector(directorMovies);
orderAlphabetically(movies);
orderByYear(movies);
moviesAverageByCategory(movies, 'Action');
hoursToMinutes(movies);
bestFilmOfYear(movies, 1995)
*/


// Exercise 1: Get the array of all directors.
function getAllDirectors(moviesList) {
  let result = moviesList.map(movie => {
      return movie.director;
  });

/* This version doesn't repeat any director:
  moviesList.forEach(movie => {
    if (!result.includes(movie.director)){
      result.push(movie.director)
    };
  });
*/

  console.log("EXERCICE 1 ->", result);

  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let directorMovies = movies.filter(movie => movie.director === director);

  console.log("EXERCICE 2 ->", directorMovies);

  return directorMovies;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(selectedMovies) {
  let directorsAverage = selectedMovies.reduce(
    (prev, curr) => prev + curr.score, 0
  );

  directorsAverage = Number((parseFloat(directorsAverage/selectedMovies.length)).toFixed(2));
  
  console.log("EXERCICE 3 ->", directorsAverage);

  return directorsAverage;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const sortedMoviesbyTitle = ([...movies].sort((a, b) => {
    const titleA = a.title.toUpperCase(); // ignore upper and lowercase
    const titleB = b.title.toUpperCase(); // ignore upper and lowercase
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  })).slice(0, 20).map(movie => {
    return movie.title;
});

  console.log("EXERCICE 4 ->", sortedMoviesbyTitle);

  return sortedMoviesbyTitle;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const sortedMoviesbyYear = ([...movies].sort((a, b) => {
    const yearA = a.year;
    const yearB = b.year;

    if (yearA < yearB) {
      return -1;
    }
    if (yearA > yearB) {
      return 1;
    }
    if (yearA === yearB){
      const titleA = a.title.toUpperCase(); // ignore upper and lowercase
      const titleB = b.title.toUpperCase(); // ignore upper and lowercase
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    }
  }));

  console.log("EXERCICE 5 ->", sortedMoviesbyYear);

  return sortedMoviesbyYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {

  console.log(category);
  const categoryMovies = movies.filter(movie => (movie.genre).includes(category) && movie.score != '');
  
  console.log(categoryMovies);

  const categoryAverage = moviesAverageOfDirector(categoryMovies);

  console.log("EXERCICE 6 ->", categoryAverage);

  return categoryAverage;
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  const moviesInMinutes = movies.map( movie => {

    let filmInMinutes = {...movie};

    const minutesRegex = /([\d]+)m/;
    const hoursRegex = /([\d]+)h/;

    let minutes = 0;
    let hours = 0;

    let minutesData = filmInMinutes.duration.toLowerCase().match(minutesRegex);
    let hoursData = filmInMinutes.duration.toLowerCase().match(hoursRegex);

    if (minutesData != null) {
      minutes = Number(minutesData[1]);
    }

    if (hoursData != null) {
      hours = Number(hoursData[1]);
    }

    filmInMinutes.duration = minutes + (hours * 60);

    return filmInMinutes;
  });

  console.log("EXERCICE 7 ->", moviesInMinutes);

  return moviesInMinutes;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const yearMovies = movies.filter(movie => movie.year === year);
  const yearBestMovie = [];
  let maxScoreFilm = {};
  maxScoreFilm.score = 0

  yearMovies.forEach(movie => {
    if (movie.score > maxScoreFilm.score){
      maxScoreFilm = movie;
    }
  })

  yearBestMovie.push(maxScoreFilm);

  console.log("EXERCICE 8 ->", yearBestMovie);

  return yearBestMovie;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}