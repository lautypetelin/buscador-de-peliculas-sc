document.getElementById("searchButton").addEventListener("click", searchMovies);
let api_key = "df4c424641166e8e9febac0ac3bfa779";
let urlBase = "https://api.themoviedb.org/3/search/movie";
let urlImg = 'https://image.tmdb.org/t/p/w500';

let results = document.getElementById("results");

function searchMovies() {
  results.innerHTML = "Cargando...";
  let searchInput = document.getElementById("searchInput").value;
  
  fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
  .then((response) => response.json())
  .then((response) => displayMovies(response.results)); //Nos devuelve un arreglo de peliculas
}

function displayMovies(movies) {
  results.innerHTML = "";
  
  if (movies.length === 0) {
    results.innerHTML = "<p>No se encontraron resultados para tu búsqueda.</p>";
    return;
  } else {
    movies.forEach((movie) => {
      let movieDiv = document.createElement("div");
      movieDiv.classList.add("movie");

      let title = document.createElement("h2");
      title.textContent = movie.title;

      let releaseDate = document.createElement("p");
      releaseDate.textContent = `La fecha de lanzamiento fue: ${movie.release_date}`;

      let overview = document.createElement("p");
      overview.textContent = movie.overview;

      let posterPath = urlImg + movie.poster_path;
      let poster = document.createElement("img");
      poster.src = posterPath;

      //Agregamos los elementos al div movieDiv
      movieDiv.appendChild(poster);
      movieDiv.appendChild(title);
      movieDiv.appendChild(releaseDate);
      movieDiv.appendChild(overview);
      movieDiv.appendChild(poster);

      //Y el div movieDiv hay que agregarlo al div html
      results.appendChild(movieDiv);
    });
  }
}
