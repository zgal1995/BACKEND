let apikey = '9fdeb004';

function getMovieInfo() {
  const movieName = document.getElementById('movieInput').value;
  const url = `http://www.omdbapi.com/?t=${movieName}&apikey=${apikey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Update HTML elements with movie data
      const poster = document.getElementById('moviePoster');
      const title = document.getElementById('movieTitle');
      const genre = document.getElementById('movieGenre');
      const year = document.getElementById('movieYear');
      const plot = document.getElementById('moviePlot');
      const director = document.getElementById('movieDirector');
      const actors = document.getElementById('movieActors');

      poster.src = data.Poster;
      title.textContent = data.Title;
      genre.textContent = data.Genre;
      year.textContent = data.Year;
      plot.textContent = data.Plot;
      director.textContent = data.Director;
      actors.textContent = data.Actors;
    })
    .catch(error => console.error(error));
}