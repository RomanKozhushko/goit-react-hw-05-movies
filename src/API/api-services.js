const BASE_URL = 'https://api.themoviedb.org/3/';
const MY_KEY = 'e09801b88bee36721ddccafeb1a578e0';

export function getPoPMovies() {
   
    return fetch(`${BASE_URL}trending/movie/week?api_key=${MY_KEY}`)
        .then(response => {
            return response.json();
        }
  );
}

export function getSearchMovies(query) {

    // console.log(`${BASE_URL}search/movie?api_key=${MY_KEY}&query=${query}`);
   
    return fetch(`${BASE_URL}search/movie?api_key=${MY_KEY}&query=${query}`)
        .then(response => {
            return response.json();
        }
        );
}


export function getDetailsMovies(movieId) {

    // console.log(`${BASE_URL}movie/${movieId}?api_key=${MY_KEY}`);
   
    return fetch(`${BASE_URL}movie/${movieId}?api_key=${MY_KEY}`)
        .then(response => {
            return response.json();
        }
        );
}

export function getCastMovies(movieId) {

    // console.log(`${BASE_URL}movie/${movieId}/credits?api_key=${MY_KEY}`);
   
    return fetch(`${BASE_URL}movie/${movieId}/credits?api_key=${MY_KEY}`)
        .then(response => {
            return response.json();
        }
        );
}


export function getRewiesMovies(movieId) {

    // console.log(`${BASE_URL}movie/${movieId}/reviews?api_key=${MY_KEY}`);
   
    return fetch(`${BASE_URL}movie/${movieId}/reviews?api_key=${MY_KEY}`)
        .then(response => {
            return response.json();
        }
        );
}

















// export function fetchMoviesTrending(pageNumber) {
   
//     return fetch(`${BASE_URL}trending/movie/week?api_key=${MY_KEY}&page=${pageNumber}`)
//         .then(response => {
//             return response.json();
//         }
//   );
// }

// export function fetchMoviesGenres() {
   
//     return fetch(`${BASE_URL}genre/movie/list?api_key=${MY_KEY}`)
//         .then(response => {
//             return response.json();
//         }
//   );
// }

// export function fetchMoviesByName(name, pageNumber) {

//     const searchName = name.replace(" ", "+");

//     console.log(`${BASE_URL}search/movie?api_key=${MY_KEY}&query=${searchName}&page=${pageNumber}`);
   
//     return fetch(`${BASE_URL}search/movie?api_key=${MY_KEY}&query=${searchName}&page=${pageNumber}`)
//         .then(response => {
//             return response.json();
//         }
//     );
// }

// export function fetchMoviesById(movieId) {

//     console.log(`${BASE_URL}movie/${movieId}?api_key=${MY_KEY}`);
   
//     return fetch(`${BASE_URL}movie/${movieId}?api_key=${MY_KEY}`)
//         .then(response => {
//             return response.json();
//         }
//         );
// }
