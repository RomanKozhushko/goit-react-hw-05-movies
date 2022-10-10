const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ffa1dbd293d2550fedb353b8b8700950';

// Запит на популярні фільми!
export function fetchPopMovies() {
  return fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`).then(
    response => {
      return response.json();
    }
  );
}

//// Запит на пошук фільмів відповідно до пошукового слова!
export function fetchSearchMovies(query) {
  return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`).then(
    response => {
      return response.json();
    }
  );
}
// Запит на завантаження детальної інформації про фільм!
export function fetchDetailsMovies(movieId) {
  return fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`).then(
    response => {
      return response.json();
    }
  );
}

// Запит на завантаження детальної інформації про акторів фільму!
export function fetchCastMovies(movieId) {
  return fetch(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`).then(
    response => {
      return response.json();
    }
  );
}

// Запит на завантаження відгуків фільму!
export function fetchRewiesMovies(movieId) {
  return fetch(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`).then(
    response => {
      return response.json();
    }
  );
}
